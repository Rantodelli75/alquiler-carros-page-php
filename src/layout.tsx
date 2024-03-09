import React from "react";
import {Providers} from "./providers";

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='ligth'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}