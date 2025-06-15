import { useEffect, useState } from 'react';
import ButtonLink from '~/components/ButtonLink';
import { useLocation, useNavigate } from 'react-router';

import Lottie from 'react-lottie';
import { useIdentity, type IdentityData } from '~/context/IdentityContext';
import ConfirmAnimation from '~/assets/lottie/ConfirmationAnimation.json';

const ProfileScanSuccess = () => {
    const location = useLocation();
    const { setIdentityData } = useIdentity();
    const [isClient, setIsClient] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsClient(true);
        
        const scannedDataString = location.state?.scannedData;
        if (scannedDataString) {
            try {
                const parsedData = JSON.parse(scannedDataString);
                const newIdentityData: IdentityData = { items: [parsedData] };

                setIdentityData(newIdentityData);
            } catch (error: any) {
                console.error("Failed to parse or set scanned data:", error);
                alert(`Error processing QR code: ${error.message}`);
                navigate('/profile/scan');
            }
        } else {
            console.warn("No scanned data found in location state.");
            alert("No QR code data found.");
            navigate('/profile/scan');
        }
    }, [location.state, setIdentityData, navigate]);

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: ConfirmAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="flex flex-col items-center p-16 gap-5">
            <h2 className="text-6xl text-abby-purple font-bold">All set up!</h2>

            {isClient ? (
                <Lottie
                    options={defaultOptions}
                    height={300}
                    width={300}
                />
            ) : (
                <div style={{ height: 400, width: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    Loading animation...
                </div>
            )}
            
            <p className="text-xl text-center pb-9">You completed the first step of creating your Abby-id. The Abby community is waiting for you.</p>

            <ButtonLink link="/live" arrow>
                See who's at Abby
            </ButtonLink>
        </div>
    );
};

export default ProfileScanSuccess;