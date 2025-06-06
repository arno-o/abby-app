import Button from "../components/Button";
import onboardingItems from "../data/onboarding.json";

import type { Route } from "./+types/onboarding";

// export async function loader({ params }: Route.LoaderArgs) {
//   const contact = await fetchOnboardingPage(params.onbId);
//   return { contact };
// }

export default function Onboarding({ loaderData }: Route.ComponentProps) {
    //const { onbItem } = loaderData;

    return (
        <div className="h-[100vh] flex items-center px-12">
            <div className="flex flex-col gap-12 items-center">
                <div className="flex flex-col text-center gap-4">
                    <img src="" alt="" />
                    <h3 className="text-4xl">{onboardingItems.items[1].title}</h3>
                    <p className="text-2xl">Discover and grow your identity through presence and participation.</p>
                </div>
                <div className="">
                    <div className="" id="progress"></div>
                    <Button link="/onboarding/2" arrow={true}>continue</Button>
                </div>
            </div>
        </div>
    );
}