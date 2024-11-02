export const routes = {
  HOME: "/",

  //Auth pages
  LOGIN: "/login",
  REGISTER: "/register",
  REGISTERASLANDLORD: "/register?type=landlord",
  REGISTERASTENANT: "/register?type=tenant",
  REGISTERASAGENT: "/register?type=agent",
  FORGOTPASSWORD: "/forgot-password",

  // Pages
  CART: "/cart",
  CHAT: "/chat",
  PROFILE: "/profile",
  WISHLIST: "/profile/wishlist",
  ORDERS: "/profile/orders",
  PAYMENT_HISTORY: "/profile/payment-history",
  FUND_WALLET: "/profile/fund-wallet",
  PAY_RENT: "/profile/pay-rent",
  CHANGE_PASSWORD: "/profile/change-password",

  // Tenant dashboard pages
  TENANT_DASHBOARD: "/dashboard/tenant",
  TENANT_DASHBOARD_PROPERTIES: "/dashboard/tenant/properties",
  TENANT_DASHBOARD_PROPERTIES_DETAIL:
    "/dashboard/tenant/properties/:propertyId",
  TENANT_DASHBOARD_CHAT: "/dashboard/tenant/chat",
  TENANT_DASHBOARD_PAYMENT_HISTORY: "/dashboard/tenant/payment-history",
  TENANT_DASHBOARD_SETTINGS: "/dashboard/tenant/settings",
  TENANT_DASHBOARD_CART: "/dashboard/tenant/cart",
  TENANT_DASHBOARD_NOTIFICATION: "/dashboard/tenant/notification",
  TENANT_DASHBOARD_ADD_MONEY: "/dashboard/tenant/add-money",

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
