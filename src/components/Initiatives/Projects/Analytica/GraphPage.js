// src/components/GraphPage/GraphPage.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ResponsiveLine } from '@nivo/line';
import Header from '../../../Header/Header';
import './GraphPage.css';

// Define a color palette (you can customize this as needed)
const colorPalette = [
    '#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231',
    '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe',
    '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000',
    '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080'
];

// Function to generate dynamic colors if palette runs out
const generateColor = (index) => {
    const hue = (index * 137.508) % 360; // Golden angle approximation for color distribution
    return `hsl(${hue}, 65%, 55%)`;
};

const GraphPage = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [graphDetails, setGraphDetails] = useState(null);
    const [visibleSeries, setVisibleSeries] = useState({});
    const [showToggle, setShowToggle] = useState(true);
    const [minY, setMinY] = useState(-10); // Default min y
    const [colorMap, setColorMap] = useState({}); // Mapping from series id to color

    useEffect(() => {
        const configPath = `${process.env.PUBLIC_URL}/analytica/graphConfig.json`;
        const fetchConfigAndData = async () => {
            try {
                const configResponse = await fetch(configPath);
                const config = await configResponse.json();
                console.log("Graph Config:", config);

                const currentGraph = config.find(graph => graph.id.toString() === id);
                console.log("Current Graph:", currentGraph);
                setGraphDetails(currentGraph);

                if (currentGraph) {
                    const dataPath = `${process.env.PUBLIC_URL}/analytica/${currentGraph.dataPath}`;
                    const dataResponse = await fetch(dataPath);
                    const rawData = await dataResponse.json();
                    console.log("Raw Data:", rawData);

                    // Ensure y is a number and trim id
                    const transformedData = rawData.map((school, index) => ({
                        id: school.id.trim(),
                        data: school.data.map(point => ({
                            x: point.x,
                            y: typeof point.y === 'string' ? parseFloat(point.y) : point.y,
                        })),
                    }));
                    console.log("Transformed Data:", transformedData);
                    setData(transformedData);

                    // Assign colors to each series
                    const newColorMap = {};
                    transformedData.forEach((series, index) => {
                        newColorMap[series.id] = colorPalette[index % colorPalette.length] || generateColor(index);
                    });
                    setColorMap(newColorMap);
                    console.log("Color Map:", newColorMap);

                    // Calculate minimum y value
                    const allYValues = transformedData.flatMap(series => series.data.map(point => point.y));
                    const minYCalculated = Math.min(...allYValues);
                    console.log("Minimum Y Value:", minYCalculated);

                    // Set minY to either minYCalculated or a lower bound (-10)
                    setMinY(Math.min(minYCalculated, -10));

                    // Initialize visibility with only "Inflation" and "Columbia College" visible
                    const visibility = {};
                    transformedData.forEach(series => {
                        if (series.id === 'Inflation' || series.id === 'Columbia College') {
                            visibility[series.id] = true;
                        } else {
                            visibility[series.id] = false;
                        }
                    });
                    setVisibleSeries(visibility);
                }
            } catch (error) {
                console.error("Error loading graph data:", error);
            }
        };

        fetchConfigAndData();
    }, [id]);

    // Filter data based on visibility
    const filteredData = data.filter(series => visibleSeries[series.id]);

    // Toggle visibility of a series
    const toggleSeriesVisibility = seriesId => {
        setVisibleSeries(prev => ({
            ...prev,
            [seriesId]: !prev[seriesId],
        }));
    };

    // Hide all series
    const hideAllSeries = () => {
        const allHidden = {};
        data.forEach(series => {
            allHidden[series.id] = false;
        });
        setVisibleSeries(allHidden);
    };

    // Show all series
    const showAllSeries = () => {
        const allVisible = {};
        data.forEach(series => {
            allVisible[series.id] = true;
        });
        setVisibleSeries(allVisible);
    };

    if (!graphDetails || data.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="graph-page">
            <Header />
            <div className="graph-container">
                <h1>{graphDetails.title}</h1>
                <p>{graphDetails.description}</p>

                {/* Buttons Container */}
                <div className="buttons-container">
                    {/* Toggle button to show/hide the legend */}

                    {/* Button to hide all series */}
                    <button className="hide-all-button" onClick={hideAllSeries}>
                        Hide All
                    </button>

                    {/* Button to show all series */}
                    <button className="show-all-button" onClick={showAllSeries}>
                        Show All
                    </button>
                </div>

                <div className="graph-content">
                    {/* Toggle visibility options (Legend) */}
                    {showToggle && (
                        <div className="toggle-container">
                            {data.map(series => (
                                <label
                                    key={series.id}
                                    className={`legend-item ${visibleSeries[series.id] ? 'active' : ''}`}
                                >
                                    <input
                                        type="checkbox"
                                        checked={visibleSeries[series.id]}
                                        onChange={() => toggleSeriesVisibility(series.id)}
                                        aria-label={`Toggle visibility for ${series.id}`}
                                    />
                                    <span
                                        className="color-box"
                                        style={{ backgroundColor: colorMap[series.id] }}
                                    ></span>
                                    {series.id}
                                </label>
                            ))}
                        </div>
                    )}

                    {/* Nivo Line Chart */}
                    <div className="chart-container">
                        <ResponsiveLine
                            data={filteredData}
                            margin={{ top: 80, right: 60, bottom: 50, left: 80 }} // Increased top margin
                            xScale={{ type: 'point' }}
                            yScale={{
                                type: 'linear',
                                min: minY,
                                max: 'auto',
                                stacked: false,
                                reverse: false,
                            }}
                            axisBottom={{
                                orient: 'bottom',
                                legend: 'Year',
                                legendOffset: 36,
                                legendPosition: 'middle',
                            }}
                            axisLeft={{
                                orient: 'left',
                                legend: 'Percentage Change',
                                legendOffset: -60,
                                legendPosition: 'middle',
                            }}
                            colors={d => colorMap[d.id]} // Use the color mapping
                            pointSize={10}
                            pointColor={{ theme: 'background' }}
                            pointBorderWidth={2}
                            pointBorderColor={{ from: 'serieColor' }}
                            useMesh={true}
                            legends={[]} // Remove built-in legends
                            enableSlices="x"
                            tooltip={({ point }) => (
                                <div
                                    style={{
                                        background: 'white',
                                        padding: '9px 12px',
                                        border: '1px solid #ccc',
                                        borderRadius: '4px',
                                    }}
                                >
                                    <strong>{point.serieId}</strong>
                                    <br />
                                    Year: {point.data.x}
                                    <br />
                                    Change: {point.data.yFormatted}%
                                </div>
                            )}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

};

export default GraphPage;