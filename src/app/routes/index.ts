import { Router } from "express";
// import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { FacilityRoutes } from "../modules/facility/facility.router";


const router = Router();
const moduleRoutes = [
  // {
  //   path: "/user",
  //   route: UserRoutes,
  // },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/facility",
    route: FacilityRoutes,
  },
  // {
  //   path: "/",
  //   route: bookingRoutes,
  // },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
