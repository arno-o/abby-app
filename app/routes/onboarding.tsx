import Button from "../components/Button";
import { onboardingItems } from "../data/data";
import type { Route } from "./+types/onboarding";

export function loader({ params }: Route.LoaderArgs) {
    const onboardingId = params.onbId;
    const pageId = parseInt(onboardingId);
    return { pageId };
}

export default function Onboarding({ loaderData }: Route.ComponentProps) {

    const activePage = onboardingItems.items[loaderData.pageId];

    return (
        <div className="h-[100vh] flex items-center px-12">
            <div className="flex flex-col gap-12 items-center">
                <div className="flex flex-col text-center gap-4">
                    <img src="" alt="" />
                    <h3 className="text-4xl">{activePage.title}</h3>
                    <p className="text-2xl">{activePage.description}</p>
                </div>
                <div className="">
                    <div className="" id="progress"></div>
                    <Button link={activePage.linkTo} arrow={true}>continue</Button>
                </div>
            </div>
        </div>
    );
}