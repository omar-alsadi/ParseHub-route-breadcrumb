export const routes = [
  {
    path: "/",
    label: "Root",
    type: 'dir',
    routes: [
      {
        path: "/home",
        label: "Home",
        type: 'dir',
        routes: [
          {
            path: "/omar",
            label: "Omar Alsadi",
            type: 'dir',
            routes: [
              {
                path: "/filea",
                label: "Filea.text",
                type: 'file',
              }
              ,
              {
                path: "/fileb",
                label: "Fileb.text",
                type: 'file',
              }
              ,
              {
                path: "/project",
                label: "Project",
                type: 'dir',
                routes: [
                  {
                    path: "/mysupersecretproject",
                    label: "My Super Secret Project",
                    type: 'dir',
                    routes: [
                      {
                        path: "/mysupersecretfile",
                        label: "My Super Secret File",
                        type: 'file'
                      }
                    ]
                  },
                ]
              }
            ]
          }
        ]
      },
    ]
  }
];
