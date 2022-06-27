import renderer from "react-test-renderer";
import {render, fireEvent, waitFor} from "@testing-library/react-native";
import React from "react";
import SearchScreen from "../SearchScreen";
import {Provider} from "react-redux";
import {store} from "../../store";

describe("SearchScreen Tests", () => {
  test("SearchScreen | Render without issues", () => {
    const screen = renderer
      .create(
        <Provider store={store}>
          <SearchScreen />
        </Provider>
      )
      .toJSON();

    expect(screen).toMatchSnapshot();
  });

  test("SearchScreen | Navigate to ModalScreen without issues", async () => {
    const navigate = jest.fn();

    const {getByTestId} = render(
      <Provider store={store}>
        <SearchScreen navigation={{navigate}} />
      </Provider>
    );

    const toClick = await waitFor(() => getByTestId("btnFilter"));

    await fireEvent(toClick, "press");

    expect(navigate).toHaveBeenCalledWith("Modal");
  });
});
