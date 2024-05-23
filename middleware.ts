import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware"
import { NextRequest } from "next/server"
export default function middleware(req: NextRequest) {
  return withAuth(req, {
    isReturnToCurrentPage: true
  })
  // return withAuth(req, {
  //   redirectUrl: 'http://localhost:3000/api/auth/login?post_login_redirect_url=/dashboard/customers?q=1'
  // })
}

export const config = {
  matcher: ["/dashboard/customers"],
};