import React from "react";
import Header from "../component/Header";

export default function About() {
  return (
    <main className="overflow-hidden bg-[#0B1023] h-[100vh]">
      <div className="text-white pb-[7rem] mt-[0.5rem] flex flex-col gap-5 justify-center">
        <Header bold="about" />
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
            CONTACT
          </h1>
          <div className="flex mt-[-1rem] justify-center">
            <p
              className="text-[14px] max-w-[30rem] mt-10 text-center font-[400]"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="500"
            >
              I’m currently open to new opportunities and would love to connect.
              Feel free to reach out for collaboration
            </p>
          </div>

          <div
            className="flex gap-[4rem] max-[360px]:gap-[2rem] justify-center mt-[5rem]"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="1000"
          >
            <a
              href="https://wa.me/6287879564171"
              target="_blank"
              className="flex flex-col gap-3 items-center"
            >
              <img className="w-[4rem] h-[4rem]" src="/whatsapp-icon.png" />
              <p className="text-[14px] font-[400]">Whatsapp</p>
            </a>
            <a
              href="mailto:raefandyfa@gmail.com"
              target="_blank"
              className="flex flex-col gap-3 items-center"
            >
              <img className="w-[4rem] h-[4rem]" src="/email-icon.png" />
              <p className="text-[14px] font-[400]">Email</p>
            </a>
            <a
              href="https://www.linkedin.com/in/raefandy-fadila/"
              target="_blank"
              className="flex flex-col gap-3 items-center"
            >
              <img className="w-[4rem] h-[4rem]" src="/linkedin-icon.png" />
              <p className="text-[14px] font-[400]">LinkedIn</p>
            </a>
          </div>
        </section>
      </div>
      <section className="bg-[#0B1023] text-white max-[435px]:px-0 flex flex-col gap-5 justify-center">
        <div className="mt-[-16rem] bg-[url('/section2-bg.webp')] bg-cover bg-center w-full h-[97rem] max-[435px]:h-[70rem]"></div>
      </section>
    </main>
  );
}
