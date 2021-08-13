// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views for Admin layout
import DashboardPage from "../Dashboard.js";
import UserProfile from "../UserProfile.js";
import PharmacyRequests from "../PharmacyRequests.js";
// import AdminRequests from "../AdminRequests.js";
import NotificationsPage from "../Notifications.js";
import AddNewAdmin from "../AddNewAdmin";
import Report from "../Reports.js";
import Employees from "../Employees"
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/pharmacyrequests",
    name: "Pharmacy Requests",
    icon: LibraryBooks,
    component: PharmacyRequests,
    layout: "/admin",
  },
  {
    path: "/employees",
    name: "Admin Accounts",
    icon: Person,
    component: Employees,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
  },
  {
    path: "/report",
    name: "Income Report",
    icon: Unarchive,
    component: Report,
    layout: "/admin",
  },
  
];

export default dashboardRoutes;
