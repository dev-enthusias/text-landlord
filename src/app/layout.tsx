import type { Metadata } from "next";
import { cormorant_garamond, lato, roboto } from "./font";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oga landlord",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} ${roboto.variable} ${cormorant_garamond.variable} antialiased`}
      >
        {children}
        <Toaster
          richColors
          theme="light"
          position="top-right"
          expand={true}
          toastOptions={{
            style: { zIndex: 9999 },
          }}
        />
      </body>
    </html>
  );
}
