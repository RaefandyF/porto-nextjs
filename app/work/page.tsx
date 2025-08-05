import React from "react";
import { projects } from "../data/projects";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import ViewProject from "../component/ViewProject";
import Header from "../component/Header";

export default function Project() {
  return (
    <main className="overflow-x-hidden bg-[#0B1023]">
      <section className="text-white pb-[7rem] mt-[0.5rem] flex flex-col gap-5 justify-center">
        <Header bold="work" />
        <section className="px-5">
          <h1
            id="project"
            className="text-[42px] mt-[3rem] text-center font-semibold bg-clip-text text-transparent"
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
              className="text-[14px] max-w-[40rem] mt-10 text-center font-[400]"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="500"
            >
              With over a year of experience in software development, these
              projects highlight my skills in crafting efficient and
              maintainable software systems.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-[4rem] mt-[5rem]">
            {projects.map((project, index) => {
              const fadeDirection =
                index % 2 === 0 ? "fade-right" : "fade-left";
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
      </section>
    </main>
  );
}
