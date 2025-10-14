import React from "react";

import { AnswerFilters } from "@/constants/filters";
import { EMPTY_ANSWERS } from "@/constants/states";

import AnswerCard from "../cards/AnswerCard";
import DataRenderer from "../DataRenderer";
import CommonFilter from "../filters/CommonFilter";
import Pagination from "../Pagination";

interface Props extends ActionResponse<Answer[]> {
  totalAnswers: number;
  page: number;
  isNext: boolean;
}

const AllAnswers = ({
  page,
  isNext,
  data,
  success,
  error,
  totalAnswers,
}: Props) => {
  return (
    <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
      <div className="flex items-center justify-between">
        <h3 className="primary-text-gradient">
          {totalAnswers} {totalAnswers === 1 ? "Answer" : "Answers"}
        </h3>

        <CommonFilter
          filters={AnswerFilters}
          otherClasses="sm:min-w-[32px]"
          containerClasses="max-xs:w-full"
        />

        <DataRenderer
          data={data}
          success={success}
          error={error}
          empty={EMPTY_ANSWERS}
          render={(answers) =>
            answers.map((answer) => <AnswerCard key={answer._id} {...answer} />)
          }
        />

        <Pagination page={page} isNext={isNext || false} />
      </div>
    </div>
  );
};

export default AllAnswers;
