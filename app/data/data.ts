export interface OnboardingItem {
    linkTo: string;
    title: string;
    description?: string;
}

export interface OnboardingData {
    items: OnboardingItem[];
}

export const onboardingItems: OnboardingData = {
    items: [
        {
            linkTo: "/onboarding/1",
            title: "Welcome",
            description: "Discover and grow your identity through presence and participation."
        },
        {
            linkTo: "/onboarding/2",
            title: "Your Identity Grows Here",
            description: "Each action adds a new layer to your evolving shape."
        },
        {
            linkTo: "/onboarding/3",
            title: "Co-Create the Space",
            description: "Suggest, join, or host. Abby is built with you."
        },
        {
            linkTo: "/",
            title: "Start at the Museum",
            description: "Scan your QR at Abby to activate your identity."
        }
    ]
}