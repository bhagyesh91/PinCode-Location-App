import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PinCodeLocationApp = () => {
  const [pincode, setPincode] = useState('');
  const [locationInfo, setLocationInfo] = useState(null);

  const handlePincodeChange = (text) => {
    setPincode(text);
  };

  const fetchLocation = () => {
    if (!pincode || isNaN(pincode) || pincode.length !== 6) {
      alert('Please enter a valid 6-digit PIN code.');
      return;
    }

    fetch(`https://api.postalpincode.in/pincode/${pincode}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data[0].Status === 'Success') {
          const locationData = data[0].PostOffice[0];
          setLocationInfo(locationData);
        } else {
          setLocationInfo(null);
          alert('No data found for the provided PIN code.');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message);
        alert('Error fetching data. Please try again later.');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>PinCode Location App</Text>
      <TextInput
        style={styles.input}
        value={pincode}
        onChangeText={handlePincodeChange}
        placeholder="Enter PIN code"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={fetchLocation}>
        <Text style={styles.buttonText}>Get Location Info</Text>
      </TouchableOpacity>

      {locationInfo && (
        <View style={styles.locationContainer}>
          <Text>
            <Text style={styles.label}>Name:</Text> {locationInfo.Name}
          </Text>
          <Text>
            <Text style={styles.label}>District:</Text> {locationInfo.District}
          </Text>
          <Text>
            <Text style={styles.label}>State:</Text> {locationInfo.State}
          </Text>
          <Text>
            <Text style={styles.label}>Country:</Text> {locationInfo.Country}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  locationContainer: {
    marginTop: 20,
  },
  label: {
    fontWeight: 'bold',
  },
});

export default PinCodeLocationApp;