import renderer from "react-test-renderer";
import React from "react";
import {CustomText} from "../CustomText";
import Colors from "../../../constants/Colors";

describe("CustomText", () => {
  it("renders correctly with text", () => {
    const component = renderer
      .create(<CustomText text={"Hello, degeloper"} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it("renders correctly with text and regular-type", () => {
    const component = renderer
      .create(<CustomText text={"Hello, degeloper"} type={"regular"} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it("renders correctly with text and medium-type", () => {
    const component = renderer
      .create(<CustomText text={"Hello, degeloper"} type={"medium"} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it("renders correctly with text and bold-type", () => {
    const component = renderer
      .create(<CustomText text={"Hello, degeloper"} type={"bold"} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it("renders correctly with white text", () => {
    const component = renderer.create(
      <CustomText
        text={"Hello, degeloper"}
        type={"bold"}
        textColor={Colors.white}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
