import renderer from "react-test-renderer";
import React from "react";
import HomeScreen from "../HomeScreen";
import {Provider} from "react-redux";
import {store} from "../../store";

describe("HomeScreen Tests", () => {
  test("HomeScreen | Render without issues", () => {
    const screen = renderer
      .create(
        <Provider store={store}>
          <HomeScreen />
        </Provider>
      )
      .toJSON();

    expect(screen).toMatchSnapshot();
  });
});
