import React from "react";
import { create } from "react-test-renderer";

import ListItem from "../ListItem";

describe("<ListItem />", () => {
  const props = {
    title: "France",
    onPress: () => {
      // do nothing.
    },
  };
  const wrapper = create(<ListItem {...props} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });

});