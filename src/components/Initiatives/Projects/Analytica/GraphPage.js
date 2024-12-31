// src/components/Initiatives/Projects/Analytica/GraphPage.js

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
  const { id } = useParams();           // e.g. "1"
  const [data, setData] = useState([]); // Nivo chart data
  const [graphDetails, setGraphDetails] = useState(null); 
  const [visibleSeries, setVisibleSeries] = useState({});
  const [minY, setMinY] = useState(-10);
  const [colorMap, setColorMap] = useState({});

  useEffect(() => {
    const configPath = `${process.env.PUBLIC_URL}/analytica/graphConfig.json`;
    const fetchConfigAndData = async () => {
      try {
        // 1) Fetch the config
        const configResponse = await fetch(configPath);
        const config = await configResponse.json();
        console.log("Graph Config:", config);

        // 2) Find the graph with the matching ID
        const currentGraph = config.find(graph => graph.id.toString() === id);
        console.log("Current Graph:", currentGraph);
        setGraphDetails(currentGraph);

        if (currentGraph) {
          // 3) Fetch the actual data from dataPath
          const dataPath = `${process.env.PUBLIC_URL}/analytica/${currentGraph.dataPath}`;
          const dataResponse = await fetch(dataPath);
          const rawData = await dataResponse.json();
          console.log("Raw Data:", rawData);

          // 4) Transform data for Nivo
          const transformedData = rawData.map((school, index) => ({
            id: school.id.trim(),
            data: school.data.map(point => ({
              x: point.x,
              y: typeof point.y === 'string' ? parseFloat(point.y) : point.y,
            })),
          }));
          console.log("Transformed Data:", transformedData);
          setData(transformedData);

          // 5) Assign a color to each series
          const newColorMap = {};
          transformedData.forEach((series, idx) => {
            newColorMap[series.id] = colorPalette[idx % colorPalette.length] || generateColor(idx);
          });
          setColorMap(newColorMap);

          // 6) Calculate minimum Y value
          const allYValues = transformedData.flatMap(series => series.data.map(point => point.y));
          const minYCalculated = Math.min(...allYValues);
          setMinY(Math.min(minYCalculated, -10));

          // 7) Initialize visibility (example: show only "Inflation" and "Columbia College")
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

  // Filter data based on which series are visible
  const filteredData = data.filter(series => visibleSeries[series.id]);

  // Toggle visibility of a specific series
  const toggleSeriesVisibility = (seriesId) => {
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
      <Header />  {/* The site header at the top */}
      <div className="graph-container">
        <h1>{graphDetails.title}</h1>
        <p>{graphDetails.description}</p>

        {/* Buttons Container */}
        <div className="buttons-container">
          {/* Hide All */}
          <button className="hide-all-button" onClick={hideAllSeries}>
            Hide All
          </button>
          {/* Show All */}
          <button className="show-all-button" onClick={showAllSeries}>
            Show All
          </button>
        </div>

        <div className="graph-content">
          {/* Toggle container for each series */}
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
                />
                {series.id}
              </label>
            ))}
          </div>

          {/* Nivo Line Chart */}
          <div className="chart-container">
            <ResponsiveLine
              data={filteredData}
              margin={{ top: 80, right: 60, bottom: 50, left: 80 }}
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
              colors={d => colorMap[d.id]}
              pointSize={10}
              pointColor={{ theme: 'background' }}
              pointBorderWidth={2}
              pointBorderColor={{ from: 'serieColor' }}
              useMesh={true}
              legends={[]} // We have our own legend
              enableSlices="x"
              tooltip={({ point }) => (
                <div className="chart-tooltip">
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