import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { useIdentity } from '~/context/IdentityContext';
import Settings from '~/components/icons/Settings';
import BlobBackground from '~/components/Blob';
import NavBar from '~/components/NavBar';
import Loader from '~/components/Loader';
import { scheduleActivityItems } from '~/data/data';
import ScheduleCard from '~/components/ScheduleCard';

import scheduleImg1 from "~/assets/img/schedule/schedule_item_1.png";
import scheduleImg2 from "~/assets/img/schedule/schedule_item_2.png";
import scheduleImg3 from "~/assets/img/schedule/schedule_item_3.png";
import scheduleImg4 from "~/assets/img/schedule/schedule_item_4.png";
import scheduleImg5 from "~/assets/img/schedule/schedule_item_5.png";
import scheduleImg6 from "~/assets/img/schedule/schedule_item_6.png";

const Profile = () => {
    const { identityData } = useIdentity();

    let currentIdentity = undefined;
    if (identityData && typeof identityData === 'object' && identityData.items && Array.isArray(identityData.items) && identityData.items.length > 0) {
        currentIdentity = identityData.items[0];
    }

    const [svgElement, setSvgElement] = useState("");
    const [qrActive, setQrActive] = useState(false);
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const activeActivity = `bg-abby-blue text-white`;

    const scheduleImages = [scheduleImg1, scheduleImg2, scheduleImg3, scheduleImg4, scheduleImg5, scheduleImg6];


    useEffect(() => {
        const generateQrCode = async () => {
            if (currentIdentity) {
                const qrModule = await import('qr');
                const encodeQR = qrModule.default;

                const qrContent = JSON.stringify(currentIdentity);
                const svg = encodeQR(qrContent, 'svg');
                setSvgElement(svg);
            }
        };

        generateQrCode();
    }, [currentIdentity]);

    if (!currentIdentity) {
        return <Loader />;
    }

    return (
        <>
            <div className="flex items-center justify-between p-4">
                <Settings />
                <Link to="scan" className="border-2 w-fit px-4 py-1 rounded-full text-xl">
                    Update Identity →
                </Link>
            </div>

            <div className="my-20">
            {qrActive ? (
                <>
                    <p className="text-center mx-4 text-xl text-stone-600">Scan this QR code to join any activities or expo’s you’ve registered for on the app.</p>
                    <div className='mx-24 mt-4' dangerouslySetInnerHTML={{ __html: svgElement }} />
                </>
            ) : (
                <section className="h-[30vh] overflow-x-clip">
                    <BlobBackground identity={currentIdentity} />
                </section>
            )}
        </div >

            <div className="flex flex-col items-center gap-5">
                <h1 className="text-4xl font-bold text-abby-purple">Good Evening, John</h1>

                {qrActive ?
                    <button onClick={() => setQrActive(false)} className="bg-abby-purple w-fit px-4 py-2 rounded-full text-white text-xl">← My identity</button>
                    :
                    <button onClick={() => setQrActive(true)} className="bg-abby-purple w-fit px-4 py-2 rounded-full text-white text-xl">My QR code →</button>
                }
            </div>

            <div className="flex flex-col p-4 gap-4">
                <h2 className="text-2xl">My Activities</h2>

                <div className="flex flex-row justify-between bg-stone-200">
                    <button onClick={() => setActiveTabIndex(0)} className={`transition-all m-2 text-center p-4 w-fitd text-abby-blue text-md ${activeTabIndex == 0 ? activeActivity : ""}`}>Going</button>
                    <button onClick={() => setActiveTabIndex(1)} className={`transition-all m-2 text-center p-4 w-fitd text-abby-blue text-md ${activeTabIndex == 1 ? activeActivity : ""}`}>Saved</button>
                    <button onClick={() => setActiveTabIndex(2)} className={`transition-all m-2 text-center p-4 w-fitd text-abby-blue text-md ${activeTabIndex == 2 ? activeActivity : ""}`}>Organised</button>
                </div>

                <div className="">
                    {scheduleActivityItems.items
                        .map((item) => (
                            <Link key={item.image_url} to={`/schedule/${item.id}`}>
                                <ScheduleCard timespan={item.timespan} title={item.title} location={item.location} image_url={item.image_url} type={item.type} image={scheduleImages[item.id]}/>
                            </Link>
                        ))}
                </div>
            </div>

            <NavBar />
        </>
    );
}

export default Profile;