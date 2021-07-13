// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views for Admin layout
import DashboardPage from "../Dashboard.js";
 
import RespondOrders from "../respondOrders.js";
 
 
import Profile from "../profile/Profile.js"
 
import BuyingHistory from "../buyingHistory/buyingHistory.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/customer",
  },
  {
    path: "/Profile",
    name: "Profile",
    icon: Person,
    component: Profile,
    layout: "/customer",
  },
  {
    path: "/RespondingOrders",
    name: "Responding Orders",
    icon: LibraryBooks,
    component: RespondOrders,
    layout: "/customer",
  },
  {
    path: "/BuyingHistory",
    name: "Buying History",
    icon: LibraryBooks,
    component: BuyingHistory,
    layout: "/customer",
  },
   
   
];

export default dashboardRoutes;
