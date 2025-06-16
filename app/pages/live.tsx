import { useState } from "react";
import NavBar from "~/components/NavBar";
import BlobsContainer from "~/components/BlobsContainer";

import { roomItems, scheduleActivityItems } from "~/data/data";
import AbbyCross from "~/components/icons/AbbyCross";
import UserIcon from "~/components/icons/UserIcon";

const Live = () => {
    const [menu, setMenu] = useState(false);
    const [room, setRoom] = useState<number>(0);
    const [presentMenu, setPresentMenu] = useState(false);
    const [disableFirstOption, setDisableFirstOption] = useState(false);

    const activeRoom = roomItems.items[room];

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMenu(true);
        setDisableFirstOption(true);
        setRoom(Number(e.target.value));
    };

    const activeStatus = `bg-abby-purple text-white`;

    return (
        <>
            <div className="">
                <select name="roomSelect" id="roomselect" onChange={(e) => handleSelectChange(e)} className="absolute z-6 m-4 px-4 py-2 bg-abby-purple rounded-full text-white text-xl">
                    <option disabled={disableFirstOption}>Select Room</option>
                    {
                        roomItems.items.map((item) => (
                            <option key={item.id} value={item.id} onClick={() => setMenu(true)}>{item.roomName}</option>
                        ))
                    }
                </select>
                <div className={`${menu ? '' : 'hidden'}`}>
                    <div className="flex flex-col justify-between">
                        <div className="z-5 absolute mt-4 p-5 w-screen text-white">
                            <div className="flex justify-end items-center">
                                <button className="cursor-pointer" onClick={() => setMenu(false)}>
                                    <AbbyCross size={30} />
                                </button>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex items-center text-2xl gap-4">
                                    <UserIcon />
                                    <p>{activeRoom.occupants} People</p>
                                </div>
                                <div className="flex gap-3">
                                    <span className="p-1 border-3 h-fit">NOW</span>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-3xl">{scheduleActivityItems.items[activeRoom.id].title}</p>
                                        <p className="text-xl">{scheduleActivityItems.items[activeRoom.id].location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fixed z-5 flex justify-between bg-stone-300 m-4 bottom-32 w-[93%]" id="selectionMenu">
                        <button onClick={() => setPresentMenu(false)} className={`transition-all m-3 text-center w-full p-4 text-abby-purple text-xl ${!presentMenu ? activeStatus : ""}`}>Not Present</button>
                        <button onClick={() => setPresentMenu(true)} className={`transition-all m-3 text-center w-full p-4 text-abby-purple text-xl ${presentMenu ? activeStatus : ""}`}>Present</button>
                    </div>

                    <div className="absolute z-4 bg-black h-screen w-screen opacity-50" id="bg"></div>
                </div>

            </div>

            <div className="z-1">
                <BlobsContainer count={activeRoom.occupants} />
            </div>

            <NavBar />
        </>
    );
}

export default Live;