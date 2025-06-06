import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    layout("layouts/mainLayout.tsx", [
        index("routes/home.tsx")
    ]),

    layout("layouts/onboardLayout.tsx", [
        route("/onboarding/:onbId", "routes/onboarding.tsx")
    ])
] satisfies RouteConfig;
