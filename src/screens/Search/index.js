import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import {API_URL} from '../../constants/constant';
import styles from './style';
import {IMG_Icon} from '../.././assets/images/index.js';
import {useNavigation} from '@react-navigation/native';
import MovieHome from '../../components/Cards/MovieHome';
const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get(API_URL + '/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.log('Error fetching movies:', error);
      });
  }, []);
  const filteredMovies = movies.filter(movies => {
    return movies.movieTitle.toLowerCase().includes(searchQuery.toLowerCase());
  });
  const searchMovies = query => {
    // Gọi API tìm kiếm ở đây và cập nhật kết quả tìm kiếm
    setSearchResults(filteredMovies);
  };

  const handleSearch = text => {
    setSearchQuery(text);
    searchMovies(text);
  };
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Description', {movie: item})}>
      <MovieHome movie={item} />
      {/* onPress={() => alert((item))}> */}
    </TouchableOpacity>
  );
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.search}>
          <TextInput
            placeholder="Search"
            style={styles.search}
            onChangeText={handleSearch}
            value={searchQuery}
            hitSlop={{top: 20, bottom: 20, left: 100, right: 50}}
          />
        </View>
        <Image source={IMG_Icon} style={styles.image} />
      </View>
      <ScrollView horizontal={true} style={{flex: 1, width: '80%'}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <FlatList
            data={searchResults}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={item => item.movieId}
            contentContainerStyle={{alignItems: 'center'}}
          />
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default SearchScreen;
