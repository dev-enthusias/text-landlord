export const routes = {
  HOME: "/",

  //Auth pages
  LOGIN: "/login",
  REGISTER: "/register",
  REGISTERASLANDLORD: "/register?type=landlord",
  REGISTERASTENANT: "/register?type=tenant",
  REGISTERASAGENT: "/register?type=agent",
  FORGOTPASSWORD: "/forgot-password",

  //Dashboard pages
  DASHBOARD: "/dashboard",
  DASHBOARDPROPERTIES: "/dashboard/properties",
  DASHBOARDPROPERTIESDETAILS: "/dashboard/properties/:propertyId",
  DASHBOARDPROFILE: "/dashboard/profile",
  DASHBOARDHISTORY: "/dashboard/history",
  DASHBOARDSETTINGS: "/dashboard/settings",
  DASHBOARDNOTIFICATIONS: "/dashboard/notifications",
  DASHBOARDCART: "/dashboard/cart",
  DASHBOARDWISHLIST: "/dashboard/wishlist",
  DASHBOARDORDER: "/dashboard/orders",
  DASHBOARDORDERDETAILs: "/dashboard/orders/:orderId",
  DASHBOARDADDMONEY: "/dashboard/add-money",
  DASHBOARDCHANGEPASSWORD: "/dashboard/change-password",
  DASHBOARDRENTEDPROPERTIES: "/dashboard/rented-properties",
  DASHBOARDCHAT: "/dashboard/chat",
  DASHBOARDTENANT: "/dashboard/tenants",
  DASHBOARDREPORTS: "/dashboard/reports",
  DASHBOARDBILLS: "/dashboard/bills",
};
