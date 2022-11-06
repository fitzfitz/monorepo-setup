import "../styles/globals.css";
// include styles from the ui package
import "@fitzzz/core/styles.css";

import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
