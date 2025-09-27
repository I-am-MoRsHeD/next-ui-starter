// import { NextRequest, NextResponse } from "next/server";

// // ei ketre arrow function kaj kortesena,,,
// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL('/', request.url))
// };

// export const config = {
//     matcher: '/about'
// }

export { default } from "next-auth/middleware"

export const config = { matcher: ["/dashboard"] }