

import { Inter } from "next/font/google";
import "../globals.css";
import Nav from "../components/nav";
import Footer from "../components/footer"
import { Children } from "react";
import ClientsRed from "../components/clientsRedirect";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  
  return (
    <div style={{background: 'black'}}>
        {children}
        <ClientsRed/>
    </div>
  );
}
