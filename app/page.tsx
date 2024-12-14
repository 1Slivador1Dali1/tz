import Image from "next/image";
import React from "react";
import Accordion from "./components/accordion";

export default function Home() {
  const items = [
    {
      titles: [
        {
          text: "01",
          className: "font-bold text-light-green text-xl sm:text-4xl",
        },
        {
          text: "Title",
          className: "font-bold text-white text-lg sm:text-2xl",
        },
      ],
      content: [
        {
          part1: {
            text: "Определение целей и задач сайта: ",
            className:
              "font-bold text-sm text-light-green sm:text-xl sm:text-[var(--ac-text)]",
          },
          part2: {
            text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            className: "text-gray-600 text-sm sm:text-xl",
          },
        },
        {
          part1: {
            text: "Part 2: ",
            className:
              "font-bold text-sm text-light-green sm:text-xl sm:text-[var(--ac-text)]",
          },
          part2: {
            text: "This is the second part of the content.",
            className: "text-gray-600 text-sm sm:text-xl",
          },
        },
        {
          part1: {
            text: "Part 3: ",
            className:
              "font-bold text-sm text-light-green sm:text-xl sm:text-[var(--ac-text)]",
          },
          part2: {
            text: "This is the third part of the content.",
            className: "text-gray-600 text-sm sm:text-xl",
          },
        },
      ],
    },
    {
      titles: [
        {
          text: "02",
          className: "font-bold text-light-green ext-xl sm:text-4xl",
        },
        {
          text: "Title",
          className: "font-bold text-white text-lg sm:text-2xl",
        },
      ],
      content: [
        {
          part1: {
            text: "Part 1: ",
            className:
              "font-bold text-sm text-light-green sm:text-xl sm:text-[var(--ac-text)]",
          },
          part2: {
            text: "This is the first part of the content.",
            className: "text-gray-600 text-sm sm:text-xl",
          },
        },
        {
          part1: {
            text: "Part 2: ",
            className:
              "font-bold text-sm text-light-green sm:text-xl sm:text-[var(--ac-text)]",
          },
          part2: {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            className: "text-gray-600 text-sm sm:text-xl",
          },
        },
        {
          part1: {
            text: "Part 3: ",
            className:
              "font-bold text-sm text-light-green sm:text-xl sm:text-[var(--ac-text)]",
          },
          part2: {
            text: "This is the third part of the content.",
            className: "text-gray-600 text-sm sm:text-xl",
          },
        },
      ],
    },
    {
      titles: [
        {
          text: "03",
          className: "font-bold text-light-green ext-xl sm:text-4xl",
        },
        {
          text: "Title",
          className: "font-bold text-white text-lg sm:text-2xl",
        },
      ],
      content: [
        {
          part1: {
            text: "Part 1: ",
            className:
              "font-bold text-sm text-light-green sm:text-xl sm:text-[var(--ac-text)]",
          },
          part2: {
            text: "This is the first part of the content.",
            className: "text-gray-600 text-sm sm:text-xl",
          },
        },
        {
          part1: {
            text: "Part 2: ",
            className:
              "font-bold text-sm text-light-green sm:text-xl sm:text-[var(--ac-text)]",
          },
          part2: {
            text: "This is the second part of the content.",
            className: "text-gray-600 text-sm sm:text-xl",
          },
        },
        {
          part1: {
            text: "Part 3: ",
            className:
              "font-bold text-sm text-light-green sm:text-xl sm:text-[var(--ac-text)]",
          },
          part2: {
            text: "This is the third part of the content.",
            className: "text-gray-600 text-sm sm:text-xl",
          },
        },
      ],
    },
  ];

  return (
    <div className="relative mx-auto max-h-screen pt-16 font-[family-name:var(--font-geist-sans)]">
      <Image
        className="absolute top-0 right-0 p-t -z-10 hidden sm:block text"
        src="/figura.png"
        alt="bg-top"
        width={350}
        height={500}
      />

      <div className="min-w-28 max-w-9xl text bg-light-green ps-16 mr-20 py-3 sm:py-6 text-2xl sm:text-4xl text-black font-bold rounded-r-full mb-10 lg:ps-72 md:ps-40 sm:ps-32 sm:mr-40">
        TITLE
      </div>

      <main className="max-w-7xl mx-auto w-2/3  mb-8 flex flex-col gap-6">
        <div className="min-h-auto bg-transparent">
          <h1 className="text-2xl font-bold ml-4 mb-4 text-[var(--ac-text)]">
            ЭТАПЫ
          </h1>
          <Accordion items={items} />
        </div>
      </main>

      <footer className="max-w-7xl  w-2/3 h-[100px] sm:h-[400px] flex justify-center items-center mx-auto">
        <div
          className="sm:bg-contain sm:bg-center sm:bg-no-repeat sm:w-full sm:h-full sm:flex sm:flex-col sm:gap-6 sm:justify-center sm:items-center hidden "
          style={{
            backgroundImage: "url(/footer-img.png), backgroundSize: 'auto'",
          }}
        >
          <button className="py-3 px-14 bg-light-green text-black text-2xl rounded-full">
            Оставить заявку
          </button>
          <p className="text-2xl text-light-green">
            И мы обязательно свяжемся с вами!
          </p>
        </div>

        <div className="flex flex-col gap-3 items-center justify-center sm:hidden">
          <p className="text-sm uppercase text-center text-wrap text-light-green">
            Ваша идея — наш следующий проект!
          </p>
          <button className="py-3 px-6 bg-light-green text-black text-lg rounded-full">
            Оставить заявку
          </button>
        </div>
      </footer>
    </div>
  );
}
