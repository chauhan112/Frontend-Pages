import React, { useState, useRef } from "react";

export const ShapeEditor = () => {
    const [height, setHeight] = useState(200);
    const [width, setWidth] = useState(200);
    const [borderRadius, setBorderRadius] = useState({
        s1: 37,
        s2: 20,
        s3: 80,
        s4: 63,
    });
    const [colors, setColors] = useState({
        start: "#B6FFFA",
        end: "#808BFF",
    });

    const textAreaRef = useRef(null);

    // Handle height change
    const handleHeightChange = (e) => {
        setHeight(parseInt(e.target.value, 10));
    };

    // Handle width change
    const handleWidthChange = (e) => {
        setWidth(parseInt(e.target.value, 10));
    };

    // Handle border-radius changes
    const handleBorderRadiusChange = (key) => (e) => {
        setBorderRadius((prev) => ({
            ...prev,
            [key]: parseInt(e.target.value, 10),
        }));
    };

    // Handle color changes
    const handleColorChange = (key) => (e) => {
        setColors((prev) => ({
            ...prev,
            [key]: e.target.value,
        }));
    };

    // Generate CSS string for copying
    const getBorderRadius = () => {
        return `${borderRadius.s1}% ${100 - borderRadius.s1}% ${
            borderRadius.s2
        }% ${100 - borderRadius.s2}% / ${borderRadius.s4}% ${
            borderRadius.s3
        }% ${100 - borderRadius.s3}% ${100 - borderRadius.s4}%`;
    };
    const generateCSS = () => {
        return `border-radius: ${getBorderRadius()};
background: linear-gradient(to bottom, ${colors.start} 0%, ${
            colors.end
        } 100%);`;
    };

    // Handle copy to clipboard
    const handleCopy = () => {
        const css = generateCSS();
        navigator.clipboard.writeText(css).then(() => {
            alert("CSS copied to clipboard!");
        });
    };

    return (
        <div className="flex flex-col items-center p-5 bg-gray-100 rounded-lg font-sans">
            <div
                className="shape mb-5 transition-all duration-300"
                style={{
                    height: `${height}px`,
                    width: `${width}px`,
                    borderRadius: getBorderRadius(),
                    background: `linear-gradient(to bottom, ${colors.start} 0%, ${colors.end} 100%)`,
                }}
            />
            <div className="w-full max-w-md">
                <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center">
                        <label className="mr-2">Height</label>
                        <input
                            type="number"
                            value={height}
                            onChange={handleHeightChange}
                            min="0"
                            max="500"
                            className="w-16 mr-4 p-1 border rounded"
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="mr-2">Width</label>
                        <input
                            type="number"
                            value={width}
                            onChange={handleWidthChange}
                            min="0"
                            max="500"
                            className="w-16 mr-4 p-1 border rounded"
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="mr-2">Select Colors</label>
                        <input
                            type="color"
                            value={colors.start}
                            onChange={handleColorChange("start")}
                            className="w-12 h-8 mr-2"
                        />
                        <input
                            type="color"
                            value={colors.end}
                            onChange={handleColorChange("end")}
                            className="w-12 h-8"
                        />
                    </div>
                </div>
                <div className="space-y-4">
                    {Object.keys(borderRadius).map((key) => (
                        <div key={key} className="flex items-center gap-4">
                            <label className="w-24 capitalize">
                                {key.replace(/([A-Z])/g, " $1")}
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={borderRadius[key]}
                                onChange={handleBorderRadiusChange(key)}
                                className="w-full"
                            />
                        </div>
                    ))}
                </div>
                <textarea ref={textAreaRef} value={generateCSS()} readOnly />
                <button
                    onClick={handleCopy}
                    className="mt-5 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
                >
                    Copy
                </button>
            </div>
        </div>
    );
};
