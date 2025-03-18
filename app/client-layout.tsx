"use client";

import { ThemeProvider } from "next-themes";
import Providers from "./providers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import Providers from "./providers";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >

      {/* <Providers>{children}</Providers> */}
      <Providers>
        
          {children}
        
      </Providers>

    </ThemeProvider>
  );
}
