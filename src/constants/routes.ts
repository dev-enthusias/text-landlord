export const routes = {
  HOME: "/",

  //Auth pages
  LOGIN: "/login",
  REGISTER: "/register",
  REGISTERASLANDLORD: "/register?type=landlord",
  REGISTERASTENANT: "/register?type=tenant",
  REGISTERASAGENT: "/register?type=agent",
  FORGOTPASSWORD: "/forgot-password",

  // Tenant dashboard pages
  TENANT_DASHBOARD: "/dashboard/tenant",
  TENANT_DASHBOARD_PROPERTIES: "/dashboard/tenant/properties",
  TENANT_DASHBOARD_PROPERTIES_DETAIL:
    "/dashboard/tenant/properties/:propertyId",
  TENANT_DASHBOARD_CHAT: "/dashboard/tenant/chat",
  TENANT_DASHBOARD_PAYMENT_HISTORY: "/dashboard/tenant/payment-history",
  TENANT_DASHBOARD_SETTINGS: "/dashboard/tenant/settings",

  // Landlord dashboard pages
  LANDLORD_DASHBOARD: "/dashboard/landlord",
  LANDLORD_DASHBOARD_PROPERTIES: "/dashboard/landlord/properties",
  LANDLORD_DASHBOARD_PROPERTIES_DETAIL:
    "/dashboard/landlord/properties/:propertyId",
  LANDLORD_DASHBOARD_CHAT: "/dashboard/landlord/chat",
  LANDLORD_DASHBOARD_TRANSACTION_HISTORY:
    "/dashboard/landlord/transaction-history",
  LANDLORD_DASHBOARD_SETTINGS: "/dashboard/landlord/settings",
  LANDLORD_DASHBOARD_BILLS: "/dashboard/landlord/bills",
  LANDLORD_DASHBOARD_REPORTS: "/dashboard/landlord/reports",
  LANDLORD_DASHBOARD_TENANTS: "/dashboard/landlord/tenants",

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
