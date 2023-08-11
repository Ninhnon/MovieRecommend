import AsyncStorage from '@react-native-async-storage/async-storage';

const saveUserLoginInfo = async (email, password, userId, username) => {
  try {
    await AsyncStorage.setItem('userEmail', email);
    await AsyncStorage.setItem('password', password);
    await AsyncStorage.setItem('userId', userId.toString());
    await AsyncStorage.setItem('username', username);
  } catch (error) {
    console.error('Error saving user login info:', error);
  }
};

const getUserLoginInfo = async () => {
  try {
    const email = await AsyncStorage.getItem('userEmail');
    const password = await AsyncStorage.getItem('password');
    const userId = await AsyncStorage.getItem('userId');
    const username = await AsyncStorage.getItem('username');
    return {email, password, userId, username};
  } catch (error) {
    console.error('Error retrieving user login info:', error);
  }
};
export {saveUserLoginInfo, getUserLoginInfo};
