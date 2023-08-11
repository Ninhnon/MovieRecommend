import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  Text,
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
import {saveUserLoginInfo} from '../../constants/AsyncStorage';
import MovieContext from '../../data/MovieContext';
let checkEmail = false;
let checkName = false;
let checkPassword1 = false;
let checkPassword2 = false;
const LoginScreen = props => {
  const {navigation} = props;
  const {updateMovieList} = useContext(MovieContext);
  const [inputs, setInputs] = useState({
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
  const predictOldUser = async userId => {
    try {
      const response = await axios.post(
        API_URL + '/predict',
        {
          userId: userId,
        },
        {headers: {'Content-Type': 'application/json'}},
      );
      updateMovieList(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmitForm = async () => {
    try {
      const response = await axios.get(API_URL + '/users');
      const userList = response.data;

      const user = userList.find(
        user =>
          user.email === inputs.Email && user.password === inputs.Password,
      );

      if (user) {
        // Successful login
        await saveUserLoginInfo(
          user.email,
          user.password,
          user.userId,
          user.username,
        );

        await predictOldUser(Number(user.userId));
        Alert.alert('Login Success');
        navigation.navigate('MyTab');
      } else {
        // Failed login
        handleError('Invalid username or password', 'Password');
      }
    } catch (error) {
      console.error('Error fetching user list:', error);
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
        <Text style={styles.nameScreen}>LOGIN</Text>
        <View style={styles.input}>
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
            label="Login"
            onclick={
              !validate.isValid ? handleSubmitForm : Alert.alert('Failure')
            }
          />
          <TouchableOpacity
            style={styles.textForgotPass}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.textSignup}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default LoginScreen;
