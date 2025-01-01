import React from "react";
import BubbleChart from "./BubbleChart";
import chartConfig from "../../../../assets/data/graphConfig"; // Adjust the path based on your project structure

const ChartPage = ({ index }) => {
    // Find the chart configuration for the given index
    const chartDetails = chartConfig.find((chart) => chart.id === index);

    if (!chartDetails) {
        return <p>Chart not found. Please check the index.</p>;
    }

    return (
        <div className="chart-page">
            <h1 className="chart-title">{chartDetails.title}</h1>
            <p className="chart-description">{chartDetails.description}</p>
            <BubbleChart dataPath={`/data/${chartDetails.dataPath}`} />
        </div>
    );
};

export default ChartPage;