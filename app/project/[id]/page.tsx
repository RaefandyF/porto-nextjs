import { IoIosArrowBack } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import { LuUserCog } from "react-icons/lu";
import { projects } from "@/app/data/projects";
import Link from "next/link";
import ViewProject from "@/app/component/ViewProject";
import Image from "next/image";

type Project = {
  id: string;
  title: string;
  titleImage: string;
  titleDescription: string;
  idNumber: number;
  description: string;
  link: string;
  linkPage: string;
  image: string;
  duration: string;
  role: string;
  projectDescription: string;
  tools: string;
};

type Props = {
  params: Promise<{ id: string }>;
};
export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project)
    return <div className="p-8 text-white">Halaman tidak ditemukan</div>;

  let project2 = projects.find((p) => p.idNumber === project.idNumber + 1);
  let project3;

  if (!project2) {
    project2 = projects.find((p) => p.idNumber === 1);
    project3 = projects.find((p) => p.idNumber === 2);
  } else {
    project3 = projects.find((p) => p.idNumber === project.idNumber + 2);
  }

  if (!project3) {
    project3 = projects.find((p) => p.idNumber === 1);
  }

  return (
    <main className="py-5 px-[8rem] max-[769px]:px-[2rem] bg-[#0B1023] text-white">
      <header>
        <Link href="/">
          <div className="flex gap-3 items-center">
            <IoIosArrowBack />
            <p className="text-[16px] font-semibold">Back to Home</p>
          </div>
        </Link>
        <hr className="mt-5" />
      </header>

      <section className="mt-[4rem]">
        <h1
          className="text-[42px] font-semibold"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {project.title}
        </h1>
        <p
          className="text-[#FFFFFF]/50 font-semibold text-[16px] mt-3"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          {project.description}
        </p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            className="cursor-pointer"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="1000"
          >
            <button className="bg-[#85E4CC] cursor-pointer px-14 py-3 text-black text-[16px] font-semibold rounded-full mt-8">
              Link Project
            </button>
          </a>
        )}

        <div
          className="flex justify-center mt-5 opacity-100 translate-y-0 animate-fade-up animate-delay-1000"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          <div className="relative w-full h-[45rem] max-[445px]:h-[20rem] max-[769px]:h-[30rem] mt-10">
            <Image
              fill
              sizes="100vw"
              src={project.image}
              className="object-cover rounded-2xl"
              alt={project.title}
            />
          </div>
        </div>

        {/* Duration & Role */}
        <div className="mt-[5rem] flex gap-5 justify-center max-[600px]:flex-col">
          <div
            className="flex flex-col justify-center gap-5 text-center bg-[#092541] rounded-tl-3xl rounded-bl-3xl w-full py-9 max-[600px]:rounded-3xl"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <FaRegClock className="text-[#85E4CC] text-3xl mx-auto" />
            <h1 className="text-[24px] font-semibold">{project.duration}</h1>
            <p className="text-[#FFFFFF]/80">Duration</p>
          </div>
          <div
            className="flex flex-col justify-center gap-5 text-center bg-[#092541] rounded-tr-3xl rounded-br-3xl w-full py-9 max-[600px]:rounded-3xl"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <LuUserCog className="text-[#85E4CC] text-3xl mx-auto" />
            <h1 className="text-[24px] font-semibold">{project.role}</h1>
            <p>Role</p>
          </div>
        </div>

        <div className="flex gap-2 mt-10 max-[600px]:flex-col">
          <h1
            className="text-[28px] font-semibold mr-[7rem]"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            Description
          </h1>
          <p
            className="mt-3 text-[16px] text-white/50"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            {project.projectDescription}
          </p>
        </div>

        <div className="flex gap-2 mt-10 max-[600px]:flex-col">
          <h1
            className="text-[28px] font-semibold mr-[12rem]"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            Tools
          </h1>
          <p
            className="mt-3 text-[16px] text-white/50"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            {project.tools}
          </p>
        </div>
      </section>

      {/* More Project */}
      <section className="mt-[8rem] mb-[5rem]">
        <h1
          className="text-[28px] font-semibold mr-[7rem]"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          More Project
        </h1>

        <div className="flex flex-wrap gap-[4rem] mt-[2rem]">
          {[project2, project3]
            .filter((p): p is Project => p !== undefined)
            .map((p, index) => {
              const fadeDirection =
                index % 2 === 0 ? "fade-right" : "fade-left";
              return (
                <Link key={p.id} href={p.linkPage} className="cursor-pointer">
                  <div data-aos={fadeDirection} data-aos-duration="3000">
                    <ViewProject
                      title={p.title}
                      titleImage={p.titleImage}
                      titleDescription={p.titleDescription}
                    />
                  </div>
                </Link>
              );
            })}
        </div>

        <Link href="/work">
          <button
            className="w-full cursor-pointer py-4 border-[1px] rounded-full border-[#85E4CC] text-[#85E4CC] hover:bg-[#85E4CC] hover:text-[#0B1023] mt-[5rem]"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            View More Project
          </button>
        </Link>
      </section>
    </main>
  );
}
