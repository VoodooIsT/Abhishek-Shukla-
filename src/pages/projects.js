import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Project1 from "../../public/images/projects/StudyNotion.png";
import Project2 from "../../public/images/projects/SmartEstate.png";
import Project3 from "../../public/images/projects/NetflixGPT.png";
import Project4 from "../../public/images/projects/Weather app.png";
import Project5 from "../../public/images/projects/Inventory.png";

const Featuredproject = ({ type, title, summary, img, link, github }) => {
  return (
    <>
      <article className="w-full relative flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
        <Link
          href={link}
          target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
        >
          <Image src={img} alt={title} className="w-full h-auto" />
        </Link>
        <div className="w-1/2  flex flex-col items-start justify-between pl-6">
          <span className="text-primary font-medium text-xl">{type}</span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-4xl font-bold ">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark">{summary}</p>
          <div className="mt-2 flex items-center">
            <Link href={github} target="_blank" className="w-10">
              <GithubIcon />
            </Link>
            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
            >
              Visite the Project
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full  flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold ">{title}</h2>
        </Link>
        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className="underline text-lg font-semibold"
          >
            Visite
          </Link>

          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>My Projects</title>
        <meta name="description" content="any description" />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <Featuredproject
                title="StudyNotion"
                img={Project1}
                summary="StudyNotion is a fully functional ed-tech platform that enables users to create, consume, and rate educational
                content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and Express.JS.
                Frameworks, Libraries, and Tools used: Node.js, express.js, MongoDB, JWT, Bcryptjs, Tailwind CSS and mongoose.
                A user can signup in 2 ways as an Instructor and as a Student an student can buy course and keep track of his/her
                progress and instructor can track of which course is trending along with available orders and graph for revenue."
                link="https://study2notion.vercel.app/"
                type="Featured Project"
                github="https://github.com/VoodooIsT/Study-notion"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="SmartEstate"
                img={Project2}
                summary="Developed a hotel reservation website along with hotel management tools, using MERN Stack. Tools used: MongoDB, Express, Nodejs, React, HTML, CSS and Tailwindcss .Designed different collections in databases like real time availability and pricing information along with CRUD functionalities allowing users to easily search and filter for hotels using different functionalities. Implemented features such as viewing hotel information including pictures, amenities and the option to add special request or notes."
                link="https://estate.100jsprojects.com/"
                type="Featured Project"
                github="https://github.com/VoodooIsT/SmartEstate"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="NetflixGPT"
                img={Project3}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency"
                link="https://netflixgpt-df0c9.web.app/"
                type="Featured Project"
                github="https://github.com/VoodooIsT/NetflixGPT"
              />
            </div>
            <div className="col-span-12">
              <Featuredproject
                title="Stock Merch"
                img={Project5}
                summary="It is a software where an organization can manage their product stock, customers, suppliers, orders and view different statistics of the inventory. Also an individual employee of that organization can work here for the organization."
                link="https://stockmerch.vercel.app/login"
                type="Featured Project"
                github="https://github.com/VoodooIsT/inventory-managenment"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Weather App"
                img={Project4}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency"
                link="https://weather-app-voodooist.vercel.app/"
                type="Featured Project"
                github="https://github.com/VoodooIsT/weather-app"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                img={Project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency"
                link="/"
                type="Featured Project"
                github="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
