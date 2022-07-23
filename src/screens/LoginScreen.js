// rnfe

import {
  View,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useRef, useState } from "react";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "firebase/compat/app";
import { firebaseConfig } from "../config";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);
  const navigation = useNavigation();

  const navigateTOOTP = () => {
    navigation.navigate("OTP", {
      phoneNumber: "dawsac",
    });
  };

  const sendVerfication = () => {
    console.log("Phone Number for verification:" + phoneNumber);
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current) // verifying
      .then((res) => {
        setVerificationId;
        navigation.navigate("OTP", {
          verificationId: res,
        });
      });
    setPhoneNumber("");
  };

  console.log("VErify id:", verificationId);

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then(() => {
        setCode("");
      })
      .catch((err) => {
        alert(err);
      });
    Alert.alert("Login Successful");
  };

  const callSetPhoneNumber = (number) => {
    console.log("Set phone :" + number);
    setPhoneNumber("+1" + number);
    console.log("Phone Number is :" + phoneNumber);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <FirebaseRecaptchaVerifierModal // Initialize Firebase Recaptcha modal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
        />
        <Text style={styles.textPhoneNon}>Enter you Phone Number</Text>
        <View style={styles.phoneContainer}>
          <Text style={styles.prefix}>+1</Text>
          <TextInput
            placeholder="Phone Number"
            onChangeText={(e) => {
              callSetPhoneNumber(e);
            }}
            keyboardType="phone-pad"
            autoComplete="tel"
            maxLength={10} //setting limit of input
            style={styles.input}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={sendVerfication} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={navigateTOOTP} style={styles.button}>
            <Text style={styles.buttonText}>Navigate</Text>
          </TouchableOpacity>
        </View> */}
        {/* <TextInput
          placeholder="Confirm Code"
          onChangeText={setCode}
          keyboardType="number-pad"
          autoComplete="tel"
        ></TextInput>
        <TouchableOpacity onPress={confirmCode}>
          <Text>Submit OTP</Text>
        </TouchableOpacity> */}
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

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
    height: 50,
    width: "80%",
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
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
