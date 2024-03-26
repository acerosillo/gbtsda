export interface Navigation {
  id: number;
  name: string;
  slug: string;
  subnav: SubNav[] | null;
}

export interface SubNav {
  id: number;
  name: string;
  slug: string;
}

export const naviData: Navigation[] = [
  {
    id: 1,
    name: "Home",
    slug: "/",
    subnav: null,
  },
  {
    id: 2,
    name: "News",
    slug: "news",
    subnav: null,
  },
  {
    id: 3,
    name: "History",
    slug: "/#history",
    subnav: null,
  },
  {
    id: 4,
    name: "Gallery",
    slug: "gallery",
    subnav: null,
  },
  {
    id: 5,
    name: "Grandmasters",
    slug: "/#grandmasters",
    subnav: null,
  },
  {
    id: 6,
    name: "Masters",
    slug: "/#masters",
    subnav: null,
  },
  {
    id: 7,
    name: "Clubs",
    slug: "clubs",
    subnav: null,
  },
  {
    id: 8,
    name: "Information",
    slug: "",
    subnav: [
      {
        id: 1,
        name: "Events",
        slug: "/events",
      },
      {
        id: 2,
        name: "Results",
        slug: "/results",
      },
      {
        id: 3,
        name: "Schedule",
        slug: "/schedule",
      },
      {
        id: 4,
        name: "Clinics",
        slug: "/clinics",
      },
      {
        id: 5,
        name: "Testing",
        slug: "/testing",
      },
      {
        id: 6,
        name: "Information",
        slug: "/information",
      },
      {
        id: 7,
        name: "Safeguarding",
        slug: "/safeguarding",
      },
    ],
  },
];
