import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      
      <main >
        <div style={{textAlign:'center'}}>
          <h1 style={{paddingBottom:"2rem"}}>Home Page</h1>
          <a href="/products">Link to Products</a>
        </div>
      </main>
    </>
  );
}
