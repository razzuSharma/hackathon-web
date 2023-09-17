import React from "react"; // Import React
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {" "}
        <Navbar />
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
