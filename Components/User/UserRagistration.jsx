import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";


const RegistrationScreen = () => {
  const [userType, setUserType] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const navigation = useNavigation();

  const handleGetOtp = () => {
    if (mobileNumber.length === 10) {
      Alert.alert("OTP Sent", "An OTP has been sent to your mobile number.");
    } else {
      Alert.alert("Error", "Please enter a valid 10-digit mobile number.");
    }
  };

  const handleVerify = () => {
    if (otp.join("").length === 6) {
      Alert.alert("OTP Verified", "Your OTP has been verified!");
    } else {
      Alert.alert("Error", "Please enter the complete OTP.");
    }
  };

  // const handleNext = () => {
  //   navigation.navigate("UserRegiAadhar");
  //   // Alert.alert("Next Step", "Proceeding to the next step!");
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register User</Text>

      <Text style={styles.label}>Register As:</Text>
      <View style={styles.userTypeContainer}>
        <TouchableOpacity
          style={[
            styles.userTypeButton,
            userType === "Owner" && styles.selectedUserType,
          ]}
          onPress={() => setUserType("Owner")}
        >
          <Ionicons
            name="person" // Icon for "Owner"
            size={30}
            color={userType === "Owner" ? "#fff" : "#000"}
          />
          <Text
            style={[
              styles.userTypeText,
              userType === "Owner" && { color: "#fff" },
            ]}
          >
            Owner
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.userTypeButton,
            userType === "Doctor" && styles.selectedUserType,
          ]}
          onPress={() => setUserType("Doctor")}
        >
          <FontAwesome name="user-md" size={30} color={userType === 'Doctor' ? '#fff' : '#000'} />
          <Text
            style={[
              styles.userTypeText,
              userType === "Doctor" && { color: "#fff" },
            ]}
          >
            Doctor
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.userTypeButton,
            userType === "Agent" && styles.selectedUserType,
          ]}
          onPress={() => setUserType("Agent")}
        >
          <FontAwesome name="user-plus" size={30} color={userType === 'Agent' ? '#fff' : '#000'} />
          <Text
            style={[
              styles.userTypeText,
              userType === "Agent" && { color: "#fff" },
            ]}
          >
            Agent
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Enter Mobile Number:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Mobile Number"
        keyboardType="number-pad"
        maxLength={10}
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />
      <TouchableOpacity style={styles.button} onPress={handleGetOtp}>
        <Text style={styles.buttonText}>Get OTP</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Enter received OTP:</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => {
              const newOtp = [...otp];
              newOtp[index] = text;
              setOtp(newOtp);
            }}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.nextButton} onPress={()=> navigation.navigate('UserRegiAadhar')}>
        <Text style={styles.nextButtonText}>Next →</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  userTypeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  userTypeButton: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginHorizontal: 5,
    backgroundColor: "#fff",
  },
  selectedUserType: {
    backgroundColor: "#4b39ef",
    borderColor: "#4b39ef",
  },
  userTypeText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#4b39ef",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
    alignSelf:'center',
    width:'55%'
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#fff",
  },
  nextButton: {
    backgroundColor: "#4b39ef",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 60,
    width:'40%',
    alignSelf:'flex-end'
    
  },
  nextButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default RegistrationScreen;
