import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import { Suspense } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, ThemeProvider, styled } from "@mui/material";
import ThemeRegistry from "../client/core/ui/wrappers/ThemeRegistry";
import Background from "client/core/ui/atoms/Background";
import Navbar from "client/lib/components/defaults/navbar/Navbar";
import { popupProvider } from "client/lib/providers/popup-provider";
import ProviderWrapper from "client/core/ui/wrappers/ProviderWrapper";
import "app/global.css";
export const metadata = {
  // title: "Precedent - Building blocks for your Next.js project",
  // description:
  //   "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Precedent - Building blocks for your Next.js project",
  //   description:
  //     "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  //   creator: "@steventey",
  // },
  // metadataBase: new URL("https://precedent.dev"),
  // themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          width: "100vw",
          height: "100vh",
        }}
        className={cx(sfPro.variable, inter.variable)}
      >
        <ProviderWrapper>
          <Background />
          <nav>
            <Navbar />
          </nav>
          <main style={{ width: "100%" }}>
            <CssBaseline enableColorScheme>{children}</CssBaseline>
          </main>
        </ProviderWrapper>
        <Analytics />
      </body>
    </html>
  );
}
