import type { Metadata } from "next";
import { colors } from "./colors";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const metadata: Metadata = {
  title: "Abhi's Portfolio",
  description: "Welcome to my portfolio!",
};

const bodyStyle = {
  backgroundColor: colors.darkGrey,
  color: colors.periwinkle,
  fontFamily: "Roboto, sans-serif",
  height: "calc(100vh - 32px)",
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
      </body>
    </html>
  );
}
