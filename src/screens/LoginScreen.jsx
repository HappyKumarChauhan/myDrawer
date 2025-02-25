import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ThemeContext from '../theme/ThemeContext';
import Main from '../components/login/Main'

const LogInScreen = ({ navigation }) => {

  const handleLogin = async () => {
    // if (!email || !password) {
    //     Alert.alert('Error', 'Please fill in all fields.');
    //     return;
    // }
    // try {
    //     const response = await axios.post('/user/login', { email, password, rememberMe });
    //     if (response.status === 200) {
    //         Alert.alert('Success', 'Logged in successfully!');
    //         navigation.navigate('Dashboard');
    //     } else {
    //         Alert.alert('Error', 'Invalid credentials, please try again.');
    //     }
    // } catch (error) {
    //     Alert.alert('Error', 'Something went wrong. Please try again later.');
    //     console.error(error);
    // }
    navigation.navigate('PropertyDetails');
  };


  return (
    <ImageBackground
            source={{ uri: 'https://cdn.decoist.com/wp-content/uploads/2015/08/Upholstered-daybed-for-the-contemporary-home-office.jpg' }}
            style={styles.background}
        >
            <View style={styles.overlay}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', padding: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={{ backgroundColor: 'gray', borderRadius: 5, marginRight: 5 }}>
                        <Icon name='keyboard-double-arrow-right' size={30} color={'black'} />
                    </TouchableOpacity>
                </View>
                <Main navigation={navigation}/>
            </View>
        </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(12, 25, 34, 0.6)',
  },
});

export default LogInScreen;