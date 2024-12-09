"use client";
import React, { useState } from "react";

const AccordionItem = ({ titles, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <button
        className={`w-full text-left p-4 bg-black flex items-center justify-between ${
          isOpen ? "rounded-t-3xl" : "rounded-full"
        }`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center space-x-2">
          {titles &&
            titles.map((title, index) => (
              <span key={index} className={title.className}>
                {title.text}
              </span>
            ))}
        </div>

        <svg
          className={`w-4 h-4 transition-transform transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 bg-black rounded-b-3xl text-[var(--ac-text)]">
          <ul className="list-image-portal list-inside">
            {content.map((item, index) => (
              <li key={index} className="mb-2">
                <span className={item.part1.className}>{item.part1.text}</span>
                <span className={item.part2.className}>{item.part2.text}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="space-y-4">
      {items &&
        items.map((item, index) => (
          <AccordionItem
            key={index}
            titles={item.titles}
            content={item.content}
          />
        ))}
    </div>
  );
};

export default Accordion;
