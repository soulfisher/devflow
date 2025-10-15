import Image from "next/image";
import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/routes";
import { getHotQuestions } from "@/lib/actions/question.action";
import { getTopTags } from "@/lib/actions/tag.action";

import TagCard from "../cards/TagCard";
import DataRenderer from "../DataRenderer";

// const hotQuestions = [
//   { id: 1, title: "How to implement authentication in React?" },
//   {
//     id: 2,
//     title: "What is the difference between var, let, and const in JavaScript?",
//   },
//   { id: 3, title: "How to optimize React application performance?" },
//   { id: 4, title: "What are React hooks and how to use them?" },
//   { id: 5, title: "How to manage state in a large React application?" },
// ];

// const popularTags = [
//   { id: 1, name: "JavaScript", questions: 1200 },
//   { id: 2, name: "React", questions: 950 },
//   { id: 3, name: "CSS", questions: 800 },
//   { id: 4, name: "Node.js", questions: 650 },
//   { id: 5, name: "TypeScript", questions: 500 },
// ];

const RightSidebar = async () => {
  const [
    { success, data: hotQuestions, error },
    { success: tagSuccess, data: tags, error: tagError },
  ] = await Promise.all([getHotQuestions(), getTopTags()]);

  return (
    <section className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto borde-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>

        <DataRenderer
          data={hotQuestions}
          empty={{
            title: "No questions found",
            message: "No questions have been asked yet.",
          }}
          success={success}
          error={error}
          render={(hotQuestions) => (
            <div className="mt-7 flex w-full flex-col gap-[30px]">
              {hotQuestions.map(({ _id, title }) => (
                <Link
                  key={_id}
                  href={ROUTES.QUESTION(_id)}
                  className="flex cursor-pointer items-center justify-between gap-7"
                >
                  <p className="body-medium text-dark500_light700 line-clamp-2">
                    {title}
                  </p>

                  <Image
                    src="/icons/chevron-right.svg"
                    alt="Chevron"
                    width={20}
                    height={20}
                  />
                </Link>
              ))}
            </div>
          )}
        />
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>

        <DataRenderer
          data={tags}
          empty={{
            title: "No tags found",
            message: "No tags have been created yet.",
          }}
          success={tagSuccess}
          error={tagError}
          render={(tags) => (
            <div className="mt-7 flex w-full flex-col gap-[30px]">
              {tags.map(({ _id, name, questions }) => (
                <TagCard
                  key={_id}
                  _id={_id}
                  name={name}
                  questions={questions}
                  showCount
                  compact
                />
              ))}
            </div>
          )}
        />
      </div>
    </section>
  );
};

export default RightSidebar;
