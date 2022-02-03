import { NextRouter } from "next/router";

export default function newRouteWithQueries(
  route: string,
  router: NextRouter
): string {
  let newRoute = route;
  let numQueriesAdded = 0;
  for (const key in router.query) {
    if (numQueriesAdded == 0) {
      newRoute += `?${key}=${router.query[key]}`;
      numQueriesAdded++;
    } else {
      newRoute += `&${key}=${router.query[key]}`;
    }
  }
  return newRoute;
}
