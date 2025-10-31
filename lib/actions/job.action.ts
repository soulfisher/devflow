export const fetchLocation = async () => {
  const response = await fetch("http://ip-api.com/json/{query}?fields=country");
  const location = await response.json();
  return location.country;
};

export const fetchCountries = async () => {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name"
    );
    const result = await response.json();
    // const countryNames = result.map(
    //   (country: { name: { common: string } }) => country.name.common
    // );

    // countryNames.sort(function (a, b) {
    //   const nameA = a.toLowerCase();
    //   const nameB = b.toLowerCase();
    //   if (nameA < nameB)
    //     // sort string ascending
    //     return -1;
    //   if (nameA > nameB) return 1;
    //   return 0; // default return value (no sorting)
    // });

    // console.log("Fetched countries:", countryNames);
    // return countryNames;
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const fetchJobs = async (filters: JobFilterParams) => {
  const { query, page } = filters;

  const headers = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY ?? "",
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  };

  const response = await fetch(
    `https://jsearch.p.rapidapi.com/search?query=${query}&page=${page}`,
    {
      headers,
    }
  );

  const result = await response.json();

  return result.data;
};
