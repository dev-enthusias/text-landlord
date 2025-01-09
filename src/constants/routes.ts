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
  TENANT_HOME: "/tenant",
  TENANT_PROFILE: "/tenant/profile",
  WISHLIST: "/tenant/profile/wishlist",
  PAY_RENT: "/tenant/profile/pay-rent",
  TENANT_PROPERTIES: "/tenant/properties",
  TENANT_ORDERS: "/tenant/profile/orders",
  FUND_WALLET: "/tenant/profile/fund-wallet",
  TENANT_SETTINGS: "/tenant/profile/settings",
  PAYMENT_HISTORY: "/tenant/profile/payment-history",
  TENANT_CHANGE_PASSWORD: "/tenant/profile/change-password",

  // Landlord pages
  AGENTS: "/landlord/agents",
  LANDLORD_HOME: "/landlord",
  TENANTS: "/landlord/tenants",
  REPORTS: "/landlord/reports",
  ACCOUNTS: "/landlord/accounts",
  BILL_MANAGEMENT: "/landlord/bills",
  LANDLORD_ORDERS: "/landlord/orders",
  LANDLORD_PROFILE: "/landlord/profile",
  LANDLORD_SETTINGS: "/landlord/settings",
  LANDLORD_PROPERTIES: "/landlord/properties",
  LANDLORD_NOTIFICATION: "/landlord/notification",
  PROPERTY_CATEGORY: "/landlord/property-categories",
  PROPERTY_FACILITIES: "/landlord/property-facilities",
  TRANSACTION_HISTORY: "/landlord/transaction-history",
  LANDLORD_CHANGE_PASSWORD: "/landlord/change-password",

  // Agent pages
  AGENT_ORDERS: "/agent/orders",
  AGENT_PROFILE: "/agent/profile",
  AGENT_PROPERTIES: "/agent/properties",
  AGENT_SETTINGS: "/agent/profile/settings",
  AGENT_DASHBOARD_NOTIFICATION: "/agent/notification",
  AGENT_DASHBOARD_SETTINGS: "/dashboard/agent/settings",
  AGENT_CHANGE_PASSWORD: "/agent/profile/change-password",
  AGENT_DASHBOARD_TRANSACTION_HISTORY: "/agent/transaction-history",
};
