import { getToken } from "@/lib/actions";

// Extend RequestInit to include custom properties like timeout
interface ExtendedRequestInit extends RequestInit {
  timeout: number;
}

// Update the request interceptor type to use ExtendedRequestInit
type RequestInterceptor = (
  config: ExtendedRequestInit,
) => ExtendedRequestInit | Promise<ExtendedRequestInit>;
type ApiResponse<T> = {
  data: T | null;
  error: string | null;
  status: number;
};

type RetryConfig = {
  maxRetries?: number;   
  delayMs?: number;
};

export const BASE_URL = "https://api.ogalandlords.com/api";

const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const defaultRetryConfig: RetryConfig = {
  maxRetries: 3,
  delayMs: 1000,
};

// Request interceptor
const requestInterceptors: RequestInterceptor[] = [
  async (config) => {
    const token = await getToken();
    if (token) {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        },
      };
    }
    return config;
  },
];

// Handle unauthorized access
const handleUnauthorized = () => {
  if (typeof window !== "undefined") {
    const currentPath = window.location.pathname + window.location.search;

    // Don't redirect if already on login page
    if (!currentPath.includes("/login")) {
      // Encode the current path and add it as a query parameter
      const encodedRedirectPath = encodeURIComponent(currentPath);
      window.location.href = `/login?redirect=${encodedRedirectPath}`;
    }
  }
};

// Handle different status codes
const handleStatusCodes = async (response: Response) => {
  switch (response.status) {
    case 200:
    case 201: {
      const data = await response.json();
      return {
        data: data.data,
        error: null,
        status: response.status,
      };
    }

    case 401: {
      handleUnauthorized();
      return {
        data: null,
        error: "Unauthorized. Please login again.",
        status: 401,
      };
    }

    case 400:
      const errorData = await response.json();
      return {
        data: null,
        error: errorData.message || "Bad request",
        status: 400,
      };

    case 404:
      return {
        data: null,
        error: "Resource not found",
        status: 404,
      };

    case 500:
      return {
        data: null,
        error: "Internal server error",
        status: 500,
      };

    default:
      return {
        data: null,
        error: `Unexpected error occurred: ${response.statusText}`,
        status: response.status,
      };
  }
};

// Retry request on failed fetch
const executeWithRetry = async <T>(
  request: () => Promise<ApiResponse<T>>,
  retryConfig: RetryConfig = defaultRetryConfig,
): Promise<ApiResponse<T>> => {
  try {
    return await request();
  } catch (error) {
    if (retryConfig.maxRetries && retryConfig.maxRetries > 0) {
      await new Promise((resolve) =>
        setTimeout(resolve, retryConfig.delayMs || defaultRetryConfig.delayMs),
      );
      return executeWithRetry(request, {
        ...retryConfig,
        maxRetries: retryConfig.maxRetries - 1,
      });
    }
    throw error;
  }
};

// Update the apiGet function to use ExtendedRequestInit
export async function apiGet<T>(
  endpoint: string,
  tag?: string,
  options: ExtendedRequestInit & {
    skipAuth?: boolean;
    retry?: RetryConfig;
  } = { timeout: 15000 },
): Promise<ApiResponse<T>> {
  const { retry, ...restOptions } = options;

  return executeWithRetry(async () => {
    try {
      const { skipAuth = false, ...fetchOptions } = restOptions;

      let finalOptions = {
        ...fetchOptions,
        ...(tag ? { next: { tags: [tag] } } : {}),
      };

      if (!skipAuth) {
        for (const interceptor of requestInterceptors) {
          finalOptions = await interceptor(finalOptions);
        }
      }

      finalOptions.headers = {
        ...defaultHeaders,
        ...finalOptions.headers,
      };

      const response = await fetch(`${BASE_URL}${endpoint}`, finalOptions);

      if (process.env.NODE_ENV === "development") {
        console.log(`[API] ${finalOptions.method || "GET"} ${endpoint}:`, {
          status: response.status,
          statusText: response.statusText,
        });
      }

      return handleStatusCodes(response);
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("[API Error]", {
          endpoint,
          error,
        });
      }

      return {
        data: null,
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
        status: 0,
      };
    }
  }, retry);
}

// Update the apiPost function to use ExtendedRequestInit
export async function apiPost<TResponse, TBody extends Record<string, any>>(
  endpoint: string,
  body: TBody,
  tag?: string,
  options: ExtendedRequestInit & {
    skipAuth?: boolean;
    retry?: RetryConfig;
  } = { timeout: 15000 },
): Promise<ApiResponse<TResponse>> {
  const { retry, ...restOptions } = options;

  return executeWithRetry(async () => {
    try {
      const { skipAuth = false, ...fetchOptions } = restOptions;

      let finalOptions: ExtendedRequestInit = {
        ...fetchOptions,
        method: "POST",
        body: JSON.stringify(body),
        timeout: options.timeout || 15000,
        ...(tag ? { next: { tags: [tag] } } : {}),
      };

      if (!skipAuth) {
        for (const interceptor of requestInterceptors) {
          finalOptions = await interceptor(finalOptions);
        }
      }

      finalOptions.headers = {
        ...defaultHeaders,
        ...finalOptions.headers,
      };

      const response = await fetch(`${BASE_URL}${endpoint}`, finalOptions);

      if (process.env.NODE_ENV === "development") {
        console.log(`[API] POST ${endpoint}:`, {
          status: response.status,
          statusText: response.statusText,
          body,
        });
      }

      return handleStatusCodes(response);
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("[API Error]", {
          endpoint,
          body,
          error,
        });
      }

      return {
        data: null,
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
        status: 0,
      };
    }
  }, retry);
}

// Update the apiDelete function to use ExtendedRequestInit
export async function apiDelete<T>(
  endpoint: string,
  options: ExtendedRequestInit & {
    skipAuth?: boolean;
    retry?: RetryConfig;
  } = { timeout: 15000 },
): Promise<ApiResponse<T>> {
  const { retry, ...restOptions } = options;

  return executeWithRetry(async () => {
    try {
      const { skipAuth = false, ...fetchOptions } = restOptions;

      let finalOptions: ExtendedRequestInit = {
        ...fetchOptions,
        method: "DELETE",
        timeout: options.timeout || 15000,
      };

      if (!skipAuth) {
        for (const interceptor of requestInterceptors) {
          finalOptions = await interceptor(finalOptions);
        }
      }

      finalOptions.headers = {
        ...defaultHeaders,
        ...finalOptions.headers,
      };

      const response = await fetch(`${BASE_URL}${endpoint}`, finalOptions);

      if (process.env.NODE_ENV === "development") {
        console.log(`[API] DELETE ${endpoint}:`, {
          status: response.status,
          statusText: response.statusText,
        });
      }

      return handleStatusCodes(response);
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("[API Error]", {
          endpoint,
          error,
        });
      }

      return {
        data: null,
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
        status: 0,
      };
    }
  }, retry);
}

// Update the apiPut function to use ExtendedRequestInit
export async function apiPut<TResponse, TBody extends Record<string, any>>(
  endpoint: string,
  body: TBody,
  options: ExtendedRequestInit & {
    skipAuth?: boolean;
    retry?: RetryConfig;
  } = { timeout: 15000 },
): Promise<ApiResponse<TResponse>> {
  const { retry, ...restOptions } = options;

  return executeWithRetry(async () => {
    try {
      const { skipAuth = false, ...fetchOptions } = restOptions;

      let finalOptions: ExtendedRequestInit = {
        ...fetchOptions,
        method: "PUT",
        body: JSON.stringify(body),
        timeout: options.timeout || 15000,
      };

      if (!skipAuth) {
        for (const interceptor of requestInterceptors) {
          finalOptions = await interceptor(finalOptions);
        }
      }

      finalOptions.headers = {
        ...defaultHeaders,
        ...finalOptions.headers,
      };

      const response = await fetch(`${BASE_URL}${endpoint}`, finalOptions);

      if (process.env.NODE_ENV === "development") {
        console.log(`[API] PUT ${endpoint}:`, {
          status: response.status,
          statusText: response.statusText,
          body,
        });
      }

      return handleStatusCodes(response);
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("[API Error]", {
          endpoint,
          body,
          error,
        });
      }

      return {
        data: null,
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
        status: 0,
      };
    }
  }, retry);
}
