import renderer from "react-test-renderer";
import React from "react";
import TabOneScreen from "../TabOneScreen";

describe("TabOneScreen Tests", () => {
  test("TabOneScreen | Render without issues", () => {
    const screen = renderer.create(<TabOneScreen />).toJSON();

    expect(screen).toMatchSnapshot();
  });
});
