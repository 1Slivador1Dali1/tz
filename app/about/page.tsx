import Image from "next/image";
import React from "react";
import { Breadcrumbs } from "../components/breadcrumbs";

export default function About() {
  //Хлебные крошки
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

  // Этапы создания сайта
  const steps = [
    {
      number: "01",
      title: "Консультация и анализ бизнеса",
      description:
        "Мы начинаем с детального обсуждения ваших бизнес-целей, конкурентной среды и аудитории...",
      style:
        "md:justify-end rounded-l-3xl md:rounded-l-none md:rounded-r-3xl text-start", // Стили для левой стороны
    },
    {
      number: "02",
      title: "Согласование договора",
      description:
        "Наше сотрудничество начинается с четкого согласования условий договора...",
      style: "md:justify-start rounded-l-3xl text-start", // Стили для правой стороны
    },
    {
      number: "03",
      title: "Исследование и стратегия",
      description:
        "После подписания договора проводится исследование рынка и аудитории...",
      style:
        "md:justify-end rounded-l-3xl md:rounded-l-none md:rounded-r-3xl text-start", // Стили для левой стороны
    },
    {
      number: "04",
      title: "Проектирование UX/UI",
      description:
        "Мы создаем прототипы страниц с удобной архитектурой и продуманным пользовательским опытом...",
      style: "md:justify-start rounded-l-3xl text-start", // Стили для правой стороны
    },
    {
      number: "05",
      title: "Создание интерактивного прототипа",
      description:
        "Мы создаем интерактивный прототип, где можно увидеть как будут работать элементы...",
      style:
        "md:justify-end rounded-l-3xl md:rounded-l-none md:rounded-r-3xl text-start", // Стили для левой стороны
    },
    {
      number: "06",
      title: "Разработка уникального дизайна",
      description:
        "Наши дизайнеры создают визуальную концепцию сайта, учитывая брендбук и ваши предпочтения...",
      style: "md:justify-start rounded-l-3xl  text-start ", // Стили для правой стороны
    },
  ];

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

      <div className="max-w-5xl mx-auto w-5/6 sm:w-2/3 flex flex-col justify-center mb-8 gap-7 px-10 py-7 md:gap-14 lg:gap-20 sm:px-[70px] sm:py-[40px] bg-black rounded-[70px]">
        <p className="text-base font-bold md:text-3xl uppercase">
          Обращаясь к нам<br></br> вы получаете:
        </p>
        <ol className="flex flex-col justify-start gap-3 md:gap-9 md:text-lg lg:gap-12 lg:text-2xl">
          <li>1. Индивидуальный подход к каждому нашему клиенту</li>
          <li>2. Команду молодых специалистов</li>
          <li>3. Персонального мендежер проектов</li>
          <li>4. Ориентированность на результат</li>
          <li>5. Гарантию и поддержку в течение всего проекта</li>
        </ol>
      </div>

      <div className="min-w-28 max-w-6xl text-center bg-light-green mr-32 py-3 mb-10 sm:py-6 text-base sm:text-3xl lg:text-4xl text-black uppercase font-bold rounded-r-full sm:mb-16 lg:ps-72 md:ps-40 sm:ps-32 sm:mr-52">
        Этапы создания сайта
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-9xl mx-auto max-h-auto mb-5">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`p-6 bg-black flex items-center justify-center text-center ${step.style}`}
          >
            <div className="max-w-96">
              <h2 className="text-4xl  font-bold mb-2">{step.number}</h2>
              <h3 className="text-lg text-lime-400 font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-400">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
