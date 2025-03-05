import { CountDown } from "./CountDown";
import { BlobGen } from "./BlobGen";
import {ShapeEditor} from "./ShapeEditor"
import "./App.css";
function App() {
    return (
        <div className="flex items-center justify-center min-h-screen ">
            {/* <CountDown /> */}
            <ShapeEditor/>
        </div>
    );
}

export default App;
