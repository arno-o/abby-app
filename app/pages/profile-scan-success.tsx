import { useEffect, useState } from 'react';
import ButtonLink from '~/components/ButtonLink';
import { useLocation, useNavigate } from 'react-router';

import Lottie from 'react-lottie';
import ConfirmAnimation from '~/assets/lottie/ConfirmationAnimation.json';

const ProfileScanSuccess = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const scannedData = location.state?.scannedData || 'No data found.';

    // State to track if we are on the client-side
    const [isClient, setIsClient] = useState(false);

    // Set isClient to true once the component mounts (i.e., on the client)
    useEffect(() => {
        setIsClient(true);
    }, []);

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
                // Optional: Render a placeholder during SSR or initial client render
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