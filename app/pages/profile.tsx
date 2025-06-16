import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { useIdentity } from '~/context/IdentityContext';
import Settings from '~/components/icons/Settings';
import BlobBackground from '~/components/Blob';
import NavBar from '~/components/NavBar';
import Loader from '~/components/Loader';
import { scheduleActivityItems } from '~/data/data';
import ScheduleCard from '~/components/ScheduleCard';

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
                {qrActive ? <div className='m-24' dangerouslySetInnerHTML={{ __html: svgElement }} />
                    :
                    <section className="h-[30vh] overflow-hidden">
                        <BlobBackground identity={currentIdentity} />
                    </section>
                }
            </div>

            <div className="flex flex-col items-center gap-5">
                <h1 className="text-4xl font-bold text-abby-purple">Good Evening, John</h1>

                {qrActive ?
                    <button onClick={() => setQrActive(false)} className="bg-abby-purple w-fit px-4 py-2 rounded-full text-white text-3xl">← My identity</button>
                    :
                    <button onClick={() => setQrActive(true)} className="bg-abby-purple w-fit px-4 py-2 rounded-full text-white text-3xl">My QR code →</button>
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
                                <ScheduleCard timespan={item.timespan} title={item.title} location={item.location} image_url={item.image_url} type={item.type} />
                            </Link>
                        ))}
                </div>
            </div>

            <NavBar />
        </>
    );
}

export default Profile;