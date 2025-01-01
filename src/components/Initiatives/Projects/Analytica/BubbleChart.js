import React, { useEffect, useState } from "react";
import { ResponsiveCirclePacking } from "@nivo/circle-packing";
import "./BubbleChart.css";

const BubbleChart = ({ dataPath }) => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        // Fetch data from the JSON file
        fetch(dataPath)
            .then((response) => response.json())
            .then((data) => setChartData(data))
            .catch((error) => console.error("Error loading bubble chart data:", error));
    }, [dataPath]);

    if (!chartData) {
        return <p>Loading chart...</p>;
    }

    return (
        <div className="bubble-chart-container" style={{ height: "600px", width: "100%" }}>
            <ResponsiveCirclePacking
                root={chartData}
                identity="name"
                value="value"
                colors={{ scheme: "nivo" }}
                labelTextColor={{ from: "color", modifiers: [["darker", 1.2]] }}
                labelSkipRadius={12} // Skip labels for smaller bubbles
                tooltip={({ id, value }) => (
                    <div style={{ padding: "5px 10px", background: "black", color: "white" }}>
                        <strong>{id}</strong>: {value}
                    </div>
                )}
                borderColor={{ from: "color", modifiers: [["darker", 0.5]] }}
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
            />
        </div>
    );
};

export default BubbleChart;