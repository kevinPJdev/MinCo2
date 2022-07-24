import React from "react";
import renderer from "react-test-renderer";
import QuizScreen from "../QuizScreen";

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: () => {},
    }),
  };
});

const testData = [
  {
    text: "Testing.",
    options: [
      {
        value: 0.2604,
        label: "Testing",
      },
    ],
  },
];

describe("Render Quiz Screen", () => {
  it("With Null data", () => {
    const tree = renderer.create(<QuizScreen />).toJSON();
    expect(tree.children.length).toBe(3);
  });

  it("With Proper data", () => {
    const tree = renderer.create(<QuizScreen data={testData} />).toJSON();
    expect(tree.children.length).toBe(3);
  });

  it("Test snapshot", () => {
    const tree = renderer.create(<QuizScreen data={testData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
