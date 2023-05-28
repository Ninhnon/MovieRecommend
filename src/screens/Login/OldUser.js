import React, {useState, useContext} from 'react';
import {
  TouchableOpacity,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';
import MovieContext from '../../data/MovieContext';
import axios from 'axios';
import CUSTOM_COLOR from '../../constants/colors';

const OldUser = ({navigation}) => {
  const [text, setText] = useState('');
  const {updateMovieList} = useContext(MovieContext);

  const predictOldUser = async userId => {
    try {
      const response = await axios.post(
        'https://web-movie-api.azurewebsites.net/predict',
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
      await predictOldUser(Number(text));
      navigation.navigate('MyTab');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Put your id"
        placeholderTextColor={CUSTOM_COLOR.Red}
        value={text}
        textAlign="center"
        onChangeText={handleInputChange}
      />
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
