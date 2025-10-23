import ROUTES from "./routes";

export const DEFAULT_EMPTY = {
  title: "No Data Found",
  message:
    "Looks like the database is taking a nap. Wake it up with some new entries.",
  button: {
    text: "Add Data",
    href: ROUTES.HOME,
  },
};

export const DEFAULT_ERROR = {
  title: "Something Went Wrong",
  message: "Even our code can have a bad day. Give it another shot.",
  button: {
    text: "Retry Request",
    href: ROUTES.HOME,
  },
};

export const EMPTY_QUESTION = {
  title: "Ahh, No Questions Yet!",
  message:
    "The question board is empty. Maybe it&apos;s waiting for your brilliant question to get things rolling",
  button: {
    text: "Ask a Question",
    href: ROUTES.ASK_QUESTION,
  },
};

export const EMPTY_TAGS = {
  title: "No Tags Found",
  message: "The tag cloud is empty. Add some keywords to make it rain.",
  button: {
    text: "Create Tag",
    href: ROUTES.TAGS,
  },
};

export const EMPTY_ANSWERS = {
  title: "No Answers Found",
  message: "Looks like there are no answers for this question yet.",
};

export const EMPTY_COLLECTIONS = {
  title: "Collections Are Empty",
  message:
    "Looks like you haven&apos;t created any collections yet. Start curating something extraordinary today",
  button: {
    text: "Save to Collection",
    href: ROUTES.COLLECTION,
  },
};

export const EMPTY_USERS = {
  title: "No Users Found",
  message: "YOU&apos;RE ALONE. The only one here. More users are coming soon.",
};

export const EMPTY_JOBS = {
  title: "No Jobs Found",
  message: "Looks like there are no jobs available at the moment.",
};
