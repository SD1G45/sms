import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import BusinessLogoEditor from "../../components/BusinessLogoEditor";
import Theme from "../../components/styles/Theme";
import "jest-canvas-mock";
import AvatarEditor from "react-avatar-editor";

jest.mock("react-avatar-editor");

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

describe("<BusinessLogoEditor/>", () => {
  it("renders the editor", () => {
    const tree = renderer.create(
      <Theme>
        <BusinessLogoEditor onClose={ () => {} }/>
      </Theme>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});