import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { projects } from "./data/projects";
import { FaMedal } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
// import useInView  from "./hook/useInView";

export default function Home() {
  // const [ref1, isInView1] = useInView({ threshold: 0.1 });
  // const [ref2, isInView2] = useInView({ threshold: 0.1 });
  // const [ref3, isInView3] = useInView({ threshold: 0.1 });
  // const [ref4, isInView4] = useInView({ threshold: 0.1 });
  // const [ref5, isInView5] = useInView({ threshold: 0.1 });
  // const [ref6, isInView6] = useInView({ threshold: 0.1 });
  // const [ref7, isInView7] = useInView({ threshold: 0.1 });
  // const [ref8, isInView8] = useInView({ threshold: 0.1 });
  // const [ref9, isInView9] = useInView({ threshold: 0.1 });
  // const [ref10, isInView10] = useInView({ threshold: 0.1 });
  // const [ref11, isInView11] = useInView({ threshold: 0.1 });
  // const [ref12, isInView12] = useInView({ threshold: 0.1 });
  // const [ref13, isInView13] = useInView({ threshold: 0.1 });
  // const [ref14, isInView14] = useInView({ threshold: 0.1 });
  // const [ref15, isInView15] = useInView({ threshold: 0.1 });
  // const [ref16, isInView16] = useInView({ threshold: 0.1 });
  // const [ref17, isInView17] = useInView({ threshold: 0.1 });

  return (
    <main className="overflow-x-hidden">
      <section
        className="pt-[0.5rem] bg-cover bg-center h-[100vh] relative bg-black"
        style={{ backgroundImage: "url('/main-background.webp')" }}
      >
        {/* <Image
          src="/main-background.webp"
          alt="Background"
          fill // Ini kunci agar full container
          quality={90}
          priority // preload saat SSR
          className="object-cover z-0"
        /> */}
        <header className="p-5 z-10 relative">
          <nav className="text-white">
            <ul className="flex gap-10 justify-center mt-1">
              <li>
                <Link href="/">
                  <p className="font-bold underline">Home</p>
                </Link>
              </li>
              <li>
                <Link href="/work">
                  <p>Work</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p>About</p>
                </Link>
              </li>
            </ul>
            <div className="flex justify-between mt-[-2rem] max-[700px]:mt-8 max-[700px]:justify-center px-5">
              <span className="mt-[0.4rem] max-[700px]:hidden">
                <h1 className="font-extrabold text-[18px]">
                  RAEFANDY<span className="text-[#85E4CC]">FADILA</span>
                </h1>
              </span>
              <span className="border-[1px] text-center border-white pl-7 w-[12rem] pr-2 py-2 rounded-full flex gap-5 items-center justify-between text-[14px] font-[200]">
                DOWNLOAD CV{" "}
                <a href="/assets/Raefandy Fadila CV.pdf" download>
                  <div className="w-8 h-8 rounded-full bg-[#85E4CC] relative">
                    <FiDownload className="absolute top-[5px] left-[6px] text-xl text-black" />
                  </div>
                </a>
              </span>
            </div>
          </nav>
        </header>

        <div className="mt-[3rem] max-[700px]:mt-[0.5rem] relative">
          <h1
            // ref={ref1}
            className="text-[42px] max-[435px]:text-[30px] max-[290px]:text-[24px] text-center text-white font-semibold"

            //   ${
            //   isInView1
            //     ? "opacity-100 translate-y-0 animate-fade-up"
            //     : "opacity-0 translate-y-10"
            // }`}
          >
            I&apos;m{" "}
            <span className="text-[#85E4CC] italic">Raefandy Fadila</span>
          </h1>
          <h1
            // ref={ref2}
            className="text-[42px] max-[435px]:text-[30px] max-[290px]:text-[24px] text-center text-white font-semibold"
            //   ${
            //   isInView2
            //     ? "opacity-100 translate-y-0 animate-fade-up animate-delay-500"
            //     : "opacity-0 translate-y-10"
            // }`}
          >
            Front End Developer
          </h1>
        </div>

        <div className="flex justify-between w-full">
          <div
            // ref={ref14}
            className="justify-start mt-[5rem] -rotate-5 ml-[-0.45rem] max-[800px]:hidden"

            //   ${
            //   isInView14
            //     ? "opacity-100 translate-y-0 animate-fade-right animate-delay-500"
            //     : "opacity-0 translate-y-10"
            // }`}
          >
            <div className="text-white bg-[#0B1023] w-[17rem] max-[425px]:w-[10rem] rounded-lg p-2 pl-4 inner-shadow">
              <h1 className="text-[18px] font-[300] max-[425px]:text-[10px]">
                ACHIEVEMENTS
              </h1>
              <span className="flex items-center gap-2 mt-2">
                <FaMedal className="text-[#f3b11e] text-4xl" />
                <h1 className="text-[14px] text-white/80 font-[200] max-[425px]:text-[6px]">
                  EXPERIENCED AS A FRONT END DEVELOPER IN THE INDUSTRY
                </h1>
              </span>
              <span className="flex items-center gap-2 mt-2">
                <FaMedal className="text-[#f3b11e] text-xl" />
                <h1 className="text-[14px] text-white/80 font-[200] max-[425px]:text-[6px]">
                  BANGKIT ACADEMY GRADUATE
                </h1>
              </span>
              <span className="flex items-center gap-2 mt-2">
                <FaMedal className="text-[#f3b11e] text-xl" />
                <h1 className="text-[14px] text-white/80 font-[200] max-[425px]:text-[6px]">
                  GOOGLE CLOUD CERTIFIED
                </h1>
              </span>
            </div>
          </div>
          <div
            // ref={ref15}
            className="justify-end mt-[5rem] rotate-5 mr-[-0.45rem] max-[800px]:hidden"
            //   ${
            //   isInView15
            //     ? "opacity-100 translate-y-0 animate-fade-left animate-delay-500"
            //     : "opacity-0 translate-y-10"
            // }`}
          >
            <div className="text-white bg-[#0B1023] w-[17rem] max-[425px]:w-[10rem] rounded-lg p-2 inner-shadow">
              <h1 className="text-[18px] font-[300] max-[425px]:text-[10px]">
                MY EXPERTISE
              </h1>
              <span className="flex items-center gap-2 mt-2">
                <h1 className="text-[14px] text-white/80 font-[200] max-[425px]:text-[6px]">
                  FRONT END
                </h1>
                <span>
                  <div className="w-[7.8rem] max-[425px]:w-[3rem] h-[2px] text-white bg-white relative">
                    <FaCircle className="absolute right-4 bottom-[-0.4rem] text-sm text-[#85E4CC]" />
                  </div>
                </span>
                <div className="border-[0.5px] text-[12px] p-[1px] px-[5px] rounded-3xl text-white/80">
                  90%
                </div>
              </span>
              <span className="flex items-center gap-2 mt-2">
                <h1 className="text-[14px] text-white/80 font-[200] max-[425px]:text-[6px]">
                  BACK END
                </h1>
                <span>
                  <div className="w-[8.5rem] h-[2px] text-white bg-white relative">
                    <FaCircle className="absolute right-10 bottom-[-0.4rem] text-sm text-[#3F5B8F]" />
                  </div>
                </span>
                <div className="border-[0.5px] text-[12px] p-[1px] px-[5px] rounded-3xl text-white/80">
                  70%
                </div>
              </span>
              <span className="flex items-center gap-2 mt-2">
                <h1 className="text-[14px] text-white/80 font-[200] max-[425px]:text-[6px]">
                  CLOUD COMPUTING
                </h1>
                <span>
                  <div className="w-[4.4rem] h-[2px] text-white bg-white relative">
                    <FaCircle className="absolute right-7 bottom-[-0.4rem] text-sm text-[#FF6B81]" />
                  </div>
                </span>
                <div className="border-[0.5px] text-[12px] p-[1px] px-[5px] rounded-3xl text-white/80">
                  50%
                </div>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0B1023] text-white p-5 max-[435px]:px-0 flex flex-col gap-5 justify-center">
        <h1
          // ref={ref3}
          className="text-[42px] text-center mt-[8rem] mx-5 font-semibold bg-clip-text text-transparent"
          //   ${
          //   isInView3
          //     ? "opacity-100 translate-y-0 animate-fade-up"
          //     : "opacity-0 translate-y-10"
          // }`}
          style={{
            backgroundImage:
              "linear-gradient(to right, #85E4CC 40%, #0974A6 60%)",
          }}
        >
          WHO AM I?
        </h1>
        <div
          // ref={ref4}
          className="flex justify-center mt-8"
          //   ${
          //   isInView4
          //     ? "opacity-100 translate-y-0 animate-fade-up animate-delay-500"
          //     : "opacity-0 translate-y-10"
          // }`}
        >
          <p className="text-[14px] max-w-[30rem] text-center font-[200] mx-5">
            I have expertise in web development in HTML, CSS, Javascript,
            Typescript, SQL. My skills in React.js and use of frameworks such as
            Tailwind and Material UI enable me to build dynamic and interactive
            user
            <br />
            <br />
            While my expertise in Node.js strengthens my back-end capabilities
            by using express.js and MySQL.
            <br />
            <br />
            Some of the projects in my portfolio include applications I
            developed using these technologies. I am passionate about continuing
            to grow in this field and always strive to learn more.
          </p>
        </div>

        <div className="mt-[-5rem] bg-[url('/assets/section2-bg.png')] bg-cover bg-center w-full h-[87rem] max-[435px]:h-[70rem]">
          <h1
            // ref={ref5}
            className="text-[42px] text-center mt-[20rem] mx-5 font-semibold bg-clip-text text-transparent"
            //   ${
            //   isInView5
            //     ? "opacity-100 translate-y-0 animate-fade-up"
            //     : "opacity-0 translate-y-10"
            // }`}
            style={{
              backgroundImage:
                "linear-gradient(to right, #85E4CC 40%, #0974A6 60%)",
            }}
          >
            MY SKILL
          </h1>
          <div className="flex justify-center">
            <p
              // ref={ref6}
              className="text-[14px] max-w-[40rem] mt-10 text-center mx-5 font-[200]"
              //   ${
              //   isInView6
              //     ? "opacity-100 translate-y-0 animate-fade-up animate-delay-500"
              //     : "opacity-0 translate-y-10"
              // }`}
            >
              Experienced in web development with more than 1 year of dedication
              in creating dynamic and interactive user interfaces, with many
              functional.
            </p>
          </div>
          <div className="flex justify-center mt-[5rem]">
            <img
              // ref={ref7}
              // src={skillImage}
              alt=""
              className="mt-10 w-[60rem]"
              //   ${
              //   isInView7
              //     ? "opacity-100 translate-y-0 animate-flip-up animate-duration-1000"
              //     : "opacity-0 translate-y-10"
              // }`}
            />
          </div>
        </div>
      </section>
      <section className="bg-[#0B1023] text-white px-5 pb-[7rem] flex flex-col gap-5 justify-center">
        <h1
          id="project"
          // ref={ref8}
          className="text-[42px] mt-[-5rem] text-center font-semibold bg-clip-text text-transparent"
          //   ${
          //   isInView8
          //     ? "opacity-100 translate-y-0 animate-fade-up"
          //     : "opacity-0 translate-y-10"
          // }`}
          style={{
            backgroundImage:
              "linear-gradient(to right, #85E4CC 40%, #0974A6 60%)",
          }}
        >
          PROJECT
        </h1>
        <div className="flex mt-[-1rem] justify-center">
          <p
            // ref={ref9}
            className="text-[14px] max-w-[40rem] mt-10 text-center font-[200]"
            //   ${
            //   isInView9
            //     ? "opacity-100 translate-y-0 animate-fade-up animate-delay-500"
            //     : "opacity-0 translate-y-10"
            // }`}
          >
            Experienced in web development with more than 1 year of dedication
            in creating dynamic and interactive user interfaces, with many
            functional.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-[4rem] mt-[5rem]">
          <Link href={projects[0].linkPage} className="cursor-pointer">
            <div
            // ref={ref10}
            // className={`${
            //   isInView10
            //     ? "opacity-100 translate-y-0 animate-fade-right animate-delay-1200 max-[435px]:animate-delay-500"
            //     : "opacity-0 translate-y-10"
            // }`}
            >
              <div
                className={`max-w-[35rem] h-[25rem] bg-[#D9D9D9] flex justify-center p-2 rounded-2xl`}
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #D9D9D9 0%, #0B1023 100%)",
                }}
              >
                <img
                  src={projects[0].titleImage}
                  className="w-[34rem] object-cover h-[24rem] rounded-3xl"
                />
              </div>
              <h1 className="mt-5 font-semibold text-[22px]">
                {projects[0].title}
              </h1>
              <p className="font-[200] mt-2 text-[16px]">
                {projects[0].titleDescription}
              </p>
            </div>
          </Link>
          <Link href={projects[1].linkPage} className="cursor-pointer">
            <div
            // ref={ref11}
            // className={`${
            //   isInView11
            //     ? "opacity-100 translate-y-0 animate-fade-left animate-delay-1200 max-[435px]:animate-delay-500"
            //     : "opacity-0 translate-y-10"
            // }`}
            >
              <div
                className={`max-w-[35rem] h-[25rem] bg-[#D9D9D9] flex justify-center p-2 rounded-2xl`}
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #D9D9D9 0%, #0B1023 100%)",
                }}
              >
                <img
                  src={projects[1].titleImage}
                  className="w-[34rem] object-cover h-[24rem] rounded-3xl"
                />
              </div>
              <h1 className="mt-5 font-semibold text-[22px]">
                {projects[1].title}
              </h1>
              <p className="font-[200] mt-2 text-[16px]">
                {projects[1].titleDescription}
              </p>
            </div>
          </Link>

          <Link href={projects[2].linkPage} className="cursor-pointer">
            <div
            // ref={ref12}
            // className={`${
            //   isInView12
            //     ? "opacity-100 translate-y-0 animate-fade-right animate-delay-1200 max-[435px]:animate-delay-500"
            //     : "opacity-0 translate-y-10"
            // }`}
            >
              <div
                className={`max-w-[35rem] h-[25rem] bg-[#D9D9D9] flex justify-center p-2 rounded-2xl`}
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #D9D9D9 0%, #0B1023 100%)",
                }}
              >
                <img
                  src={projects[2].titleImage}
                  className="w-[34rem] object-cover h-[24rem] rounded-3xl"
                />
              </div>
              <h1 className="mt-5 font-semibold text-[22px]">
                {projects[2].title}
              </h1>
              <p className="font-[200] mt-2 text-[16px]">
                {projects[2].titleDescription}
              </p>
            </div>
          </Link>

          <Link href={projects[3].linkPage} className="cursor-pointer">
            <div
            // ref={ref13}
            // className={`${
            //   isInView13
            //     ? "opacity-100 translate-y-0 animate-fade-left animate-delay-1200 max-[435px]:animate-delay-500"
            //     : "opacity-0 translate-y-10"
            // }`}
            >
              <div
                className={`max-w-[35rem] h-[25rem] bg-[#D9D9D9] flex justify-center p-2 rounded-2xl`}
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #D9D9D9 0%, #0B1023 100%)",
                }}
              >
                <img
                  src={projects[3].titleImage}
                  className="w-[34rem] object-cover h-[24rem] rounded-3xl"
                />
              </div>
              <h1 className="mt-5 font-semibold text-[22px]">
                {projects[3].title}
              </h1>
              <p className="font-[200] mt-2 text-[16px]">
                {projects[3].titleDescription}
              </p>
            </div>
          </Link>

          <Link href={projects[4].linkPage} className="cursor-pointer">
            <div
            // ref={ref16}
            // className={`${
            //   isInView16
            //     ? "opacity-100 translate-y-0 animate-fade-right animate-delay-1200 max-[435px]:animate-delay-500"
            //     : "opacity-0 translate-y-10"
            // }`}
            >
              <div
                className={`max-w-[35rem] h-[25rem] bg-[#D9D9D9] flex justify-center p-2 rounded-2xl`}
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #D9D9D9 0%, #0B1023 100%)",
                }}
              >
                <img
                  src={projects[4].titleImage}
                  className="w-[34rem] object-cover h-[24rem] rounded-3xl"
                />
              </div>
              <h1 className="mt-5 font-semibold text-[22px]">
                {projects[4].title}
              </h1>
              <p className="font-[200] mt-2 text-[16px]">
                {projects[4].titleDescription}
              </p>
            </div>
          </Link>

          <Link href={projects[5].linkPage} className="cursor-pointer">
            <div
            // ref={ref17}
            // className={`${
            //   isInView17
            //     ? "opacity-100 translate-y-0 animate-fade-left animate-delay-1200 max-[435px]:animate-delay-500"
            //     : "opacity-0 translate-y-10"
            // }`}
            >
              <div
                className={`max-w-[35rem] h-[25rem] bg-[#D9D9D9] flex justify-center p-2 rounded-2xl`}
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #D9D9D9 0%, #0B1023 100%)",
                }}
              >
                <img
                  src={projects[5].titleImage}
                  className="w-[34rem] object-cover h-[24rem] rounded-3xl"
                />
              </div>
              <h1 className="mt-5 font-semibold text-[22px]">
                {projects[5].title}
              </h1>
              <p className="font-[200] mt-2 text-[16px]">
                {projects[5].titleDescription}
              </p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
