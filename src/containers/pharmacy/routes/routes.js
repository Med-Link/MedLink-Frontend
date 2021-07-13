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
import OrderRequest from "../OrderRequests.js";
import ConfirmedOrders from "../ConfirmedOrders.js";
import ClosedDeals from "../ClosedDeals.js";
import UpdateStock from "../UpdateStock.js";
import ClosedDealsDetails from "../ClosedDealsDetails.js";
import Profile from "../Profile.js";




import OrderProcess from "../OrderProcess";
import Order from "../OrderRequests";
import { Block } from "@material-ui/icons";
import { Hidden } from "@material-ui/core";

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
    component: OrderRequest,
    layout: "/pharmacy",
  },
  {
    path: "/confirmedorders",
    name: "Confirmed Orders",
    icon: CheckIcon,
    component: ConfirmedOrders,
    layout: "/pharmacy",
  },
  {
    path: "/closeddeals",
    name: "Closed Deals",
    icon: Notifications,
    component: ClosedDeals,
    layout: "/pharmacy",
  },
  {
    path: "/updatestock",
    name: "Update Stock",
    icon: Unarchive,
    component: UpdateStock,
    layout: "/pharmacy",
  },
  {
    path: "/user",
    name: "Profile",
    icon: Person,
    component: Profile,
    layout: "/pharmacy",
   },
  {
    path: "/ClosedDealsDetails",
    name: "Closed Deals Details",
    icon: AddShoppingCartIcon,
    component: ClosedDealsDetails,
    layout: "/pharmacy",
  },
  {
    path: "/orderprocess",
    name: "Order Process",
    icon: AddShoppingCartIcon,
    component: OrderProcess,
    layout: "/pharmacy",
    display:Hidden,
  },
];

export default dashboardRoutes;
