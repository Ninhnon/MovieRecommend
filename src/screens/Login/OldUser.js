import React, {useState, useContext, useEffect} from 'react';
import {
  TouchableOpacity,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';
import MovieContext from '../../data/MovieContext';
import axios from 'axios';
import {API_URL} from '../../constants/constant';
import {getUserLoginInfo} from '../../constants/AsyncStorage';

const OldUser = ({navigation}) => {
  const [text, setText] = useState('');
  const {updateMovieList} = useContext(MovieContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUserLoginInfo();
      setUser(userData);
    };

    fetchUser();
  }, []);

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

  const handleInputChange = value => {
    setText(value);
  };

  const handleSubmit = async () => {
    try {
      console.log(text);
      await predictOldUser(Number(user.userId));
      navigation.navigate('MyTab');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* <TextInput
        placeholder="Put your id"
        placeholderTextColor={CUSTOM_COLOR.Red}
        value={text}
        textAlign="center"
        onChangeText={handleInputChange}
      /> */}
      {user ? (
        <Text>Welcome, {user.userId}</Text>
      ) : (
        <Text>Loading user information...</Text>
      )}
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OldUser;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
