import React, { useEffect, useState } from "react";
import ProgressBar from './ProgressBar.jsx';
import '../index.css';


export default function Home() {

    const [progress, setProgress] = useState(0);

    const simulateProgress = () => {
        setTimeout(() => {
            setProgress(progress + 100);
        }, 1000);
    };
    useEffect(() => {
        setProgress(0);
    }, []);

    const preventMinus = (e) => {
        if (e.code === 'Minus') {
            e.preventDefault();
        }
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="py-5 text-3xl">-Time 1.5Hr-</h1>
                <from>
                    <input className="border-2 w-40 h-10 border-gray-200 placeholder:px-1 rounded me-3 px-1" type="number" min="0"
                        onKeyPress={preventMinus} placeholder="Enter Your Name" />
                    <button className=" px-8 py-1  h-10 bg-blue-600 rounded-md text-white mb-2" onClick={simulateProgress}>start</button>
                    <ProgressBar value={progress} max={100} />
                </from>

            </div>
        </>
    );

    // return (
    //     <div>
    //         <button onClick={changeValue}>Change value</button>
    //         <br></br>
    //         <Progress id="linear" ref={linear1 => progressInstance = linear1} type='Linear' trackColor='gray' progressColor='blue' value={100} animation={{
    //             enable: false,
    //             duration: 2000,
    //             delay: 0
    //         }} valueChanged={(args) => {
    //             args.progressValue = 90;
    //         }}>
    //         </ProgressButton>
    //     </div>);
}
