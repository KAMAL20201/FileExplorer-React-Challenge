 const explorer = {
  id: "root",
  name: "root",
  isFolder: true,
  items: [
    {
      id: "1",
      name: "public",
      isFolder: true,
      items: [
        {
          id: "11",
          name: "images",
          isFolder: true,
          items: [
            {
              id: "111",
              name: "cover.png",
            },
            {
              id: "112",
              name: "icons",
              isFolder: true,
              items: [
                {
                  id: "1121",
                  name: "arrow.svg",
                },
              ],
            },
          ],
        },
        {
          id: "12",
          name: "public_nested_file",
        },
      ],
    },
    {
      id: "2",
      name: "src",
      isFolder: true,
      items: [
        {
          id: "21",
          name: "components",
          isFolder: true,
          items: [
            {
              id: "21",
              name: "index.js",
            },
            {
              id: "22",
              name: "index.html",
            },
            {
              id: "23",
              name: "index.css",
            },
          ],
        },
        {
          id: "22",
          name: "main.jsx",
        },
        {
          id: "23",
          name: "App.jsx",
        },
        {
          id: "24",
          name: "app.module.css",
        },
      ],
    },
    {
      id: "3",
      name: "dist",
      isFolder: true,
      items: [
        {
          id: "31",
          name: "index.js",
        },
        {
          id: "32",
          name: "index.html",
        },
        {
          id: "33",
          name: "index.css",
        },
      ],
    },
    {
      id: "4",
      name: "package.json",
      items: [],
    },
    {
      id: "5",
      name: "package-lock.json",
      items: [],
    },
  ],
};


export default explorer;