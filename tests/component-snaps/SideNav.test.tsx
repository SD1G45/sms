import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import SideNav from "../../components/SideNav";

const items: string[] = ["Analytics", "Create New", "FAQ"];
const routes: string[] = ["/test", "/test", "/test"];

jest.mock("next/router", () => ({
  useRouter() {
      return {
          route: "/",
          pathname: "",
          query: "",
          asPath: "",
      };
  },
}));

describe("<SideNav/>", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SideNav items={items} routes={routes} heading={"Sample"}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});