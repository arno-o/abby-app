import { useState } from "react";
import NavBar from "~/components/NavBar";
import BlobsContainer from "~/components/BlobsContainer";

import { roomItems, scheduleActivityItems } from "~/data/data";
import AbbyCross from "~/components/icons/AbbyCross";
import UserIcon from "~/components/icons/UserIcon";

const Live = () => {
    const [menu, setMenu] = useState(false);
    const [room, setRoom] = useState<number>(0);
    const [disableFirstOption, setDisableFirstOption] = useState(false);

    const activeRoom = roomItems.items[room];

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMenu(true);
        setDisableFirstOption(true);
        setRoom(Number(e.target.value));
    };

    return (
        <>
            <div className="">
                <select name="roomSelect" id="roomselect" onChange={(e) => handleSelectChange(e)} className="absolute z-6 m-4 px-4 py-2 bg-abby-purple rounded-full text-white text-xl">
                    <option value={8} disabled={disableFirstOption}>Select Room</option>
                    {
                        roomItems.items.map((item) => (
                            <option key={item.id} value={item.id} onClick={() => setMenu(true)}>{item.roomName}</option>
                        ))
                    }
                </select>
                <div className={`${menu ? '' : 'hidden'}`}>
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
                            <div className=""></div>
                        </div>
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