// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views for Admin layout
import DashboardPage from "../Dashboard.js";
import RespondOrders from "../respondOrders.js"; 
import Profile from "../profile/Profile.js"
import BuyingHistory from "../buyingHistory/buyingHistory.js";
import SearchMedicine from "../SearchMedicine"
import RejectOrders from "../rejectOrders/RejectOrders"
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/customer",
  },
  {
    path: "/searchmedicine",
    name: "Search Medicine",
    icon: LocalHospitalIcon,
    component: SearchMedicine,
    layout: "/customer",
  },
  {
    path: "/respondingorders",
    name: "My Orders",
    icon: LibraryBooks,
    component: RespondOrders,
    layout: "/customer",
  },
  {
    path: "/buyinghistory",
    name: "Buying History",
    icon: LibraryBooks,
    component: BuyingHistory,
    layout: "/customer",
  },
  {
    path: "/rejectOrders",
    name: "Reject Orders",
    icon: LibraryBooks,
    component: RejectOrders,
    layout: "/customer",
  },
  {
    path: "/profile",
    name: "Profile",
    icon: Person,
    component: Profile,
    layout: "/customer",
  },
   
   
];

export default dashboardRoutes;
