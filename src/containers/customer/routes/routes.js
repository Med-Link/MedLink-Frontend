// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views for Admin layout
import DashboardPage from "../Dashboard.js";
import UserProfile from "../UserProfile.js";
import RespondOrders from "../respondOrders.js";
import AdminRequests from "../AdminRequests.js";
import NotificationsPage from "../Notifications.js";
import Report from "../Reports.js";
import Profile from "../profile/Profile.js"
import Checkout from "../profile/Profile.js"

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
    path: "/adminrequests",
    name: "Admin Requests",
    icon: LibraryBooks,
    component: AdminRequests,
    layout: "/customer",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/customer",
  },
  {
    path: "/report",
    name: "Report",
    icon: Unarchive,
    component: Report,
    layout: "/customer",
  },
   
];

export default dashboardRoutes;
