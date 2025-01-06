import React from 'react';
import { View, Button, StyleSheet } from 'react-native'; // Import StyleSheet

function UserRegiAadhar() {
  return (
    <View style={styles.container}>
      <Button
        color="black" // Use color prop for Button
        onPress={() => alert('Aadhar registration currently not available')}
        title="Aadhar Registration" // Set the button title
      />
    </View>
  );
}

export default UserRegiAadhar;

const styles = StyleSheet.create({
  container: {
    padding: 10, // Add padding for better layout
  },
});
