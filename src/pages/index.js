import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import ProfilePic from "../../public/images/profile/developer-pic-1.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Abhishek Shukla</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout>
          <div className="flex items-center justify-between w-full">
            <div>
              <Image
                src={ProfilePic}
                alt="Abhishek Shukla"
                className="w-full h-auto"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
