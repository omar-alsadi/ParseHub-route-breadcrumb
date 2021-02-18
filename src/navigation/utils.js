
export const combinePaths = (parent, child) =>
  `${parent.replace(/\/$/, "")}/${child.replace(/^\//, "")}`;

/* Recursively build paths for each navigation item */

export const buildPaths = (routes, parentPath = "") =>
  routes.map(route => {
    const path = combinePaths(parentPath, route.path);

    return {
      ...route,
      path,
      ...(route.routes && { routes: buildPaths(route.routes, path) })
    };
  });


/* Recursively provide parent reference for each navigation item */

export const setupParents = (routes, parentRoute = null) =>
  routes.map(route => {
    const withParent = {
      ...route,
      ...(parentRoute && { parent: parentRoute })
    };

    return {
      ...withParent,
      ...(withParent.routes && {
        routes: setupParents(withParent.routes, withParent)
      })
    };
  });


/* Convert navigation tree into flat array */

export const flattenRoutes = routes =>
  routes
    .map(route => [route.routes ? flattenRoutes(route.routes) : [], route])
    .flat(Infinity);

/* Combine all the above functions together */
export const generateAppRoutes = routes => {
  return flattenRoutes(setupParents(buildPaths(routes)));
};

/* Provides path from root to the element */
export const pathTo = route => {
  if (!route.parent) {
    return [route];
  }

  return [...pathTo(route.parent), route];
};
