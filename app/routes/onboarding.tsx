import { onboardingItems } from "../data/data";
import type { Route } from "./+types/onboarding";
import ButtonIcon from "~/components/ButtonIcon";

import AbbyCross from "~/components/icons/AbbyCross";
import FourStepProgress from "~/components/fourStepProgress";
import AbbyArrowLeft from "~/components/icons/AbbyArrowLeft";
import AbbyArrowRight from "~/components/icons/AbbyArrowRight";

export function loader({ params }: Route.LoaderArgs) {
    const onboardingId = params.onbId;
    const pageId = parseInt(onboardingId);
    return { pageId };
}

export default function Onboarding({ loaderData }: Route.ComponentProps) {

    const activePage = onboardingItems.items[loaderData.pageId];
    const colorOptions = ["blue", "green", "yellow", "purple"];

    const activeColor = colorOptions[loaderData.pageId];

    return (
        <div className={`h-[100vh] flex flex-col justify-between px-[12px] pb-16 pt-8 bg-abby-${activeColor}`}>
            <div id="topNav" className="flex justify-between">
                <img src="/app/assets/img/AbbyYou_Logo.svg" alt="Abby You - Logo" width="170vw" />
                <ButtonIcon link="/">
                    <AbbyCross size={35}/>
                </ButtonIcon>
            </div>
            <div className={`flex flex-col gap-12 ${loaderData.pageId % 2 == 0 ? "flex-col-reverse" : ""}`}>
                <div className="flex flex-col gap-4">
                    <h3 className="text-4xl">{activePage.title}</h3>
                    <p className="text-2xl">{activePage.description}</p>
                </div>
                <img src={`/app/assets/img/onboarding/onboarding_img_${loaderData.pageId + 1}.png`} alt="Old couple at the Abby museum" className={loaderData.pageId === 2 ? "scale-[150%] my-12" : ""}/>
            </div>
            <div id="bottomNav" className="flex justify-between w-full pb-6">
                <ButtonIcon link={loaderData.pageId === 0 ? "" : `/onboarding/${loaderData.pageId - 1}`} disabled={loaderData.pageId === 0}>
                    <AbbyArrowLeft size={40} disabled={loaderData.pageId === 0}/>
                </ButtonIcon>

                <FourStepProgress step={loaderData.pageId}/>

                <ButtonIcon link={activePage.linkTo}>
                    <AbbyArrowRight size={40} />
                </ButtonIcon>
            </div>
        </div>
    );
}