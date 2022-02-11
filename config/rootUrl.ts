function getRootUrl() {
  let rootUrl;
  if (process.env.NODE_ENV === "development") {
    rootUrl = "http://localhost:3001/";
  } else if (process.env.NODE_ENV === "test") {
    rootUrl = "http://localhost:3001/";
  } else {
    rootUrl = "https://trism.co/";
  }
  return rootUrl;
}
export default getRootUrl;
