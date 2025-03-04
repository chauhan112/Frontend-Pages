import React, { useEffect, useState } from "react";
const TimeShow = ({ time, units }) => {
    return (
        <div>
            <div className="block text-blue-600">{time}</div>
            <div className="text-gray-500">{units}</div>
        </div>
    );
};
export const CountDown = () => {
    const [isActiv, setIsActiv] = useState(false);
    useEffect(() => {
        let interval;
        if (isActiv) {
            interval = setInterval(() => {
                updateTimer("2022-07-18");
                console.log("Interval is running");
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isActiv]);
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    function updateTimer(endtime) {
        console.log(endtime);
        let nextBday = Date.parse(endtime);
        const now = new Date();

        if (now > nextBday) {
            // add 1 year if the birthday has passed
            nextBday = new Date(nextBday);
            nextBday.setFullYear(nextBday.getFullYear() + 1);
        }
        const timeDifference = nextBday - now;

        const days = Math.floor(timeDifference / (1000 * 3600 * 24));
        const hours = Math.floor(
            (timeDifference % (1000 * 3600 * 24)) / (1000 * 3600)
        );
        const minutes = Math.floor(
            (timeDifference % (1000 * 3600)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        setTime({ days, hours, minutes, seconds });
    }

    return (
        <div className="text-center flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6">
                Countdown to Your Birthday
            </h1>
            <form className="mb-6 w-full">
                <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:ring focus:border-blue-500"
                    required
                    onChange={(e) => updateTimer(e.target.value)}
                />
                <input
                    type="button"
                    value="Start Countdown"
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    onClick={() => setIsActiv(true)}
                />
            </form>
            {isActiv && (
                <div className="text-2xl font-semibold">
                    <div className="flex justify-center space-x-4 ">
                        <TimeShow time={time.days} units="Days" />
                        <TimeShow time={time.hours} units="Hours" />
                        <TimeShow time={time.minutes} units="Minutes" />
                        <TimeShow time={time.seconds} units="Seconds" />
                    </div>
                    <button
                        className="mt-6 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                        onClick={() => {
                            setIsActiv(false);
                        }}
                    >
                        Reset
                    </button>
                </div>
            )}
        </div>
    );
};
