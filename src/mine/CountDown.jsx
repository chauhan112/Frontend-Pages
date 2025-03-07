import React, { useEffect, useState } from "react";
const TimeShow = ({ time, units }) => {
    return (
        <div>
            <div className="block text-blue-600">{time}</div>
            <div className="text-gray-500">{units}</div>
        </div>
    );
};
const Form = ({ value, onDateChange, onStart }) => {
    return (
        <form className="mb-6 w-full">
            <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:ring focus:border-blue-500"
                required
                value={value}
                onChange={onDateChange}
            />
            <input
                type="button"
                value="Start Countdown"
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={onStart}
            />
        </form>
    );
};
const Timer = ({ time, onReset }) => {
    return (
        <div className="text-2xl font-semibold">
            <div className="flex justify-center space-x-4 ">
                <TimeShow time={time.days} units="Days" />
                <TimeShow time={time.hours} units="Hours" />
                <TimeShow time={time.minutes} units="Minutes" />
                <TimeShow time={time.seconds} units="Seconds" />
            </div>
            <button
                className="mt-6 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                onClick={onReset}
            >
                Reset
            </button>
        </div>
    );
};
const Header = () => {
    return (
        <h1 className="text-3xl font-bold mb-6">Countdown to Your Birthday</h1>
    );
};
export const CountDown = () => {
    const [isActiv, setIsActiv] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");
    useEffect(() => {
        let interval;
        if (isActiv) {
            interval = setInterval(() => {
                updateTimer();
                console.log("Interval is running");
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isActiv, selectedDate]);
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    function updateTimer() {
        if (!selectedDate) return;
        const now = new Date();
        let nextBday = new Date(
            now.getFullYear(),
            selectedDate.getMonth(),
            selectedDate.getDate()
        );

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
            <Header />
            <Form
                value={
                    selectedDate
                        ? selectedDate.toISOString().substring(0, 10)
                        : ""
                }
                onDateChange={(e) => setSelectedDate(new Date(e.target.value))}
                onStart={() => {
                    setIsActiv(true);
                    updateTimer();
                }}
            />
            {isActiv && (
                <Timer
                    time={time}
                    onReset={() => {
                        setIsActiv(false);
                        setSelectedDate("");
                    }}
                />
            )}
        </div>
    );
};
