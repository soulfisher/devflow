"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

import { formUrlQuery } from "@/lib/url";

import LocalSearch from "../search/LocalSearch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

// interface Props {
//   filters: {
//     name: string;
//     value: string;
//   }[];
//   otherClasses?: string;
//   containerClasses?: string;
// }

interface JobFilterList {
  countriesList: Country[];
}

const CommonFilter = ({ countriesList }: JobFilterList) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const sortedCountries = countriesList.sort(function (a, b) {
    return a.name.common.localeCompare(b.name.common);
  });

  const handleUpdateParams = (value: string) => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "location",
      value,
    });
    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="relative mt-11 flex w-full justify-between gap-5 max-sm:flex-col sm:items-center">
      <LocalSearch
        route={pathname}
        iconPosition="left"
        imgSrc="/icons/search.svg"
        placeholder="Job Title, Keywords, or Company"
        otherClasses="flex-1"
      />

      <Select onValueChange={(value) => handleUpdateParams(value)}>
        <SelectTrigger
          className="body-regular light-border background-light800_dark300 text-dark500_light700 line-clamp-1 flex min-h-[50px] items-center gap-3 border p-4 sm:max-w-[210px]"
          aria-label="Filter options"
        >
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder="Select location" />
          </div>
        </SelectTrigger>

        <SelectContent className="body-semibold max-h-[350px] max-w-[250px]">
          <SelectGroup>
            {sortedCountries ? (
              sortedCountries.map((country: Country) => (
                <SelectItem
                  key={country.name.common}
                  value={country.name.common}
                >
                  {country.name.common}
                </SelectItem>
              ))
            ) : (
              <SelectItem value="No results found">No results found</SelectItem>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* <Button className="primary-gradient min-h-[46px] px-4 py-3 gap-3 !text-light-900">
        <Link href="">Find Jobs</Link>
      </Button> */}
    </div>
  );
};

export default CommonFilter;
