import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Keyboard,
  View,
} from 'react-native';
import styles from './style';
import CustomButton from '../../components/CustomButton/index';
import CustomInput from '../../components/CustomInput/index';
import axios from 'axios';
import {API_URL} from '../../constants/constant';
let checkEmail = false;
let checkName = false;
let checkPassword1 = false;
let checkPassword2 = false;
const SignupScreen = props => {
  const {navigation} = props;
  const [inputs, setInputs] = useState({
    Name: '',
    Email: '',
    Password: '',
  });
  const [errors, setErrors] = useState({});
  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (
      !inputs.Email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
    ) {
      handleError('Please input a valid email', 'Email');
      isValid = false;
    } else {
      checkEmail = true;
    }

    if (!inputs.Password) {
      handleError('Please input password', 'Password');
      isValid = false;
    } else {
      if (inputs.Password.length < 8) {
        handleError('Min password length of 8', 'Password');
        isValid = false;
      } else {
        checkPassword1 = true;
        checkPassword2 = true;
      }
    }
  };
  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  const handleSubmitForm = async () => {
    try {
      const response = await axios.post(
        API_URL + '/users',
        {
          username: inputs.Name,
          email: inputs.Email,
          password: inputs.Password,
        },
        {headers: {'Content-Type': 'application/json'}},
      );

      // Alert.alert('Login successfully');
      navigation.navigate('New');
    } catch (error) {
      console.log(error);
      Alert.alert('Failure');
    }
  };

  const handleForgetPasswordClick = async () => {
    try {
      if (inputs.Email === '') {
        throw {code: 'empty-email'};
      }
      // await auth().sendPasswordResetEmail(inputs.Email);
      Alert.alert(
        'Reset password email sent to ' + inputs.Email,
        'Please check your email',
      );
    } catch (error) {
      switch (error.code) {
        case 'empty-email':
          Alert.alert('Please fill email address above');
          break;
        case 'auth/user-not-found':
          Alert.alert('Email does not exist');
          break;
        case 'auth/invalid-email':
          Alert.alert('Invalid email');
          break;
        case 'auth/too-many-requests':
          Alert.alert('Too many request, try again later');
          break;
        default:
          break;
      }
    }
  };

  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.container}
        source={require('../../assets/images/background.png')}>
        <Text style={styles.nameScreen}>SIGN UP</Text>
        <View style={styles.input}>
          <CustomInput
            label="Name"
            onChangeText={text => handleOnchange(text, 'Name')}
            error={errors.Name}
            onFocus={() => handleError(null, 'Name')}
          />
          <CustomInput
            label="Email"
            onChangeText={text => handleOnchange(text, 'Email')}
            error={errors.Email}
            onFocus={() => handleError(null, 'Email')}
          />
          <CustomInput
            label="Password"
            onChangeText={text => handleOnchange(text, 'Password')}
            error={errors.Password}
            onFocus={() => handleError(null, 'Password')}
          />

          <CustomButton
            label="Sign up"
            onclick={
              !validate.isValid ? handleSubmitForm : Alert.alert('Failure')
            }
          />

          <TouchableOpacity
            style={styles.ButtonLogin}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={{color: '#FFF'}}>Log in</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default SignupScreen;
