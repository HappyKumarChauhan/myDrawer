import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ThemeContext from '../theme/ThemeContext';

const PropertyDetailsScreen = ({ navigation }) => {
  const { colors } = useContext(ThemeContext)
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
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.iconButton, { backgroundColor: colors.secondaryBg }]}>
          <Icon name="keyboard-arrow-left" size={24} color={colors.color} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.color }]}>Property Details</Text>
        <TouchableOpacity style={[styles.iconButton, { backgroundColor: colors.secondaryBg }]}
          onPress={() => navigation.navigate('Notifications')}>
          <Icon name="notifications-none" size={24} color={colors.color} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Form Fields */}
        <Text style={[[styles.label, { color: colors.color }], { color: colors.color }]}>Fill the Details</Text>
        <TextInput style={[styles.input, { color: colors.color, backgroundColor: colors.secondaryBg }]} placeholder="Property Name" placeholderTextColor={colors.secondaryColor} />
        <TextInput style={[styles.input, { color: colors.color, backgroundColor: colors.secondaryBg }]} placeholder="Property Address" placeholderTextColor={colors.secondaryColor} />
        <TouchableOpacity style={[styles.locationInput,{backgroundColor:colors.secondaryBg}]}>
          <Text style={[styles.placeholderText,{color: colors.secondaryColor}]}>Location</Text>
          <Text style={[styles.linkText,{color:colors.linkColor}]}>Visit Map</Text>
        </TouchableOpacity>

        {/* Features Section */}
        <Text style={[[styles.label, { color: colors.color }], { color: colors.color }]}>Features</Text>
        {['City', 'Built In', 'Price per sqft'].map((feature, index) => (
          <View key={index} style={styles.featureRow}>
            <Icon name="arrow-right" size={24} color={colors.color} style={styles.featureIcon} />
            <Text style={[styles.featureLabel,{color:colors.color}]}>{feature}</Text>
            <TextInput style={[styles.featureInput,{color:colors.color}]} placeholderTextColor={colors.secondaryColor} />
          </View>
        ))}

        {/* Facilities & Services */}
        <Text style={[styles.label, { color: colors.color }]}>Facilities & Services</Text>
        <TextInput style={[[styles.input, { color: colors.color, backgroundColor: colors.secondaryBg }], { height: 80 }]} placeholderTextColor={colors.secondaryColor} multiline />

        {/* Payment Options */}
        <Text style={[styles.label, { color: colors.color }]}>Payment Options</Text>
        <View style={styles.paymentOptions}>
          {Object.keys(paymentOptions).map((option) => (
            <TouchableOpacity key={option} style={styles.checkboxContainer} onPress={() => togglePaymentOption(option)}>
              <Icon name={paymentOptions[option]?'check-box':'check-box-outline-blank'} size={30} color={colors.color} />
              <Text style={[styles.checkboxText,{color:colors.color}]}>{option.replace(/([A-Z])/g, ' $1')}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Next Button */}
      <TouchableOpacity
       onPress={()=>{navigation.navigate('UploadScreen')}}
       style={[styles.nextButton,{backgroundColor:colors.buttonBg}]}>
        <Text></Text>
        <Text style={[styles.nextButtonText,{color:colors.buttonText}]}>Next</Text>
        <Icon name="chevron-right" size={24} color={colors.buttonText} />
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
  label: { fontSize: 16, fontWeight: 'bold', marginVertical: 5 },
  input: { borderWidth: 1, borderColor: '#000000', borderRadius: 8, padding: 12, marginVertical: 10 },
  locationInput: { flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#000000', borderRadius: 8, padding: 12, marginVertical: 10 },
  placeholderText: { color: '#777' },
  linkText: { color: '#007BFF' },
  featureRow: { flexDirection: 'row', alignItems: 'center', borderBottomColor: '#ccc', paddingVertical: 1 },
  featureIcon: { marginRight: 10 },
  featureLabel: { fontSize: 14, fontWeight: 'bold', width: 100 },
  featureInput: { flex: 1, fontSize: 14, color: '#000', borderBottomWidth: 1, borderBottomColor: '#ccc' },
  paymentOptions: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginVertical: 10 },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, width: '48%' },
  checkboxText: { fontSize: 14 },
  nextButton: { flexDirection: 'row', backgroundColor: 'black', padding: 12, borderRadius: 8, alignItems: 'center', justifyContent: 'space-between', margin: 20 },
  nextButtonText: { color: 'white', fontSize: 16, marginRight: 5 },
});

export default PropertyDetailsScreen;
