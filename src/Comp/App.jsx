import React, { useState, useEffect } from 'react';

export default function ProgressBarApp() {
    const [duration, setDuration] = useState(5);
    const [progress, setProgress] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (running && duration > 0) {
            const startTime = Date.now();
            interval = setInterval(() => {
                const elapsed = Date.now() - startTime;
                const percentage = Math.min((elapsed / (duration * 1000)) * 100, 100);
                // console.log(percentage);

                setProgress(percentage);
                if (percentage === 100) {
                    clearInterval(interval);
                    setRunning(false);
                }
            }, 50);
        }
        return () => clearInterval(interval);
    }, [running, duration]);

    const handleStart = () => {
        setProgress(0);
        setRunning(true);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="py-2 text-3xl">- Time {duration} sec -</h1>
            <div className="flex items-center gap-2">
                <input
                    type="number"
                    min="1"
                    value={duration}
                    onChange={(e) => setDuration(Math.max(1, Number(e.target.value)))}
                    className="border-2 w-32 h-10 border-gray-200 rounded px-2"
                    disabled={running}
                />
                <button
                    className="px-6 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
                    onClick={handleStart}
                    disabled={running}
                >
                    Start
                </button>
            </div>
            <div className="relative w-64  h-9 bg-gray-200 rounded-2xl mt-4  ">
                <div
                    className="absolute left-0 top-0 h-9 bg-blue-500 rounded-2xl"
                    style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
                />
                <span className="absolute text-white inset-0 flex justify-center items-center text-lg ">
                    {Math.round(progress)}%
                </span>
            </div>
        </div>
    );
}
