// rnfe

import {
  View,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
  Image,
  ToastAndroid,
  Platform,
  AlertIOS,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "firebase/compat/app";
import { firebaseConfig } from "../config";
import { useNavigation } from "@react-navigation/native";
import Minco from "./Minco.png";
import { getAuth, signOut } from "firebase/auth";

const LoginScreen = () => {
  const auth = getAuth();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);
  const navigation = useNavigation();

  const navigateTOOTP = () => {
    navigation.replace("OTP", {
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
      })
      .catch((err) => {
        console.log("Verification Error:", err, "jaiman", err.message);
        switch (err.code) {
          case "auth/invalid-phone-number":
            alert("Invalid Phone Number !");
            break;
          case "auth/missing-phone-number":
            alert("Missing Phone Number !");
            break;
          case "auth/quota-exceeded":
            alert("Quota Exceeded !");
            break;
          case "auth/user-disabled":
            alert("User Disabled !");
            break;
          case "auth/operation-not-allowed":
            alert("Something went Wrong please try Again !");
            break;
          case "auth/too-many-requests":
            alert("Too many requests ! Please try again later");
            break;
          default:
            alert("Something went wrong ! Please try again later");
            break;
        }
      });

    setPhoneNumber("");
  };

  console.log("VErify id:", verificationId);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
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
        <Image source={Minco} style={styles.imageMin} />
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
          <TouchableOpacity onPress={handleSignOut} style={styles.button}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View> */}
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
  imageMin: {
    marginTop: "-20%",
    width: "100%",
    height: "50%",
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
