import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { LogoutLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";


{/* <LoginLink>Sign in</LoginLink> */ }
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className={`${inter.className} antialiased`}>
        <div>
          <LogoutLink>Logout</LogoutLink>
        </div>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
