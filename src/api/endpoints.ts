export const propertyEndpoints = {
  GET_PROPERTY_METADATA_ENDPOINT: "/private/v1/property/create",
  ADD_TENANT_ENDPOINT: "/private/v1/tenant/add-by-email",
  LANDLORD_PROPERTIES: "/private/v1/property/list",
};

export const notificationEndpoints = {
  GET_NOTIFICATIONS: "/private/v1/notifications/list",
  MARK_NOTIFICATION_AS_READ: "/private/v1/notifications/mark-read",
  MARK_ALL_NOTIFICATIONS_AS_READ: "/private/v1/notifications/mark-all-read",
};

export const tenantEndpoints = {
  GET_TENANTS: "/private/v1/tenant/list",
};

export const userEndpoints = {
  GET_USER_DETAILS: "/private/v1/user/profile",
  UPDATE_USER_DETAILS: "/private/v1/user/profile-update",
  UPDATE_USER_PROFILE_IMAGE: "/private/v1/user/profile-image-update",
};

