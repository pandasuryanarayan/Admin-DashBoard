import React, { useEffect } from "react";
import { CssBaseline } from "@mui/material";
import Dashboard from "./dashboard";
import { createRoot } from "react-dom/client";
import Head from "next/head";

export default function HomePage() {
  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (rootElement) {
      const root = createRoot(rootElement);
      root.render(
        <>
          <CssBaseline />
          <Dashboard />
        </>
      );
    }
  }, []);

  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <div id="root" />
    </>
  );
}
