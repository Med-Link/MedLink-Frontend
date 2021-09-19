// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PaymentIcon from '@material-ui/icons/Payment';

import DashboardPage from "../Dashboard.js";
import UserProfile from "../UserProfile.js";
import PharmacyRequests from "../PharmacyRequests.js";
import NotificationsPage from "../Notifications.js";
import Report from "../Reports.js";
import Employees from "../Employees"
import Medicine from "../Medicine"
import PharmacyPayble from "../PharmacyPayble.js";

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
    icon: PersonAddIcon,
    component: Employees,
    layout: "/admin",
  },
  {
    path: "/medicine",
    name: "Medicine",
    icon: LocalHospitalIcon,
    component: Medicine,
    layout: "/admin",
  },
  {
    path: "/pharmacypayble",
    name: "Pharmacy Payble",
    icon: PaymentIcon,
    component: PharmacyPayble,
    layout: "/admin",
  },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin",
  // },
  {
    path: "/report",
    name: "Income Report",
    icon: Unarchive,
    component: Report,
    layout: "/admin",
  },
  
];

export default dashboardRoutes;
