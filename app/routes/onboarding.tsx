import { onboardingItems } from "../data/data";
import type { Route } from "./+types/onboarding";
import ButtonIcon from "~/components/ButtonIcon";
import ButtonLink from "../components/ButtonLink";

import AbbyCross from "~/components/icons/AbbyCross";
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
        <div className={`h-[100vh] flex flex-col justify-between px-[16px] py-16 bg-abby-${activeColor}`}>
            <div id="topNav" className="flex justify-between">
                <img src="/app/assets/img/AbbyYou_Logo.svg" alt="Abby You - Logo" width="170vw" />
                <ButtonIcon link="">
                    <AbbyCross size={35}/>
                </ButtonIcon>
            </div>
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                    <h3 className="text-5xl">{activePage.title}</h3>
                    <img src={`/app/assets/img/onboarding/onboarding_img_${loaderData.pageId + 1}.png`} alt="Old couple at the Abby museum" />
                    <p className="text-2xl">{activePage.description}</p>
                </div>
            </div>
            <div id="bottomNav" className="flex justify-between w-full pb-6">
                <ButtonIcon link="/">
                    <AbbyArrowLeft size={40} />
                </ButtonIcon>

                <ButtonIcon link={activePage.linkTo}>
                    <AbbyArrowRight size={40} />
                </ButtonIcon>
            </div>
        </div>
    );
}