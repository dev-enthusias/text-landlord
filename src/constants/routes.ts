export const routes = {
  HOME: "/",

  //Auth pages
  LOGIN: "/login",
  REGISTER: "/register",
  REGISTERASLANDLORD: "/register?type=landlord",
  REGISTERASTENANT: "/register?type=tenant",
  FORGOTPASSWORD: "/forgot-password",

  //Dashboard pages
  DASHBOARD: "/dashboard",
  DASHBOARDPROPERTIES: "/dashboard/properties",
  DASHBOARDPROPERTIESDETAILS: "/dashboard/properties/:propertyId",
  DASHBOARDPROFILE: "/dashboard/settings",
  DASHBOARDHISTORY: "/dashboard/history",
  DASHBOARDSETTINGS: "/dashboard/settings",
};
