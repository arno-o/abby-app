import NavBar from "~/components/NavBar";
import ScheduleCard from "~/components/ScheduleCard";
import AbbyArrowLeft from "~/components/icons/AbbyArrowLeft";
import AbbyArrowRight from "~/components/icons/AbbyArrowRight";

import { useState } from 'react';
import { scheduleActivityItems } from "~/data/data";

const Schedule = () => {
    const [dateNavFirst, setDateNavFirst] = useState(true);

    const handleDateNav = () => {
        if (dateNavFirst) { setDateNavFirst(false) } else if (!dateNavFirst) { setDateNavFirst(true) }
    }

    return (
        <>
            <div className="p-5 bg-abby-yellow flex flex-col gap-4">
                <div className="flex">
                    <button onClick={handleDateNav} className={`${dateNavFirst ? "border-b-4" : "border-b-2"} w-full transition-all`}><div className="text-center p-5 text-xl">By Date</div></button>
                    <button onClick={handleDateNav} className={`${!dateNavFirst ? "border-b-4" : "border-b-2"} w-full transition-all`}><div className=" text-center p-5 text-xl">Show All</div></button>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 border-2 rounded-full w-fit px-4 py-1">
                        June 2025
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="10" viewBox="0 0 17 10" fill="none">
                            <path d="M15.5 8.5L8.5 1.5L1.5 8.5" stroke="black" stroke-width="2" stroke-linecap="square" />
                        </svg>
                    </div>

                    <div className="flex gap-3">
                        <AbbyArrowLeft size={30} disabled/>
                        <AbbyArrowRight size={30}/>
                    </div>
                </div>

                <div className="flex flex-row justify-between">
                    <div className="flex flex-col text-center text-xl border-3 p-2 justify-center w-full mr-2 opacity-50">
                        <p>Fri</p>
                        <p className="text-2xl font-bold">6</p>
                    </div>

                    <div className="flex flex-col text-center text-xl border-3 p-2 justify-center w-full mx-2 opacity-50">
                        <p>Sat</p>
                        <p className="text-2xl font-bold">7</p>
                    </div>

                    <div className="flex flex-col text-center text-xl border-3 p-2 bg-abby-blue w-full mx-2">
                        <p>Sun</p>
                        <p className="text-2xl font-bold">8</p>
                        <p>Today</p>
                    </div>

                    <div className="flex flex-col text-center text-xl border-3 p-2 justify-center w-full mx-2">
                        <p>Mon</p>
                        <p className="text-2xl font-bold">9</p>
                    </div>

                    <div className="flex flex-col text-center text-xl border-3 p-2 justify-center w-full ml-2">
                        <p>Tue</p>
                        <p className="text-2xl font-bold">10</p>
                    </div>
                </div>
            </div>

            {scheduleActivityItems.items.map((item) => (
                <ScheduleCard key={item.image_url} timespan={item.timespan} title={item.title} location={item.location} image_url={item.image_url}/>
            ))}

            <NavBar />
        </>
    );
}

export default Schedule;