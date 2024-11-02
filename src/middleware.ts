// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { ROLE_ROUTES } from "./constants/data";

// export function middleware(request: NextRequest) {
//   const pathname = request.nextUrl.pathname;

//   // Get role and session
//   const authToken = request.cookies.get("session");
//   const role = request.cookies.get("role");

//   // If user is not authenticated
//   if (!authToken || !role) {
//     if (pathname.startsWith("/dashboard")) {
//       return NextResponse.redirect(new URL("/login", request.url));
//     }
//   }

//   // If user is authenticated
//   if (authToken && role) {
//     // Get the exact role
//     const roleId = parseInt(role.value);
//     const authorizedDashboard = ROLE_ROUTES[roleId as keyof typeof ROLE_ROUTES];

//     if (pathname.startsWith("/login")) {
//       return NextResponse.redirect(new URL(authorizedDashboard, request.url));
//     }

//     if (roleId === 4 && !pathname.startsWith("/dashboard/landlord")) {
//       return NextResponse.redirect(new URL(ROLE_ROUTES[roleId], request.url));
//     }

//     if (roleId === 5 && !pathname.startsWith("/dashboard/tenant")) {
//       return NextResponse.redirect(new URL(ROLE_ROUTES[roleId], request.url));
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/login", "/dashboard/:path*"],
// };
