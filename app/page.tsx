import Image from "next/image";
import React from "react";
import Accordion from "./components/accordion";

export default function Home() {
  const items = [
    {
      titles: [
        { text: "01", className: "font-bold text-light-green text-4xl" },
        { text: "Title", className: "font-bold text-white text-2xl" },
      ],
      content: [
        {
          part1: {
            text: "Определение целей и задач сайта: ",
            className: "font-bold",
          },
          part2: {
            text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            className: "text-gray-600",
          },
        },
        {
          part1: { text: "Part 2: ", className: "font-bold" },
          part2: {
            text: "This is the second part of the content.",
            className: "text-gray-600",
          },
        },
        {
          part1: { text: "Part 3: ", className: "font-bold" },
          part2: {
            text: "This is the third part of the content.",
            className: "text-gray-600",
          },
        },
      ],
    },
    {
      titles: [
        { text: "02", className: "font-bold text-light-green text-4xl" },
        { text: "Title", className: "font-bold text-white text-2xl" },
      ],
      content: [
        {
          part1: { text: "Part 1: ", className: "font-bold" },
          part2: {
            text: "This is the first part of the content.",
            className: "text-gray-600",
          },
        },
        {
          part1: { text: "Part 2: ", className: "font-bold" },
          part2: {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            className: "text-gray-600",
          },
        },
        {
          part1: { text: "Part 3: ", className: "font-bold" },
          part2: {
            text: "This is the third part of the content.",
            className: "text-gray-600",
          },
        },
      ],
    },
    {
      titles: [
        { text: "03", className: "font-bold text-light-green text-4xl" },
        { text: "Title", className: "font-bold text-white text-2xl" },
      ],
      content: [
        {
          part1: { text: "Part 1: ", className: "font-bold" },
          part2: {
            text: "This is the first part of the content.",
            className: "text-gray-600",
          },
        },
        {
          part1: { text: "Part 2: ", className: "font-bold" },
          part2: {
            text: "This is the second part of the content.",
            className: "text-gray-600",
          },
        },
        {
          part1: { text: "Part 3: ", className: "font-bold" },
          part2: {
            text: "This is the third part of the content.",
            className: "text-gray-600",
          },
        },
      ],
    },
  ];

  return (
    <div className="relative mx-auto min-h-screen pt-16 font-[family-name:var(--font-geist-sans)]">
      <Image
        className="absolute top-0 right-0 p-t -z-10 hidden sm:block"
        src="/figura.png"
        alt="bg-top"
        width={350}
        height={500}
      />

      <div className="min-w-28 max-w-9xl bg-light-green ps-16 mr-20 py-6 text-4xl text-black font-bold rounded-r-full mb-10 lg:ps-72 md:ps-40 sm:ps-32 sm:mr-40">
        TITLE
      </div>
      <main className="max-w-7xl mx-auto w-2/3 flex flex-col gap-6">
        {/* <div className="">
            <details className="bg-black py-3 px-7 rounded-3xl text-2xl">
              <summary className="flex items-center justify-between gap-4">
                <h2 className="font-bold flex gap-4">
                  <span className="text-light-green">01</span>Title
                </h2>

                <svg
                  data-accordion-icon
                  className="w-3 h-3 rotate-180 shrink-0 active:rotate-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </summary>
              <ul className="flex flex-col gap-9">
                <li>fd</li>
                <li>dw</li>
                <li>dw</li>
                <li>wdw</li>
                <li>wdw</li>
              </ul>
            </details>
          </div> */}

        <div className="min-h-screen bg-transparent">
          <h1 className="text-2xl font-bold ml-4 mb-4 text-[var(--ac-text)]">
            ЭТАПЫ
          </h1>
          <Accordion items={items} />
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center mb-28"></footer>
    </div>
  );
}
