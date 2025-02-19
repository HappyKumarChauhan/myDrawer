import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PrimaryButton from '../components/PrimaryButton';

const LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

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
        <View style={[styles.main]}>
          <Text style={[styles.title]}>Log In</Text>
          <View style={[styles.inputContainer]}>
            <Icon name="mail" size={30} color='black' />
            <TextInput
              style={[styles.input]}
              placeholderTextColor="#606060"
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={[styles.inputContainer]}>
            <Icon name="lock" size={30} color={'black'} />
            <TextInput
              style={[styles.input]}
              placeholder="Password"
              placeholderTextColor="#606060"
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.eyeButton} onPress={() => setPasswordVisible(!passwordVisible)}>
              <Icon name={passwordVisible ? "visibility" : "visibility-off"} size={24} color='black' />
            </TouchableOpacity>
          </View>

          <View style={{ width: '100%', padding: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              style={styles.rememberButton}
              onPress={() => { setRememberMe(!rememberMe) }}
            >
              <Icon name={rememberMe ? 'check-box' : 'check-box-outline-blank'} size={24} color={'black'} />
              <Text style={{ color: 'black' }}>Remember Me</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { navigation.navigate('PersonalDetails') }}
            >
              <Text style={[styles.forgotPasswordText, { color: 'blue' }]}>Forgot Password</Text>
            </TouchableOpacity>
          </View>

          {/* login button  */}
          <PrimaryButton title="Log In" handler={handleLogin}
         
          />

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 15 }}>
            <View style={{ height: 1, width: '30%' }}></View>
            <Text style={[styles.socialSignInText]}>Sign In With</Text>
            <View style={{ height: 1, width: '30%' }}></View>
          </View>
          <View style={styles.socialIconsContainer}>
            <TouchableOpacity style={styles.socialIconButton}>
              <Icon name="facebook" size={30} color={'black'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIconButton}>
              <Icon name="google" size={30} color={'black'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIconButton}>
              <Icon name="apple" size={30} color={'black'} />
            </TouchableOpacity>
          </View>
          <View style={styles.signUpContainer}>
            <Text style={[styles.signUpText]}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={[styles.signUpButtonText]}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  main: {
    backgroundColor: '#f3f3f3',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 20,
    paddingBottom: 50,
    paddingHorizontal: 35,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 27,
    paddingVertical: 5,
  },
  inputContainer: {
    backgroundColor: 'white',
    width: 310,
    marginVertical: 10,
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#B8B8B8',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: 'black',
  },
  eyeButton: {
    padding: 1,
    opacity: 0.5
  },
  rememberButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  forgotPasswordText: {
    textDecorationLine: 'underline'
  },
  socialSignInText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#606060',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 5,
  },
  socialIconButton: {
    padding: 10,
    borderColor: '#B8B8B8',
  },
  signUpContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    gap: 4,
  },
  signUpText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0066AD',
  },
  signUpButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default LogInScreen;