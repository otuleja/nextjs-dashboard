import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"

export default async function Page() {
  console.log("Page")
  const { isAuthenticated, getUser } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect('api/auth/login?post_login_redirect_url=/dashboard/customers?q=1');
  }
  const user = await getUser();
  console.log(user)
  return <p>Dashboard Page</p>;
}