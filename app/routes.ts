import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    layout("layouts/mainLayout.tsx", [
        index("routes/home.tsx"),
        
        route("/live", "pages/live.tsx"),
        route("/community", "pages/community.tsx"),
        route("/create", "pages/create.tsx"),
        route("/schedule", "pages/schedule.tsx"),
        route("/profile", "pages/profile.tsx")
    ]),

    layout("layouts/onboardLayout.tsx", [
        route("/onboarding/:onbId", "routes/onboarding.tsx")
    ])
] satisfies RouteConfig;
