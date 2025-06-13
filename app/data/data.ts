export interface OnboardingData {
    items: OnboardingItem[];
}

export interface SuggestionData {
    items: SuggestionItem[];
}

export interface ChosenSuggestionData {
    items: ChosenSuggestionItem[];
}

export interface ScheduleActivityData {
    items: ScheduleActivityItem[];
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

export interface ScheduleActivityItem {
    id: number;
    title: string;
    timespan: string;
    location: string;
    image_url: string;
    type: string;
    subtitle: string;
    description: string;
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

export const scheduleActivityItems: ScheduleActivityData = {
    items: [
        {
            id: 0,
            title: "Dieter Van Caneghem",
            timespan: "29 MAR ‘25 <> 29 JUN ‘25",
            location: "Gallery",
            image_url: "1",
            type: "expo",
            subtitle: "Artistic construction photography about the birth of a new museum",
            description: "Dieter Van Caneghem (Kortrijk, 1990) is a photographer who is fascinated by the constructed landscape. He uses photography as a medium to raise questions about how space is designed and planned. \n\nIn addition to being a photographer, he is also the co-founder of ELDERS, a nomadic collective for the presentation of contemporary artistic practices in Kortrijk and the region. For Abby, he documented the progress of the construction site for two years."
        },
        {
            id: 1,
            title: "F**cklore. Reinventing Tradition",
            timespan: "29 MAR ‘25 <> 14 SEP ‘25",
            location: "Opening exhibition",
            image_url: "2",
            type: "expo",
            subtitle: "Artistic construction photography about the birth of a new museum",
            description: "Dieter Van Caneghem (Kortrijk, 1990) is a photographer who is fascinated by the constructed landscape. He uses photography as a medium to raise questions about how space is designed and planned. \n\nIn addition to being a photographer, he is also the co-founder of ELDERS, a nomadic collective for the presentation of contemporary artistic practices in Kortrijk and the region. For Abby, he documented the progress of the construction site for two years."
        },
        {
            id: 2,
            title: "The Living by Rinus Van de Velde",
            timespan: "29 MAR ‘25 <> 06 SEP ‘26",
            location: "Living",
            image_url: "3",
            type: "expo",
            subtitle: "Artistic construction photography about the birth of a new museum",
            description: "Dieter Van Caneghem (Kortrijk, 1990) is a photographer who is fascinated by the constructed landscape. He uses photography as a medium to raise questions about how space is designed and planned. \n\nIn addition to being a photographer, he is also the co-founder of ELDERS, a nomadic collective for the presentation of contemporary artistic practices in Kortrijk and the region. For Abby, he documented the progress of the construction site for two years."
        },
        {
            id: 3,
            title: "The Story of Abby",
            timespan: "Permanent Audio Tour",
            location: "Full Museum",
            image_url: "4",
            type: "expo",
            subtitle: "Artistic construction photography about the birth of a new museum",
            description: "Dieter Van Caneghem (Kortrijk, 1990) is a photographer who is fascinated by the constructed landscape. He uses photography as a medium to raise questions about how space is designed and planned. \n\nIn addition to being a photographer, he is also the co-founder of ELDERS, a nomadic collective for the presentation of contemporary artistic practices in Kortrijk and the region. For Abby, he documented the progress of the construction site for two years."
        },
        {
            id: 4,
            title: "Blok @ Abby",
            timespan: "3 JUN ‘25 <> 20 JUN ‘25",
            location: "Atelier",
            image_url: "5",
            type: "activity",
            subtitle: "Artistic construction photography about the birth of a new museum",
            description: "Dieter Van Caneghem (Kortrijk, 1990) is a photographer who is fascinated by the constructed landscape. He uses photography as a medium to raise questions about how space is designed and planned. \n\nIn addition to being a photographer, he is also the co-founder of ELDERS, a nomadic collective for the presentation of contemporary artistic practices in Kortrijk and the region. For Abby, he documented the progress of the construction site for two years."
        },
        {
            id: 5,
            title: "Listening Lecture Sigiswald Kijken",
            timespan: "8 Jun 10:30 - 12:00",
            location: "Salon",
            image_url: "6",
            type: "activity",
            subtitle: "Artistic construction photography about the birth of a new museum",
            description: "Dieter Van Caneghem (Kortrijk, 1990) is a photographer who is fascinated by the constructed landscape. He uses photography as a medium to raise questions about how space is designed and planned. \n\nIn addition to being a photographer, he is also the co-founder of ELDERS, a nomadic collective for the presentation of contemporary artistic practices in Kortrijk and the region. For Abby, he documented the progress of the construction site for two years."
        }
    ]
}