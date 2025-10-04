import { title } from "process";

import Link from "next/link";
import React from "react";

import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import { api } from "@/lib/api";
import handleError from "@/lib/handlers/error";
import { ValidationError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";

const questions = [
  {
    _id: "1",
    title: "How to center a div in CSS?",
    description: "I want to center a div both vertically and horizontally.",
    tags: [
      { _id: 1, name: "css" },
      { _id: 2, name: "html" },
    ],
    author: {
      _id: 1,
      name: "John Doe",
      image:
        "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    },
    upvotes: 10,
    downvotes: 2,
    answers: 5,
    views: 65,
    createdAt: new Date("2023-10-01"),
  },
  {
    _id: "2",
    title: "What is the difference between var, let, and const in JavaScript?",
    description:
      "Can someone explain the differences between var, let, and const?",
    tags: [{ _id: 1, name: "JavaScript" }],
    author: {
      _id: 1,
      name: "John Doe",
      image:
        "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    },
    upvotes: 20,
    downvotes: 5,
    answers: 5,
    views: 75,
    createdAt: new Date("2023-10-01"),
  },
];

const test = async () => {
  try {
    return await api.users.getAll();
  } catch (error) {
    return handleError(error);
  }
};

interface searchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: searchParams) => {
  const users = await test();
  console.log(users);

  const { query = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <>
      <section className="flex w-full flex-col-reverse sm:flex-row justify-between gap-4 sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};
export default Home;
