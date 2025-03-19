"use client";

import { ThemeProvider } from "next-themes";
import Providers from "./providers";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const googleAuthId = "973980080955-k30717qoffq6l7hnv173l1103jhqhhg5.apps.googleusercontent.com"

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >

      <Providers>
          <GoogleOAuthProvider clientId={googleAuthId} >
          {children}
          </GoogleOAuthProvider>
      </Providers>

    </ThemeProvider>
  );
}
