import React from "react";

import JobCard from "@/components/cards/JobCard";
import JobFilter from "@/components/filters/JobFilter";
import Pagination from "@/components/Pagination";

import {
  fetchCountries,
  fetchJobs,
  fetchLocation,
} from "@/lib/actions/job.action";

const FindAJob = async ({ searchParams }: RouteParams) => {
  const { query, location, page } = await searchParams;
  const userLocation = await fetchLocation();

  // console.log("Location:", location);
  // console.log("Query:", query);

  const jobs = await fetchJobs({
    query: `${query}, ${location}` || `Software Engineer in ${userLocation}`,
    page: parseInt(page) ?? 1,
  });

  // console.log("User Location:", userLocation);
  // console.log("Jobs: ", jobs);

  const countries = await fetchCountries();
  const parsedPage = parseInt(page ?? 1);
  // console.log("Countries:", countries);

  // const CountryFilter = countries.map((country) => ({
  //   name: country,
  //   value: country,
  // }));

  // jobs.map((job) => console.log("Job Title:", job.job_city));

  // const job = jobs[0];
  // const {
  //   employer_logo,
  //   employer_website,
  //   job_title,
  //   job_description,
  //   job_city,
  //   job_state,
  //   job_country,
  //   job_employment_type,
  //   job_salary,
  //   job_apply_link,
  //   job_min_salary,
  //   job_max_salary,
  // } = job;
  // console.log("Job Details:", {
  //   employer_logo,
  //   employer_website,
  //   job_title,
  //   job_description,
  //   job_city,
  //   job_state,
  //   job_country,
  //   job_employment_type,
  //   job_salary,
  //   job_apply_link,
  //   job_min_salary,
  //   job_max_salary
  // });

  return (
    <>
      <h1>Jobs</h1>

      <div className="flex">
        <JobFilter countriesList={countries} />
      </div>

      {/* <DataRenderer
        success={success}
        error={error}
        data={data}
        empty={EMPTY_JOBS}
        render={() => ( */}
      <div className="mt-10 flex flex-col gap-6">
        {jobs.map((job: Job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      {/* )}
      /> */}
      <Pagination page={parsedPage} isNext={jobs?.length === 10 || false} />
    </>
  );
};

export default FindAJob;
