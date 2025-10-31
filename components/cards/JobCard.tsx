/* eslint-disable camelcase */
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { processJobTitle } from "@/lib/utils";

interface JobLocationProps {
  job_country?: string;
  job_city?: string;
  job_state?: string;
}

interface Props {
  job: Job;
}

const JobLocation = ({
  job_country,
  job_city,
  job_state,
}: JobLocationProps) => {
  // console.log("Job location props:", { job_country, job_city, job_state });
  return (
    <div className="background-light800_dark200 dark:bg-dark-200! flex items-start justify-start gap-2 rounded-2xl px-4 py-3">
      <Image
        src={`https://flagsapi.com/${job_country}/flat/64.png`}
        alt="country flag"
        width={16}
        height={16}
      />

      <p className="body-medium text-dark400_light700">
        {job_city && `${job_city},`} {job_state && `${job_state},`}{" "}
        {job_country && `${job_country}`}
      </p>
    </div>
  );
};

const JobCard = ({
  job: {
    employer_logo,
    employer_website,
    job_title,
    job_description,
    job_city,
    job_state,
    job_country,
    job_employment_type,
    job_apply_link,
    job_min_salary,
    job_max_salary,
  },
}: Props) => {
  // const { job_city, job_state, job_country } = job;
  // console.log("JobCard received props:", { job_city, job_state, job_country });
  return (
    <section className="background-light900_dark200 dark:bg-dark-200 light-border shadow-light100_darknone flex flex-col items-start gap-6 rounded-2xl border p-6 sm:flex-row sm:p-8">
      <div className="flex w-full justify-end sm:hidden">
        <JobLocation
          job_country={job_country}
          job_city={job_city}
          job_state={job_state}
        />
      </div>

      <div className="flex items-center gap-6">
        {employer_logo ? (
          <Link
            href={employer_website ?? "/jobs"}
            target="_blank"
            className="background-light800_dark400 relative size-16 rounded-xl"
          >
            <Image
              src={employer_logo}
              alt="company logo"
              fill
              className="size-full object-contain p-2"
            />
          </Link>
        ) : (
          <Image
            src="/images/site-logo.svg"
            alt="default site logo"
            width={64}
            height={64}
            className="rounded-[10px]"
          />
        )}
      </div>

      <div className="w-full">
        <div className="flex flex-between flex-wrap gap-2">
          <p className="base-semibold text-dark200_light900">
            {processJobTitle(job_title)}
          </p>
          <p className="body-regular text-dark500_light700  mt-2 line-clamp-2">
            {job_description?.slice(0, 200)}
          </p>
          <div className="flex">
            <Image
              src="/icons/clock-2.svg"
              alt="clock"
              width={16}
              height={16}
              className="mr-1"
            />
            <span className="mr-5">{job_employment_type}</span>
            <Image
              src="/icons/currency-dollar-circle.svg"
              alt="salary"
              width={16}
              height={16}
              className="mr-1"
            />{" "}
            {job_min_salary && job_max_salary ? (
              <span>
                {job_min_salary} - {job_max_salary}
              </span>
            ) : (
              <span>Not specified</span>
            )}
          </div>
        </div>
      </div>

      {/* <p className="body-regular text-dark500_light700  mt-2 line-clamp-2">
        {job_description?.slice(0, 200)}
      </p> */}

      <div className="flex flex-between mt-8 flex-wrap gap-6">
        <div className="flex flex-wrap items-end gap-6 dark:bg-dark-200">
          <div className="hidden sm:flex">
            <JobLocation
              job_country={job_country}
              job_city={job_city}
              job_state={job_state}
            />
          </div>

          {/* <div className="flex items-center gap-2">
            <Image
              src="/icons/clock-2.svg"
              alt="clock"
              width={16}
              height={16}
            />
            <p>{job_employment_type}</p>
          </div> */}

          {/* <div className="flex items-center gap-2">
            <Image
              src="/icons/currency-dollar-circle.svg"
              alt="salary"
              width={16}
              height={16}
            />
            {job_min_salary && job_max_salary ? (
              <p>
                {job_min_salary} - {job_max_salary}
              </p>
            ) : (
              <p>Not specified</p>
            )}
          </div> */}
        </div>
        <div>
          <Link href={job_apply_link} className="flex items-end gap-2">
            <span className="body-semibold primary-text-gradient">
              View job
            </span>
            <Image
              src="/icons/arrow-up-right.svg"
              alt="job link"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
    </section>

    // <div className="background-light900_dark200 light-border shadow-light100_darknone flex flex-col items-start gap-6 rounded-lg border p-6 sm:flex-row sm:p-8">
    //   <div className="flex flex-col-reverse justify-between gap-5 sm:flex-row">
    //     <div className="flex w-[50px] h-[50px] rounded-md"></div>
    //     <div className="flex">
    //       <div className="flex flex-col width-[520px]">
    //         <Link href="">
    //           <h4 className="sm:h4-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
    //             Principal Salesforce Developer{" "}
    //             <span className="subtle-medium bg-dark-300 text-light-500 px-4 py-2 rounded-md uppercase ml-4">
    //               Development
    //             </span>
    //           </h4>
    //         </Link>

    //         <div className="mt-5 body-regular">
    //           About the Company Join AT&T and reimagine the communications and
    //           technologies that connect the world.
    //         </div>

    //         <div className="flex flex-row w-full mt-5 justify-start">
    //           <div className="flex">
    //             <Image
    //               src="/icons/clock-2.svg"
    //               alt="clock"
    //               width={16}
    //               height={16}
    //             />
    //             <span className="small-medium text-dark400_light800 ml-2">
    //               Full-time
    //             </span>
    //           </div>

    //           <div className="flex ml-5">
    //             <Image
    //               src="/icons/currency-dollar-circle.svg"
    //               alt="currency"
    //               width={16}
    //               height={16}
    //             />
    //             <span className="small-medium text-dark400_light800 ml-2">
    //               80 - 100K
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="flex flex-col body-medium space-y-10 justify-items-end">
    //         <div className="flex">Job Location</div>
    //         <div className="flex">
    //           <Link href="" className="text-primary-500">
    //             View job
    //             <Image
    //               src="/icons/arrow-up-right.svg"
    //               alt="job link"
    //               width={20}
    //               height={20}
    //               className=""
    //             />
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default JobCard;
