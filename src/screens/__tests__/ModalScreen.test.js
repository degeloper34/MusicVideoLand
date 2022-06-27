import renderer from "react-test-renderer";
import React from "react";
import ModalScreen from "../ModalScreen";
import {Provider} from "react-redux";
import {store} from "../../store";

describe("ModalScreen Tests", () => {
  test("ModalScreen | Render without issues", () => {
    const screen = renderer
      .create(
        <Provider store={store}>
          <ModalScreen />
        </Provider>
      )
      .toJSON();

    expect(screen).toMatchSnapshot();
  });
});
