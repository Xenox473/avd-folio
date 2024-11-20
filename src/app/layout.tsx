import type { Metadata } from "next";
import { colors } from "./colors";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Abhi's Portfolio",
  description: "Welcome to my portfolio!",
};

const bodyStyle = {
  backgroundColor: colors.darkGrey,
  color: colors.periwinkle,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={bodyStyle}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
