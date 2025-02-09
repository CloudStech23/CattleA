import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

function LoginPage({ navigation }) {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpVisible, setOtpVisible] = useState(false);
  // const [otpG, setOtpG] = useState("");
  // let storeOTP = ''

  const handleGetOtp = () => {
    if (mobile.length === 10) {
      // setOtpVisible(true);
      navigation.navigate("HomeTabs");
    } else {
      alert("Please enter a valid 10-digit mobile number");
    }
    // const randomCode =
    //   Math.floor(Math.random() * 10).toString() +
    //   Math.floor(Math.random() * 10).toString() +
    //   Math.floor(Math.random() * 10).toString() +
    //   Math.floor(Math.random() * 10).toString();

    // storeOTP = randomCode;
    // setOtpG(randomCode);
  };
  // const handleVerify = () => {
  //   if (otp == storeOTP) {
  //     navigation.navigate("Registration");
  //   } else {
  //     alert("Invalid OTP");
  //   }
  // };

  return (
    <View style={styles.container}>
      {/* Curved Header Section */}
      <View style={styles.curvedContainer}>
        <View style={styles.curvedWrapper}>
          {/* <Ionicons name=" " size={32} color="white" /> */}
          <Text style={styles.headerText}>Welcome to My App</Text>
          {/* <Text style={styles.headerText}>{otpG}</Text> */}
        </View>
      </View>

      {/* Login Form */}
      <View style={styles.formContainer}>
        <Text style={styles.subText}>
          Continue with any 10 digit number and Get OTP to enter
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Mobile Number"
          placeholderTextColor="gray"
          keyboardType="numeric"
          maxLength={10}
          value={mobile}
          onChangeText={setMobile}
        />

        {!otpVisible && (
          <TouchableOpacity style={styles.button} onPress={handleGetOtp}>
            <Text style={styles.buttonText}>Get OTP</Text>
          </TouchableOpacity>
        )}

        {otpVisible && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Enter OTP"
              placeholderTextColor="gray"
              keyboardType="numeric"
              maxLength={6}
              value={otp}
              onChangeText={setOtp}
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleVerify}>
                <Text style={styles.buttonText}>Verify OTP</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
                <Text style={styles.buttonText}>Regenerate OTP</Text>
              </TouchableOpacity>
            </View>
          </>
        )}

        <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
          <Text style={styles.newUserText}>New User? Register here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  curvedContainer: {
    width: "100%",
    height: "35%", // Covers 30-40% of the screen
    backgroundColor: "transparent",
    position: "relative",
    overflow: "hidden",
  },
  curvedWrapper: {
    width: "120%",
    height: "100%",
    backgroundColor: "#4F46E5",
    position: "absolute",
    top: -40,
    left: "-10%",
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginTop: 12,
  },
  subText: {
    fontSize: 15,
    color: "black",
    marginBottom: 15,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "black",
    marginBottom: 15,
  },
  button: {
    width: "100%",
    backgroundColor: "#4F46E5",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  secondaryButton: {
    backgroundColor: "#6B7280",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "100%",
  },
  newUserText: {
    color: "#4F46E5",
    fontSize: 16,
    marginTop: 20,
    fontWeight: "bold",
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default LoginPage;
