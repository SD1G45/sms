function getRootUrl() {
  let rootUrl;
  if (process.env.NODE_ENV === "development") {
    rootUrl = "http://localhost:3001/";
  } else if (process.env.NODE_ENV === "test") {
    rootUrl = "http://smsmp-develop.herokuapp.com/";
  } else {
    rootUrl = "https://trism.app/";
  }
  return rootUrl;
}
export default getRootUrl;
