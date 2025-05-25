import { type RouteConfig, index, route } from "@react-router/dev/routes";

const routes: RouteConfig = [index("routes/home.tsx"),

        route("cvlbgraph","routes/cvlbgraph.tsx"),
        route("education","routes/education.tsx"),
        route("workexperience","routes/workexperience.tsx"),
];

export default routes;