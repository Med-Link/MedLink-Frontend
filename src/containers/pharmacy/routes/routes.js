// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views for Admin layout
import DashboardPage from "../Dashboard.js";
import UserProfile from "../UserProfile.js";
import CustomerRequests from "../CustomerRequests.js";
import AdminRequests from "../AdminRequests.js";
import NotificationsPage from "../Notifications.js";
import Report from "../Reports.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/pharmacy",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/pharmacy",
  },
  {
    path: "/pharmacyrequests",
    name: "Customer Requests",
    icon: LibraryBooks,
    component: CustomerRequests,
    layout: "/pharmacy",
  },
  {
    path: "/adminrequests",
    name: "Admin Requests",
    icon: LibraryBooks,
    component: AdminRequests,
    layout: "/pharmacy",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/pharmacy",
  },
  {
    path: "/report",
    name: "Report",
    icon: Unarchive,
    component: Report,
    layout: "/pharmacy",
  },
];

export default dashboardRoutes;