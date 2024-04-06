

import { Inter } from "next/font/google";
import "../globals.css";
import Nav from "../components/nav";
import Footer from "../components/footer"
import { Children } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Solo Agency",
  description: "",
};

export default function RootLayout({ children }) {
  
  return (
    <div>
        {children}
    </div>
  );
}
