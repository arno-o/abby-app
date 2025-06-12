export interface OnboardingData {
    items: OnboardingItem[];
}

export interface SuggestionData {
    items: SuggestionItem[];
}

export interface ChosenSuggestionData {
    items: ChosenSuggestionItem[];
}

export interface OnboardingItem {
    linkTo: string;
    title: string;
    description?: string;
}

export interface SuggestionItem {
    id: number;
    title: string;
    count: number;
}

export interface ChosenSuggestionItem {
    day: string;
    time: string;
    title: string;
    location: string;
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

export const suggestionItems: SuggestionData = {
    items: [
        {
            id: 0,
            title: "Dance performance",
            count: 54
        },
        {
            id: 1,
            title: "Crochet workshop",
            count: 42
        },
        {
            id: 2,
            title: "Chocolate-making workshop",
            count: 21
        },
        {
            id: 3,
            title: "Girls sleepover",
            count: 14
        },
    ]
}

export const chosenSuggestionItems: ChosenSuggestionData = {
    items: [
        {
            day: "18 Jun",
            time: "19:00 - 22:00",
            title: "Coffee Talk",
            location: "Abby Cafe"
        },
        {
            day: "15 Jul",
            time: "18:00 - 21:00",
            title: "Thai Cooking Class",
            location: "Salon"
        },
        {
            day: "23 Jul",
            time: "12:00 - 16:00",
            title: "Creative Wishing Cards",
            location: "Atelier"
        },
    ]
}