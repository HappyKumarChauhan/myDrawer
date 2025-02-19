import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PropertyDetailsScreen = ({ navigation }) => {
  const [paymentOptions, setPaymentOptions] = useState({
    UPI: false,
    CreditCard: false,
    Cash: false,
    PaperChecks: false,
    DebitCard: false,
  });

  const togglePaymentOption = (option) => {
    setPaymentOptions((prev) => ({ ...prev, [option]: !prev[option] }));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <Icon name="keyboard-arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Property Details</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="notifications-none" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Form Fields */}
        <Text style={styles.label}>Fill the Details</Text>
        <TextInput style={styles.input} placeholder="Property Name" placeholderTextColor="#777" />
        <TextInput style={styles.input} placeholder="Property Address" placeholderTextColor="#777" />
        <TouchableOpacity style={styles.locationInput}>
          <Text style={styles.placeholderText}>Location</Text>
          <Text style={styles.linkText}>Visit Map</Text>
        </TouchableOpacity>

        {/* Features Section */}
        <Text style={styles.label}>Features</Text>
        {['City', 'Built In', 'Price per sqft'].map((feature, index) => (
          <View key={index} style={styles.featureRow}>
            <Icon name="arrow-right" size={24} color="#000" style={styles.featureIcon} />
            <Text style={styles.featureLabel}>{feature}</Text>
            <TextInput style={styles.featureInput} placeholderTextColor="#777" />
          </View>
        ))}

        {/* Facilities & Services */}
        <Text style={styles.label}>Facilities & Services</Text>
        <TextInput style={[styles.input, { height: 80 }]} placeholderTextColor="#777" multiline />

        {/* Payment Options */}
        <Text style={styles.label}>Payment Options</Text>
        <View style={styles.paymentOptions}>
          {Object.keys(paymentOptions).map((option) => (
            <TouchableOpacity key={option} style={styles.checkboxContainer} onPress={() => togglePaymentOption(option)}>
              <View style={[styles.checkbox, paymentOptions[option] && styles.checked]} />
              <Text style={styles.checkboxText}>{option.replace(/([A-Z])/g, ' $1')}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Next Button */}
      <TouchableOpacity
       onPress={()=>{navigation.navigate('UploadScreen')}}
       style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
        <Icon name="chevron-right" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },
  iconButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: Platform.OS === 'ios' ? 40 : 2,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  content: { padding: 20 },
  label: { fontSize: 16, fontWeight: 'bold', marginVertical: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginVertical: 10 },
  locationInput: { flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginVertical: 10 },
  placeholderText: { color: '#777' },
  linkText: { color: '#007BFF' },
  featureRow: { flexDirection: 'row', alignItems: 'center', borderBottomColor: '#ccc', paddingVertical: 1 },
  featureIcon: { marginRight: 10 },
  featureLabel: { fontSize: 14, fontWeight: 'bold', width: 100 },
  featureInput: { flex: 1, fontSize: 14, color: '#000', borderBottomWidth: 1, borderBottomColor: '#ccc' },
  paymentOptions: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginVertical: 10 },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, width: '48%' },
  checkbox: { width: 20, height: 20, borderWidth: 1, borderColor: '#000', borderRadius: 4, marginRight: 8 },
  checked: { backgroundColor: 'black' },
  checkboxText: { fontSize: 14 },
  nextButton: { flexDirection: 'row', backgroundColor: 'black', padding: 12, borderRadius: 8, alignItems: 'center', justifyContent: 'center', margin: 20 },
  nextButtonText: { color: 'white', fontSize: 16, marginRight: 5 },
});

export default PropertyDetailsScreen;
