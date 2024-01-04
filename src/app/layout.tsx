"use client";
import "../styles/globals.css";
import StyledComponentsRegistry from "./registry";
import { QueryClient, QueryClientProvider } from "react-query";
import React, { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClientRef: any = React.useRef();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  useEffect(() => {
    let link: any = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = "/assets/favicon.svg";
  }, []);

  const meta = {
    title: "Some Meta Title",
    description: "I am a description, and I can create multiple tags",
    canonical: "http://example.com/path/to/page",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "react,meta,document,html,tags",
      },
    },
  };

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
