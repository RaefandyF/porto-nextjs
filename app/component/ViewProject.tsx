import Image from "next/image";
type ViewProject = {
    titleImage: string;
    title: string;
    titleDescription: string;
}

export default function ViewProject(props : ViewProject) {
  return (
    <div>
      <div
        className={`max-w-[35rem] h-[25rem] bg-[#D9D9D9] flex justify-center p-2 rounded-2xl`}
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #D9D9D9 0%, #0B1023 100%)",
        }}
      >
        <Image
          alt="Project"
          width={544}
          height={384}
          src={props.titleImage}
          className="object-cover rounded-3xl"
          priority
        />
      </div>
      <h1 className="mt-5 font-semibold text-[22px]">{props.title}</h1>
      <p className="font-[300] mt-2 text-[16px]">
        {props.titleDescription}
      </p>
    </div>
  );
}
