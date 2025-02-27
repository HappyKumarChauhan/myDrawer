import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import PrimaryButton from '../PrimaryButton';
import ThemeContext from '../../theme/ThemeContext';
import axios from '../../config/axios';
import LoadingModal from '../LoadingModal'; // Import LoadingModal
import { UserContext } from '../../context/UserContext';

const Main = ({ navigation }) => {
  const { colors } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const {login}=useContext(UserContext)

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    setLoading(true); // Show loading modal

    try {
      const response = await axios.post('/user/login', formData);
        const token=response.data.token;
        const userData=response.data.user;
        await login(userData,token)
        Alert.alert('Success', 'Logged in successfully!');
        navigation.navigate('Dashboard');
        console.log(response)
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Invalid credentials, please try again.');
    } finally {
      setLoading(false); // Hide loading modal
    }
  };

  return (
    <View style={[styles.main, { backgroundColor: colors.background }]}>

      <Text style={[styles.title, { color: colors.color }]}>Log In</Text>
      
      <View style={[styles.inputContainer, { backgroundColor: colors.secondaryBg }]}>
        <Icon name="mail" size={30} color={colors.color} />
        <TextInput
          style={[styles.input, { color: colors.color }]}
          placeholderTextColor={colors.secondaryColor}
          placeholder="Email"
          value={formData.email}
          onChangeText={(text) => handleInputChange('email', text)}
        />
      </View>

      <View style={[styles.inputContainer, { backgroundColor: colors.secondaryBg }]}>
        <Icon name="lock" size={30} color={colors.color} />
        <TextInput
          style={[styles.input, { color: colors.color }]}
          placeholderTextColor={colors.secondaryColor}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
          value={formData.password}
          onChangeText={(text) => handleInputChange('password', text)}
        />
        <TouchableOpacity
          style={styles.eyeButton}
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <Icon
            name={passwordVisible ? 'visibility' : 'visibility-off'}
            size={24}
            color={colors.color}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.rememberForgotContainer}>
        <TouchableOpacity
          style={styles.rememberButton}
          onPress={() => handleInputChange('rememberMe', !formData.rememberMe)}
        >
          <Icon
            name={formData.rememberMe ? 'check-box' : 'check-box-outline-blank'}
            size={24}
            color={colors.color}
          />
          <Text style={{ color: colors.color }}>Remember Me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={[styles.forgotPasswordText, { color: colors.linkColor }]}>
            Forgot Password
          </Text>
        </TouchableOpacity>
      </View>

      <PrimaryButton title="Log In" handler={handleLogin} />

      <View style={styles.orContainer}>
        <View style={styles.orLine}></View>
        <Text style={[styles.socialSignInText, { color: colors.secondaryColor }]}>
          Sign In With
        </Text>
        <View style={styles.orLine}></View>
      </View>

      <View style={styles.socialIconsContainer}>
        <TouchableOpacity style={styles.socialIconButton}>
          <Icon name="facebook" size={30} color={colors.iconColor} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIconButton}>
          <FAIcon name="google" size={30} color={colors.iconColor} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIconButton}>
          <Icon name="apple" size={30} color={colors.iconColor} />
        </TouchableOpacity>
      </View>

      <View style={styles.signUpContainer}>
        <Text style={[styles.signUpText, { color: colors.secondaryColor }]}>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={[styles.signUpButtonText, { color: colors.linkColor }]}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <LoadingModal visible={loading} message='Logging In...' />
    </View>
  );
};

const styles = StyleSheet.create({
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
    width: '100%',
    marginVertical: 10,
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#000000',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: 'black',
  },
  eyeButton: {
    padding: 5,
    opacity: 0.5,
  },
  rememberForgotContainer: {
    width: '100%',
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rememberButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  forgotPasswordText: {
    textDecorationLine: 'underline',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 15,
  },
  orLine: {
    height: 1,
    backgroundColor: '#B8B8B8',
    width: '30%',
  },
  socialSignInText: {
    fontSize: 14,
    fontWeight: '600',
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
  },
  signUpButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0066AD',
  },
});

export default Main;
