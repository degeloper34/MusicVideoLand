import renderer from "react-test-renderer";
import React from "react";
import SearchScreen from "../SearchScreen";
import {Provider} from "react-redux";
import {store} from "../../store";

describe("SearchScreen Tests", () => {
  it("SearchScreen | Render without issues", () => {
    const screen = renderer
      .create(
        <Provider store={store}>
          <SearchScreen />
        </Provider>
      )
      .toJSON();

    expect(screen).toMatchSnapshot();
  });
});
