import Image from "next/image";
import Link from "next/link";
import React from "react";

import TagCard from "../cards/TagCard";

const hotQuestions = [
  { id: 1, title: "How to implement authentication in React?" },
  {
    id: 2,
    title: "What is the difference between var, let, and const in JavaScript?",
  },
  { id: 3, title: "How to optimize React application performance?" },
  { id: 4, title: "What are React hooks and how to use them?" },
  { id: 5, title: "How to manage state in a large React application?" },
];

const popularTags = [
  { id: 1, name: "JavaScript", questions: 1200 },
  { id: 2, name: "React", questions: 950 },
  { id: 3, name: "CSS", questions: 800 },
  { id: 4, name: "Node.js", questions: 650 },
  { id: 5, name: "TypeScript", questions: 500 },
];

const RightSidebar = () => {
  return (
    <section className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto borde-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>

        <div className="mt-7 flex w-fit flex-col gap-[30px]">
          {hotQuestions.map(({ id, title }) => (
            <Link
              key={id}
              href={`/questions/${id}`}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{title}</p>

              <Image
                src="/icons/chevron-right.svg"
                alt="Chevron"
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>

        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ id, name, questions }) => (
            <TagCard
              key={id}
              id={id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
