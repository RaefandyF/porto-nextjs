import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { projects } from "./data/projects";
import { FaMedal } from "react-icons/fa6";
import Link from "next/link";
import Head from "next/head";
import ViewProject from "./component/ViewProject";
import Header from "./component/Header";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Head>
        <link rel="preload" as="image" href="/main-background.webp" />
      </Head>
      <section className="pt-[0.5rem] bg-cover bg-center h-[100vh] relative bg-[#0B1023]">
        <Image
          src="/main-background.webp"
          alt="Background"
          fill
          quality={90}
          priority
          fetchPriority="high"
          className="object-cover z-0"
        />
        <Header bold="home" />

        <div className="mt-[3rem] max-[700px]:mt-[0.5rem] relative">
          <h1
            // ref={ref1}
            className="text-[42px] max-[435px]:text-[30px] max-[290px]:text-[24px] text-center text-white font-semibold"
            data-aos="fade-up"
            data-aos-duration="2000"
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
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="1000"
            //   ${
            //   isInView2
            //     ? "opacity-100 translate-y-0 animate-fade-up animate-delay-500"
            //     : "opacity-0 translate-y-10"
            // }`}
          >
            Software Engineer
          </h1>
        </div>

        <div className="flex justify-between w-full">
          <div
            className="justify-start mt-[5rem] -rotate-5 ml-[-0.45rem] max-[800px]:hidden"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="1000"
          >
            <div className="text-white bg-[#0B1023] w-[17rem] max-[425px]:w-[10rem] rounded-lg p-2 pl-4 inner-shadow">
              <h1 className="text-[18px] font-[500] max-[425px]:text-[10px]">
                ACHIEVEMENTS
              </h1>
              <span className="flex items-center gap-2 mt-2">
                <FaMedal className="text-[#f3b11e] text-4xl" />
                <h1 className="text-[14px] text-white/80 font-[400] max-[425px]:text-[6px]">
                  EXPERIENCED AS A SOFTWARE ENGINEER IN THE INDUSTRY
                </h1>
              </span>
              <span className="flex items-center gap-2 mt-2">
                <FaMedal className="text-[#f3b11e] text-xl" />
                <h1 className="text-[14px] text-white/80 font-[400] max-[425px]:text-[6px]">
                  BANGKIT ACADEMY GRADUATE
                </h1>
              </span>
              <span className="flex items-center gap-2 mt-2">
                <FaMedal className="text-[#f3b11e] text-xl" />
                <h1 className="text-[14px] text-white/80 font-[400] max-[425px]:text-[6px]">
                  GOOGLE CLOUD CERTIFIED
                </h1>
              </span>
            </div>
          </div>
          <div
            className="justify-end mt-[5rem] rotate-5 mr-[-0.45rem] max-[800px]:hidden"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="1000"
          >
            <div className="text-white bg-[#0B1023] w-[17rem] max-[425px]:w-[10rem] rounded-lg p-2 inner-shadow">
              <h1 className="text-[18px] font-[500] max-[425px]:text-[10px]">
                MY EXPERTISE
              </h1>
              <span className="flex items-center gap-2 mt-2">
                <h1 className="text-[14px] text-white/80 font-[400] max-[425px]:text-[6px]">
                  FRONT END
                </h1>
                <span>
                  <div className="w-[7.7rem] max-[425px]:w-[3rem] h-[2px] text-white bg-white relative">
                    <FaCircle className="absolute right-4 bottom-[-0.4rem] text-sm text-[#85E4CC]" />
                  </div>
                </span>
                <div className="border-[0.5px] text-[12px] p-[1px] px-[5px] rounded-3xl text-white/80">
                  90%
                </div>
              </span>
              <span className="flex items-center gap-2 mt-2">
                <h1 className="text-[14px] text-white/80 font-[400] max-[425px]:text-[6px]">
                  BACK END
                </h1>
                <span>
                  <div className="w-[8.3rem] h-[2px] text-white bg-white relative">
                    <FaCircle className="absolute right-4 bottom-[-0.4rem] text-sm text-[#3F5B8F]" />
                  </div>
                </span>
                <div className="border-[0.5px] text-[12px] p-[1px] px-[5px] rounded-3xl text-white/80">
                  90%
                </div>
              </span>
              <span className="flex items-center gap-2 mt-2">
                <h1 className="text-[14px] text-white/80 font-[400] max-[425px]:text-[6px]">
                  CLOUD COMPUTING
                </h1>
                <span>
                  <div className="w-[4rem] h-[2px] text-white bg-white relative">
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
          className="text-[42px] text-center mt-[8rem] mx-5 font-semibold bg-clip-text text-transparent"
          data-aos="fade-up"
          data-aos-duration="2000"
          style={{
            backgroundImage:
              "linear-gradient(to right, #85E4CC 40%, #0974A6 60%)",
          }}
        >
          WHO AM I?
        </h1>
        <div
          className="flex justify-center mt-8"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1000"
        >
          <p className="text-[14px] max-w-[30rem] text-center font-[300] mx-5">
            Software engineering enthusiast with expertise in back-end
            development (Golang, Node.js, SQL/NoSQL), web front-end development
            (HTML, CSS, ReactJs/ts, Next.js, Tailwind CSS).
            <br />
            <br />
            Actively keeping up with technological advancements and experienced
            in building full web applications.
            <br />
            <br />
            Some of the projects in my portfolio include applications I
            developed using these technologies. I am passionate about continuing
            to grow in this field and always strive to learn more.
          </p>
        </div>

        <div className="mt-[-5rem] bg-cover bg-center w-full h-[87rem] max-[435px]:h-[70rem] relative">
          <Image
            src="/section2-bg.webp"
            alt="Background section 2"
            fill
            quality={100}
            className="object-cover z-0"
          />
          <div className="relative z-10">
            <h1
              className="text-[42px] text-center mt-[18rem] mx-5 font-semibold bg-clip-text text-transparent"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #85E4CC 40%, #0974A6 60%)",
              }}
            >
              MY SKILL
            </h1>

            <div className="flex justify-center">
              <p
                className="text-[14px] max-w-[40rem] mt-10 text-center mx-5 font-[300]"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="1000"
              >
                As a Software Engineer, I’ve developed a strong foundation in
                both front-end and back-end technologies through real-world
                projects and continuous learning. Below are the key skills I’ve
                gained along the way.
              </p>
            </div>
            <div className="flex justify-center mt-[4rem]">
              <Image
                src="/skill.webp"
                alt="skill"
                width={900}
                height={900}
                quality={100}
                className="object-cover z-0"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="2000"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0B1023] text-white px-5 pb-[7rem] flex flex-col gap-5 justify-center">
        <h1
          id="project"
          className="text-[42px] mt-[-5rem] text-center font-semibold bg-clip-text text-transparent"
          data-aos="fade-up"
          data-aos-duration="2000"
          style={{
            backgroundImage:
              "linear-gradient(to right, #85E4CC 40%, #0974A6 60%)",
          }}
        >
          PROJECT
        </h1>
        <div className="flex mt-[-1rem] justify-center">
          <p
            className="text-[14px] max-w-[40rem] mt-10 text-center font-[300]"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="500"
          >
            With over a year of experience in software development, these
            projects highlight my skills in crafting efficient and maintainable
            software systems.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-[4rem] mt-[5rem]">
          {projects.map((project, index) => {
            const fadeDirection = index % 2 === 0 ? "fade-right" : "fade-left";
            return (
              <Link
                key={project.id}
                href={project.linkPage}
                className="cursor-pointer"
              >
                <div
                  data-aos={fadeDirection}
                  data-aos-duration="2000"
                  data-aos-delay="500"
                >
                  <ViewProject
                    title={project.title}
                    titleImage={project.titleImage}
                    titleDescription={project.titleDescription}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
