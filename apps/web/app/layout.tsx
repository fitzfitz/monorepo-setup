import "../styles/globals.css";
import "@fitzzz/core/styles.css";

import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="dark">
      <head />
      <body>{children}</body>
    </html>
  );
}
