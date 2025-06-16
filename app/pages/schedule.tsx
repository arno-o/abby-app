import NavBar from "~/components/NavBar";
import ScheduleCard from "~/components/ScheduleCard";
import AbbyArrowLeft from "~/components/icons/AbbyArrowLeft";
import AbbyArrowRight from "~/components/icons/AbbyArrowRight";

import scheduleImg1 from "~/assets/img/schedule/schedule_item_1.png";
import scheduleImg2 from "~/assets/img/schedule/schedule_item_2.png";
import scheduleImg3 from "~/assets/img/schedule/schedule_item_3.png";
import scheduleImg4 from "~/assets/img/schedule/schedule_item_4.png";
import scheduleImg5 from "~/assets/img/schedule/schedule_item_5.png";
import scheduleImg6 from "~/assets/img/schedule/schedule_item_6.png";

import { useState } from 'react';
import { Link } from "react-router";
import { scheduleActivityItems } from "~/data/data";

const Schedule = () => {
    const [dateNavFirst, setDateNavFirst] = useState(true);
    const [activityNavFirst, setActivityNavFirst] = useState(true);

    const activeActivity = `bg-abby-blue text-white`;

    const scheduleImages = [scheduleImg1, scheduleImg2, scheduleImg3, scheduleImg4, scheduleImg5, scheduleImg6];

    return (
        <>
            <div className="p-5 bg-abby-yellow flex flex-col gap-4">
                <div className="flex">
                    <button onClick={() => setDateNavFirst(true)} className={`${dateNavFirst ? "border-b-4" : "border-b-2"} w-full transition-all`}><div className="text-center p-5 text-xl">By Date</div></button>
                    <button onClick={() => setDateNavFirst(false)} className={`${!dateNavFirst ? "border-b-4" : "border-b-2"} w-full transition-all`}><div className=" text-center p-5 text-xl">Show All</div></button>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 border-2 rounded-full w-fit px-4 py-1">
                        June 2025
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="10" viewBox="0 0 17 10" fill="none">
                            <path d="M15.5 8.5L8.5 1.5L1.5 8.5" stroke="black" strokeWidth="2" strokeLinecap="square" />
                        </svg>
                    </div>

                    <div className="flex gap-3">
                        <AbbyArrowLeft size={30} disabled />
                        <AbbyArrowRight size={30} />
                    </div>
                </div>

                <div className="flex flex-row justify-between">
                    <div className="flex flex-col text-center text-xl border-3 p-2 justify-center opacity-50">
                        <p>Fri</p>
                        <p className="text-2xl font-bold">6</p>
                    </div>

                    <div className="flex flex-col text-center text-xl border-3 p-2 justify-center opacity-50">
                        <p>Sat</p>
                        <p className="text-2xl font-bold">7</p>
                    </div>

                    <div className="flex flex-col text-center text-xl border-3 p-2 bg-abby-blue">
                        <p>Sun</p>
                        <p className="text-2xl font-bold">8</p>
                        <p>Today</p>
                    </div>

                    <div className="flex flex-col text-center text-xl border-3 p-2 justify-center">
                        <p>Mon</p>
                        <p className="text-2xl font-bold">9</p>
                    </div>

                    <div className="flex flex-col text-center text-xl border-3 p-2 justify-center">
                        <p>Tue</p>
                        <p className="text-2xl font-bold">10</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between bg-stone-200 m-4">
                <button onClick={() => setActivityNavFirst(true)} className={`transition-all m-3 text-center w-full p-4 text-abby-blue text-xl ${activityNavFirst ? activeActivity : ""}`}>Activities</button>
                <button onClick={() => setActivityNavFirst(false)} className={`transition-all m-3 text-center w-full p-4 text-abby-blue text-xl ${!activityNavFirst ? activeActivity : ""}`}>Expo's</button>
            </div>

            <div className="px-4 pb-4">
                {scheduleActivityItems.items
                    .filter(item => activityNavFirst ? item.type === "activity" : item.type === "expo")
                    .map((item) => (
                        <Link to={`${item.id}`}>
                            <ScheduleCard key={item.image_url} timespan={item.timespan} title={item.title} location={item.location} image_url={item.image_url} type={item.type} image={scheduleImages[item.id]} />
                        </Link>
                    ))}
            </div>

            <NavBar />
        </>
    );
}

export default Schedule;