/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Maps from "views/examples/Maps.js";
import CameraMap from "views/examples/CameraMap.js";
import Video from "views/examples/Video";
import DemoFireDetection from "views/examples/DemoFireDetection.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-chart-bar-32 text-primary",
    component: Index,
    layout: "/admin",
  },

  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-square-pin text-orange",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/cameraMap",
    name: "Camera Map",
    icon: "ni ni-square-pin text-orange",
    component: CameraMap,
    layout: "/admin",
  },
  {
    path: "/demoFireDetection",
    name: "Demo Fire/Fall Detection",
    icon: "ni ni-folder-17 text-primary",
    component: DemoFireDetection,
    layout: "/admin",
  },
];
export default routes;
