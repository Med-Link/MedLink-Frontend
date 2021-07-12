// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CheckIcon from '@material-ui/icons/Check';
// core components/views for Admin layout
import DashboardPage from "../Dashboard.js";
import UserProfile from "../UserProfile.js";
import CustomerRequests from "../Orders.js";
import AdminRequests from "../ConfirmedOrders.js";
import NotificationsPage from "../ClosedDeals.js";
import Report from "../UpdateStock.js";
import OrderProcess from"../OrderProcess";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/pharmacy",
  },
  
  {
    path: "/orderrequests",
    name: "Order Requests",
    icon: LibraryBooks,
    component: CustomerRequests,
    layout: "/pharmacy",
  },
  {
    path: "/confirmedorders",
    name: "Confirmed Orders",
    icon: CheckIcon,
    component: AdminRequests,
    layout: "/pharmacy",
  },
  {
    path: "/closeddeals",
    name: "Closed Deals",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/pharmacy",
  },
  {
    path: "/updatestock",
    name: "Update Stock",
    icon: Unarchive,
    component: Report,
    layout: "/pharmacy",
  },
  {
    path: "/user",
    name: "Profile",
    icon: Person,
    component: UserProfile,
    layout: "/pharmacy",
   },
  {
    path: "/orderprocess",
    name: "Order Process",
    icon: AddShoppingCartIcon,
    component: OrderProcess,
    layout: "/pharmacy",
  },

];

export default dashboardRoutes;
