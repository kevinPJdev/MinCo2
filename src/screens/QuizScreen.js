import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
} from "react-native";
import React from "react";
import { Colors } from "../style/colors";
import QuizButtonScreen from "../components/Button/QuizButtonScreen";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  pageHeading: {
    color: "#FFF",
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: Colors.green20,
    flexDirection: "column",
    paddingTop: 20,
  },
  scrollContainer: {
    padding: 10,
  },
  question: {
    padding: 10,
    borderColor: Colors.green10,
    borderWidth: 3,
    borderRadius: 10,
    margin: 5,
  },
  questionTitle: {
    marginBottom: 6,
  },
  optionContainer: {
    flex: 1,
    borderColor: Colors.green10,
    borderWidth: 3,
    backgroundColor: Colors.green40,
    borderRadius: 10,
    paddingVertical: 5,
    flexDirection: "column",
    paddingHorizontal: 10,
    marginBottom: 10,
    alignItems: "baseline",
  },
  option: {
    color: "#FFF",
  },
  selectedOption: {
    color: "#FFF",
    textAlign: "center",
    opacity: 0.5,
  },
});

/**
 * Screen for showing Quiz to user
 * as per the data stored locally
 */
const QuizScreen = ({ data }) => {
  const [selectedOptions, setSelectedOptions] = React.useState({});
  /**
   * Don't allow submit until all questions's answers are selected
   */
  const isSubmitDisabled =
    Object.keys(selectedOptions).length != (data || []).length;
  /**
   * Hook to manage navigation
   */
  const navigation = useNavigation();

  /**
   * Responsible for updating state
   * as per option selected
   */
  const selectAnswer = (questionIndex, answer) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionIndex]: answer,
    });
  };

  /**
   * Renders each question
   */
  const questionMapper = ({ item, index }) => {
    const [question, questionIndex] = [item, index];
    return (
      <View style={styles.question}>
        <Text style={styles.questionTitle}>{question.text || ""} </Text>
        {(question.options || []).map((option) => {
          const isOptionSelected =
            selectedOptions[questionIndex] == option.value;
          return (
            <View key={option.label}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => selectAnswer(questionIndex, option.value)}
                style={styles.optionContainer}
              >
                <Text
                  style={
                    isOptionSelected ? styles.selectedOption : styles.option
                  }
                >
                  {option.label}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  };

  const showQuizResult = () => {
    /**
     * Calculate Total emission from the selected options
     */
    const totalEmission = Object.keys(selectedOptions)
      .map((questionIndex) => selectedOptions[questionIndex])
      .reduce((total, current) => (total += current), 0);
    /**
     * Show result in a Dialog
     * and redirect to Emission screen
     */
    Alert.alert("Quiz Result", `Your Co2 emission is ${totalEmission} kgCO2`, [
      {
        text: "Thanks!",
        onPress: () => navigation.navigate("Budget"),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageHeading}>WELCOME TO QUIZ SCREEN</Text>

      <FlatList
        data={data || []}
        renderItem={questionMapper}
        style={styles.scrollContainer}
      />
      <QuizButtonScreen
        title="Submit Quiz"
        onPress={showQuizResult}
        disabled={isSubmitDisabled}
      />
    </View>
  );
};

export default QuizScreen;
