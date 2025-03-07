const Display = () => {
    return (
        <div className="w-full bg-[#eef3f8] p-4 rounded-lg flex justify-center items-center">
            <div className="w-[200px] h-[200px] linear-gradient"></div>
        </div>
    );
};

const InputController = ({ label }) => {
    return (
        <div className="flex flex-col my-4 w-[200px]">
            <div>
                <label htmlFor="height">{label}</label>
                <input
                    type="number"
                    min="0"
                    max="500"
                    defaultValue="200"
                    className="border border-gray-300 rounded-lg p-2"
                />
            </div>
        </div>
    );
};
const InputColor = ({ label }) => {
    return (
        <div className="flex flex-col my-4 w-[200px] justify-center items-center">
            <label htmlFor="height">{label}</label>
            <input type="color" />
        </div>
    );
};
const Controllers = () => {
    return (
        <div className="flex gap-4">
            <InputController label="Height" />
            <InputController label="Width" />
            <InputColor label="Color" />
            <InputColor label="Color2" />
        </div>
    );
};

const CodeDisplay = () => {
    return <div>BlobGen</div>;
};

export const BlobGen = () => {
    return (
        <div className="w-full p-6 ">
            <Display />
            <Controllers />
            <CodeDisplay />
            <button>Copy Code</button>
        </div>
    );
};
