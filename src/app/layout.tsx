"use client";
import type { Metadata } from "next";
import "../styles/globals.css";
import StyledComponentsRegistry from "./registry";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import React from "react";
// import { ReactQueryDevtools } from "react-query/devtools";
// import { Hydrate as SWRHydrate } from "swr";

// export const metadata: Metadata = {
//   title: "The Figma Store | by Alejo Avenali",
//   description: "Generated by create next app",
//   icons: {
//     icon: [
//       {
//         url: "/assets/favicon.svg",
//         href: "/assets/favicon.svg",
//       },
//     ],
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClientRef: any = React.useRef();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <html lang='en'>
      <QueryClientProvider client={queryClientRef.current}>
        <StyledComponentsRegistry>
          <body>{children}</body>
        </StyledComponentsRegistry>
      </QueryClientProvider>
    </html>
  );
}