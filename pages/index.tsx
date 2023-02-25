import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { Testimonials } from "../components/Testimonials";

const Home: NextPage = () => {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Blaze Media </title>
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20">
        <a
          href="https://twitter.com/nutlope/status/1626074563481051136"
          target="_blank"
          rel="noreferrer"
          className="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out"
        >
          From Average to Exceptional : You Are A 10x Brand <span className="font-semibold"></span> 
        </a>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
        You’ve got a Business, We have got{" "}
          <span className="relative whitespace-nowrap text-[#3290EE]">
            <SquigglyLines />
            <span className="relative">Brilliant Minds</span>
          </span>{" "}
          
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-lg text-slate-700 leading-7">
        Let us build the bridge between your brand and customer. We have got minds in action 🚀
        </p>
        <div className="flex justify-center space-x-4">
          <a
            className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80"
            href="https://calendly.com/abhishblaze/25min?month=2023-02"
            target="_blank"
            rel="noreferrer"
          >
            Speak to Team
          </a>
          <a
            className="bg-blue rounded-xl text-black font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-100 border"
            href=" "
            target="_blank"
            rel="noreferrer"
          >
            FREE ADVANCED TRAINING
          </a>

          {/* <Link
            className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80"
            href="/restore"
          >
            Restore your photos
          </Link> */}
        </div>
        
        
      </main>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
