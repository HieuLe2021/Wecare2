import type { Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";
import { Open_Sans } from "next/font/google";
// THEME PROVIDER
import StyledComponentsRegistry from "@lib/registry";
// APP PROVIDER
import { AppProvider } from "@context/app-context";
import StyledContext from "@context/StyledContext";
import './global.css'

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bonik - The Best React eCommerce Template",
  description:
    "Bonik is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store",
  authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react", "bonik"]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <StyledComponentsRegistry>
          <AppProvider>
            <StyledContext>
              <TRPCReactProvider>{children}</TRPCReactProvider></StyledContext>
          </AppProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
