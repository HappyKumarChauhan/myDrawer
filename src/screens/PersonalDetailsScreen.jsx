import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PersonalDetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <Icon name="keyboard-arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Personal Details</Text>
        <TouchableOpacity style={styles.iconButton}
        onPress={() => navigation.navigate('Notifications')}>
          <Icon name="notifications-none" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Form Section */}
      <Text style={styles.label}>Fill the Details</Text>
      {["Your Name", "Your Email", "Contact Number", "Date of birth", "Address", "City", "Pincode"].map((placeholder, index) => (
        <TextInput key={index} style={styles.input} placeholder={placeholder} placeholderTextColor="#777" />
      ))}

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton}
      onPress={()=>{navigation.navigate('KYCDetails')}}
      >
        <Text></Text>
        <Text style={styles.nextButtonText}>Next</Text>
        <Icon name="chevron-right" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', paddingHorizontal: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },
  label: { fontSize: 16, fontWeight: 'bold', marginVertical: 15 },
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
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginVertical: 10,borderBottomWidth: 1, borderBottomColor: '#ccc', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 3, backgroundColor: '#f8f8f8', borderRadius: 8, elevation:5},
  nextButton: { flexDirection: 'row', backgroundColor: 'black', padding: 12, borderRadius: 8, alignItems: 'center', justifyContent: 'space-between' },
  nextButtonText: { color: 'white', fontSize: 16, marginRight: 5 },
});

export default PersonalDetailsScreen;
