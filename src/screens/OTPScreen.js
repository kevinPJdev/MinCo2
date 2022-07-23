import React, { useRef, useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "firebase/compat/app";
import { firebaseConfig } from "../config";
import { useNavigation } from "@react-navigation/native";

const OTPScreen = (props) => {
  console.log("OTPScreen props:", props, props.route.params.verificationId);
  const [code, setCode] = useState("");
  const navigation = useNavigation();

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      props.route.params.verificationId,
      code
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((res) => {
        console.log("OTP Response :", res);
        setCode("");
        navigation.navigate("budget", res);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Confirm Code"
          onChangeText={setCode}
          keyboardType="number-pad"
          autoComplete="tel"
          style={styles.input}
        ></TextInput>
        <TouchableOpacity style={styles.otpButton} onPress={confirmCode}>
          <Text style={styles.buttonText}>Submit OTP</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    width: "100%",
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 0,
  },
  phoneContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "right",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  otpButton: {
    backgroundColor: "#0782F9",
    width: "50%",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  textPhoneNon: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    color: "#0782F9",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "left",
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
  prefix: {
    paddingHorizontal: 10,
    fontWeight: "bold",
    color: "black",
  },
});

export default OTPScreen;
