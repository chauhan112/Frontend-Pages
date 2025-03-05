import React, { useState, useRef } from "react";

const getBorderRadius = (borderRadius) => {
    return `${borderRadius.s1}% ${100 - borderRadius.s1}% ${borderRadius.s2}% ${
        100 - borderRadius.s2
    }% / ${borderRadius.s4}% ${borderRadius.s3}% ${100 - borderRadius.s3}% ${
        100 - borderRadius.s4
    }%`;
};
const DisplayBlob = ({ height, width, borderRadius, colors }) => {
    return (
        <div
            className="shape mb-5 transition-all duration-300"
            style={{
                height: `${height}px`,
                width: `${width}px`,
                borderRadius: getBorderRadius(borderRadius),
                background: `linear-gradient(to bottom, ${colors.start} 0%, ${colors.end} 100%)`,
            }}
        />
    );
};

const NumberInput = ({ label, value, onChange }) => {
    return (
        <div className="flex items-center">
            <label className="mr-2">{label}</label>
            <input
                type="number"
                value={value}
                onChange={onChange}
                min="0"
                max="500"
                className="w-16 mr-4 p-1 border rounded"
            />
        </div>
    );
};

const RangeInput = ({ value, onChange }) => {
    return (
        <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={onChange}
            className="w-full"
        />
    );
};

const RangeGroup = ({ k1, k2, v1, v2, onChange }) => {
    return (
        <div className="flex flex-col gap-4 w-1/2">
            <RangeInput value={v1} onChange={onChange(k1)} />
            <RangeInput value={v2} onChange={onChange(k2)} />
        </div>
    );
};

const ColorInput = ({ colors, handleColorChange }) => {
    return (
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
    );
};

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

    const handleHeightChange = (e) => {
        setHeight(parseInt(e.target.value, 10));
    };

    const handleWidthChange = (e) => {
        setWidth(parseInt(e.target.value, 10));
    };

    const handleBorderRadiusChange = (key) => (e) => {
        setBorderRadius((prev) => ({
            ...prev,
            [key]: parseInt(e.target.value, 10),
        }));
    };

    const handleColorChange = (key) => (e) => {
        setColors((prev) => ({
            ...prev,
            [key]: e.target.value,
        }));
    };

    const generateCSS = () => {
        return `border-radius: ${getBorderRadius(borderRadius)};
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
            <DisplayBlob
                height={height}
                width={width}
                borderRadius={borderRadius}
                colors={colors}
            />
            <div className="w-full ">
                <div className="flex justify-between items-center mb-5">
                    <NumberInput
                        label="Height"
                        value={height}
                        onChange={handleHeightChange}
                    />

                    <NumberInput
                        label="Width"
                        value={width}
                        onChange={handleWidthChange}
                    />
                    <ColorInput
                        colors={colors}
                        handleColorChange={handleColorChange}
                    />
                </div>
                <div className="flex gap-4">
                    <RangeGroup
                        k1="s1"
                        k2="s2"
                        v1={borderRadius.s1}
                        v2={borderRadius.s2}
                        onChange={handleBorderRadiusChange}
                    />
                    <RangeGroup
                        k1="s3"
                        k2="s4"
                        v1={borderRadius.s3}
                        v2={borderRadius.s4}
                        onChange={handleBorderRadiusChange}
                    />
                </div>
                <div className="flex flex-col mt-5">
                    <pre className="bg-[#f1eff9] border-rounded text-sm">
                        {generateCSS()}
                    </pre>
                    <button
                        onClick={handleCopy}
                        className="mt-5 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
                    >
                        Copy
                    </button>
                </div>
            </div>
        </div>
    );
};
