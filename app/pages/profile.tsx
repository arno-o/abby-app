import encodeQR from 'qr';
import { useState } from "react";
import { Link } from "react-router";
import NavBar from "~/components/NavBar";

import { scheduleActivityItems } from "~/data/data";
import ScheduleCard from '~/components/ScheduleCard';

const Profile = () => {

    const txt = 'Greetings from Devine!';
    const svgElement = encodeQR(txt, 'svg');

    const [qrActive, setQrActive] = useState(false);
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const activeActivity = `bg-abby-blue text-white`;

    return (
        <>
            <div className="m-20">
                {qrActive ? <div dangerouslySetInnerHTML={{ __html: svgElement }} />
                    : "blob"
                }
            </div>

            <div className="flex flex-col items-center gap-5">
                <h1 className="text-5xl font-bold text-abby-purple">Good Evening, John</h1>

                {qrActive ?
                    <button onClick={() => setQrActive(false)} className="bg-abby-purple w-fit px-4 py-2 rounded-full text-white text-3xl">← My identity</button>
                    : <button onClick={() => setQrActive(true)} className="bg-abby-purple w-fit px-4 py-2 rounded-full text-white text-3xl">My QR code →</button>
                }
            </div>

            <div className="flex flex-col p-4 gap-4">
                <h2 className="text-2xl">My Activities</h2>

                <div className="flex justify-between bg-stone-200">
                    <button onClick={() => setActiveTabIndex(0)} className={`transition-all m-3 text-center w-full p-4 text-abby-blue text-xl ${activeTabIndex == 0 ? activeActivity : ""}`}>Going</button>
                    <button onClick={() => setActiveTabIndex(1)} className={`transition-all m-3 text-center w-full p-4 text-abby-blue text-xl ${activeTabIndex == 1 ? activeActivity : ""}`}>Saved</button>
                    <button onClick={() => setActiveTabIndex(2)} className={`transition-all m-3 text-center w-full p-4 text-abby-blue text-xl ${activeTabIndex == 2 ? activeActivity : ""}`}>Organised</button>
                </div>

                <div className="">
                    {scheduleActivityItems.items
                        .map((item) => (
                            <Link to={`${item.id}`}>
                                <ScheduleCard key={item.image_url} timespan={item.timespan} title={item.title} location={item.location} image_url={item.image_url} type={item.type} />
                            </Link>
                        ))}
                </div>
            </div>

            <NavBar />
        </>
    );
}

export default Profile;