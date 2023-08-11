import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MovieContext from '../../data/MovieContext';
import axios from 'axios';
import {API_URL} from '../../constants/constant';
const NewUser = ({navigation}) => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const {updateMovieList} = useContext(MovieContext);
  const toggleGenre = genre => {
    // Kiểm tra xem thể loại đã được chọn hay chưa
    const isSelected = selectedGenres.includes(genre);

    // Nếu thể loại đã được chọn, hãy loại bỏ nó khỏi danh sách
    if (isSelected) {
      setSelectedGenres(selectedGenres.filter(item => item !== genre));
    } else {
      // Nếu thể loại chưa được chọn, hãy thêm nó vào danh sách
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const renderGenreButton = genre => {
    // Kiểm tra xem thể loại có được chọn hay không
    const isSelected = selectedGenres.includes(genre);

    return (
      <TouchableOpacity
        key={genre}
        onPress={() => toggleGenre(genre)}
        style={{
          backgroundColor: isSelected ? 'green' : 'lightgray',
          padding: 10,
          borderRadius: 5,
          margin: 5,
        }}>
        <Text style={{color: isSelected ? 'white' : 'black'}}>{genre}</Text>
      </TouchableOpacity>
    );
  };

  const predictNewUser = async genres => {
    try {
      const response = await axios.post(
        API_URL + '/predict_new_user',
        {
          genres: genres,
        },
        {headers: {'Content-Type': 'application/json'}},
      );
      updateMovieList(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async () => {
    try {
      const formattedString = selectedGenres.join(',');
      await predictNewUser(formattedString);
      console.log(formattedString);
      navigation.navigate('MyTab');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 18, marginBottom: 10}}>
        Hãy Chọn ít nhất 1 thể loại phim yêu thích:
      </Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {renderGenreButton('Drama')}
        {renderGenreButton('Action')}
        {renderGenreButton('Adventure')}
        {renderGenreButton('Fantasy')}
        {renderGenreButton('Musical')}
        {renderGenreButton('Comedy')}
        {renderGenreButton('Crime')}
        {renderGenreButton('(no genres listed)')}
        {renderGenreButton('Film-Noir')}
        {renderGenreButton('Animation')}
        {renderGenreButton('Thriller')}
        {renderGenreButton('Western')}
        {renderGenreButton('War')}
        {renderGenreButton('Mystery')}
        {renderGenreButton('Horror')}
        {renderGenreButton('Children')}
        {renderGenreButton('Documentary')}
        {renderGenreButton('Romance')}
        {renderGenreButton('Sci-Fi')}
        {renderGenreButton('IMAX')}
      </View>
      <TouchableOpacity onPress={handleSubmit} style={{marginTop: 20}}>
        <Text style={{fontSize: 16, color: 'blue'}}>Hoàn tất</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewUser;
