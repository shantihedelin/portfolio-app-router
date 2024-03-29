import headshotImg from "../public/headshot.jpg";
import Image from "next/image";
import ProjectSectionList from "@/components/HeroSection";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden text-white">
      <Nav />     
       {/* <h1 className="text-black text-4xl font-bold mt-6 flex justify-center">
              Front-end developer
            </h1> */}
      <div className="flex flex-col lg:flex-row">
      <div className="mx-8 my-4 w-full">
          <div className="relative  pt-[56.25%]">
            <Image
              src={headshotImg}
              layout="fill"
              objectFit="contain"
              alt="Headshot of Shanti Hedelin"
            />
          </div>
        </div>
        <div className="m-4">
          <div className="flex justify-center flex-col items-center mb-2">
      
            <h2 className="text-4xl m-0"> Hello, my name is Shanti Hedelin, i'm a <span className="fullstack">fullstack developer</span></h2>
            <p>
              hejsan här skriver jag lite kort om mig. jag är utvecklare och är
              duktig och sånt och här får ni se mina underbara projekt. hoppas
              ni gillar dom. jag är duktig. anställ mig. hejdå, det var en
              beskrivning av mig, eller ja kanske inte så mycket beskrivning men
              aa aja hejdå Check out my projects below
            </p>
            <button className="bg-transparent  bg-white w-64 mt-10 border p-4 shadow-xl rounded-3xl hover:cursor-pointer hover:w-96">View Resume</button>
          </div>
          <div className="flex justify-center flex-col">
            <h3 className="mt-24 flex justify-center text-5xl">I work with...</h3>
            <div className="max-w-screen-lg mx-auto overflow-hidden">
              <div className="flex justify-center overflow-x-auto mt-8">
                <div className="flex justify-center flex-row space-x-6 overflow-hidden">
                  <div className=" h-32 w-32 rounded-full flex items-center justify-center skills">
                    React
                  </div>
                  <div className=" h-32 w-32 rounded-full flex items-center justify-center skills">
                    Next.js
                  </div>
                  <div className=" h-32 w-32 rounded-full flex items-center justify-center skills">
                    Vite
                  </div>
                  <div className=" h-32 w-32 rounded-full flex items-center justify-center skills ">
                    HTML
                  </div>
                  <div className=" h-32 w-32 rounded-full flex items-center justify-center skills">
                    CSS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="flex justify-center text-5xl pt-12" >Projects</h3>
      <ProjectSectionList />
      <Footer />
    </main>
  );
}
