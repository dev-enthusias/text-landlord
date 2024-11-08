export const routes = {
  HOME: "/",

  //Auth pages
  LOGIN: "/login",
  REGISTER: "/register",
  REGISTERASLANDLORD: "/register?type=landlord",
  REGISTERASTENANT: "/register?type=tenant",
  REGISTERASAGENT: "/register?type=agent",
  FORGOTPASSWORD: "/forgot-password",

  // Generic pages
  CHAT: "/chat",

  // Tenant pages
  CART: "/tenant/cart",
  TENANT_DASHBOARD: "/tenant",
  PROFILE: "/tenant/profile",
  ORDERS: "/tenant/profile/orders",
  PAY_RENT: "/tenant/profile/pay-rent",
  WISHLIST: "/tenant/profile/wishlist",
  TENANT_PROPERTIES: "/tenant/properties",
  FUND_WALLET: "/tenant/profile/fund-wallet",
  CHANGE_PASSWORD: "/tenant/profile/change-password",
  PAYMENT_HISTORY: "/tenant/profile/payment-history",

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
  LANDLORD_DASHBOARD_NOTIFICATION: "/dashboard/landlord/notification",

  // Agent dashboard pages
  AGENT_DASHBOARD_NOTIFICATION: "/dashboard/agent/notification",
  AGENT_DASHBOARD_SETTINGS: "/dashboard/agent/settings",
  AGENT_DASHBOARD_CHAT: "/dashboard/agent/chat",
  AGENT_DASHBOARD_TRANSACTION_HISTORY: "/dashboard/agent/transaction-history",
};
