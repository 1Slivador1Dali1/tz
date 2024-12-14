import Image from "next/image";
import React from "react";
import { Breadcrumbs } from "../components/breadcrumbs";

export default function About() {
  const breadcrumbs = [
    {
      title: "Главная ",
      href: "#",
    },
    {
      title: "О нас",
    },
  ];

  const separator = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 stroke-light-green"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  );

  return (
    <div className="relative mx-auto max-h-screen pt-12 font-[family-name:var(--font-geist-sans)]">
      <div className=" md:flex md:mb-3 md:min-w-28 md:max-w-5xl md:justify-center md:pl-36 hidden ">
        <Breadcrumbs items={breadcrumbs} separator={separator} />
      </div>

      <div className="min-w-28 max-w-9xl text-center bg-light-green mr-20 py-3 mb-10 sm:py-6 text-base sm:text-3xl lg:text-4xl text-black uppercase font-bold rounded-r-full sm:mb-16 lg:ps-72 md:ps-40 sm:ps-32 sm:mr-40">
        Ваша идея - наша реализация!
      </div>

      <Image
        className="absolute inset-0 top-28 sm:top-52 -z-10 block"
        src="/rear-unit.png"
        alt="bg-top"
        width={1920}
        height={405}
      />

      <div className="max-w-7xl mx-auto w-2/3 flex flex-col justify-center gap-7 px-10 py-7 md:gap-14 lg:gap-20 sm:px-[90px] sm:py-[60px] bg-black rounded-[70px]">
        <p className="text-base md:text-3xl uppercase">
          Обращаясь к нам<br></br> вы получаете:
        </p>
        <ol className="flex flex-col justify-start gap-3 md:gap-9 md:text-lg lg:gap-16 lg:text-2xl">
          <li>1. Индивидуальный подход к каждому нашему клиенту</li>
          <li>2. Команду молодых специалистов</li>
          <li>3. Персонального мендежер проектов</li>
          <li>4. Ориентированность на результат</li>
          <li>5. Гарантию и поддержку в течение всего проекта</li>
        </ol>
      </div>
    </div>
  );
}
