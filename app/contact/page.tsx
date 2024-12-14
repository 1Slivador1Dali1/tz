import Image from "next/image";
import React from "react";
import { Breadcrumbs } from "../components/breadcrumbs";

export default function Contact() {
  const breadcrumbs = [
    {
      title: "Главная ",
      href: "#",
    },
    {
      title: "Контакты",
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
    <div className="relative mx-auto max-h-screen pt-24 font-[family-name:var(--font-geist-sans)]">
      <Image
        className="absolute top-0 right-0 p-t -z-10 block sm:w-[490px]"
        src="/rear-unit-contact.png"
        alt="bg-top"
        width={150}
        height={320}
      />

      <Image
        className="absolute top-[150px] right-[460px] lg:top-[190px] lg:right-[450px] p-t z-10 block"
        src="/Subtract.svg"
        alt="bg-top"
        width={80}
        height={320}
      />

      <div className=" lg:flex lg:mb-3 lg:min-w-28  lg:max-w-4xl lg:justify-center xl:pl-28 hidden ">
        <Breadcrumbs items={breadcrumbs} separator={separator} />
      </div>

      <div className="min-w-28 max-w-52 md:max-w-md lg:max-w-xl xl:max-w-3xl text-center bg-light-green mr-20 py-3 mb-2 sm:py-6 text-base sm:text-3xl lg:text-4xl text-black uppercase font-bold rounded-r-full lg:ps-72 md:ps-40 sm:ps-32 sm:mr-40">
        Контакты
      </div>

      <div className="min-w-96 md:max-w-xl lg:max-w-4xl xl:max-w-6xl bg-black flex flex-col items-start justify-center py-10 xl:pl-96 rounded-r-xl mr-28">
        <ul className="flex flex-col gap-4 mb-14 text-balance">
          <li className="list-image-tel">
            <span className="text-light-green">Телефон для связи - </span>+7
            (991) 920-29-13
          </li>
          <li className="list-image-mail">
            <span className="text-light-green">Почта - </span>
            anton.kotelnikow@yandex.ru
          </li>
          <li className="list-image-wp">
            <span className="text-light-green">Whats app - </span>+7 (991)
            920-29-13
          </li>
          <li className="list-image-tg">
            <span className="text-light-green">Telegram - </span>@ardenant
          </li>
        </ul>

        <h3 className="mb-5">Мы на связи 9:00 - 19:00 по будням</h3>

        <p className="">
          В выходные и праздничные дни коммуникация по
          <br /> согласованию с мендежером.
        </p>
      </div>
    </div>
  );
}
