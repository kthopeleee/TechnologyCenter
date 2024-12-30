import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Line } from '@nivo/line';
import Header from '../../../Header/Header';
import './GraphPage.css';

const GraphPage = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [graphDetails, setGraphDetails] = useState(null);
    const [visibleSeries, setVisibleSeries] = useState({}); // Tracks visibility of each series

    useEffect(() => {
        const configPath = `${process.env.PUBLIC_URL}/analytica/graphConfig.json`; // Corrected path
        const fetchConfigAndData = async () => {
            try {
                const configResponse = await fetch(configPath);
                const config = await configResponse.json();

                const currentGraph = config.find(graph => graph.id.toString() === id);
                setGraphDetails(currentGraph);

                if (currentGraph) {
                    const dataPath = `${process.env.PUBLIC_URL}/analytica/${currentGraph.dataPath}`; // Corrected path
                    const dataResponse = await fetch(dataPath);
                    const rawData = await dataResponse.json();

                    // Updated data transformation
                    const transformedData = rawData.map(school => ({
                        id: school.id, // Correct key
                        data: school.data, // Use existing data array
                    }));

                    setData(transformedData);

                    // Initialize all series as visible
                    const visibility = {};
                    transformedData.forEach(series => {
                        visibility[series.id] = true;
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

    if (!graphDetails || data.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="graph-page">
            <Header />
            <div className="graph-container">
                <h1>{graphDetails.title}</h1>
                <p>{graphDetails.description}</p>

                {/* Toggle visibility options */}
                <div className="toggle-container">
                    {data.map(series => (
                        <label key={series.id}>
                            <input
                                type="checkbox"
                                checked={visibleSeries[series.id]}
                                onChange={() => toggleSeriesVisibility(series.id)}
                            />
                            {series.id}
                        </label>
                    ))}
                </div>

                {/* Nivo Line Chart */}
                <div className="chart-container">
                    <Line
                        width={800} // Set explicit width
                        height={500} // Set explicit height
                        data={filteredData}
                        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                        xScale={{ type: 'point' }}
                        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
                        axisBottom={{
                            orient: 'bottom',
                            legend: 'Year',
                            legendOffset: 36,
                            legendPosition: 'middle',
                        }}
                        axisLeft={{
                            orient: 'left',
                            legend: 'Percentage Change',
                            legendOffset: -40,
                            legendPosition: 'middle',
                        }}
                        colors={{ scheme: 'category10' }}
                        pointSize={10}
                        pointColor={{ theme: 'background' }}
                        pointBorderWidth={2}
                        pointBorderColor={{ from: 'serieColor' }}
                        useMesh={true}
                        legends={[
                            {
                                anchor: 'bottom-right',
                                direction: 'column',
                                translateX: 100,
                                itemsSpacing: 2,
                                itemWidth: 80,
                                itemHeight: 20,
                                symbolSize: 12,
                                symbolShape: 'circle',
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default GraphPage;