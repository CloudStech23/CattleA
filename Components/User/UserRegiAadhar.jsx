import React,{useState} from "react";
import { View,  StyleSheet, Text, TextInput, TouchableOpacity, } from "react-native"; // Import StyleSheet
// import { Checkbox } from "react-native-paper";
 

 

function UserRegiAadhar() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  return (
    <View style={styles.container}>
      {/* <Checkbox  onPress={() => alert("Checkbox Pressed")} />  */}
      <Text value="" style={styles.heading}>User connect to validate and get the details frm UIDAI</Text>

      <Text style={styles.label}>Enter Aadhar Number:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Mobile Number"
        keyboardType="number-pad"
        maxLength={10}
        // value={mobileNumber}
        // onChangeText={setMobileNumber}
      />
      <TouchableOpacity style={styles.button}  >
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
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => alert("Next Step is not available")}
      >
        <Text style={styles.nextButtonText}>Next →</Text>
      </TouchableOpacity>
    </View>
  );
}

export default UserRegiAadhar;

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  heading:{
    paddingVertical: 10,
    marginBottom: 25,

  },
  label: {
    fontSize: 16,
    marginBottom: 10,
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
    alignSelf: "center",
    width: "55%",
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
    width: "40%",
    alignSelf: "flex-end",
  },
  nextButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
