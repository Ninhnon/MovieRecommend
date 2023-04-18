import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {initData} from '../../data/dataservice';
import {Movie} from '../../models/movie';
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
    const loadMovies = async () => {
      const data = await initData();
      const movieObjects = data.map(
        movieData =>
          new Movie(
            movieData.movieId,
            movieData.title,
            movieData.genres,
            movieData.image,
          ),
      );
      setMovies(movieObjects);
    };
    loadMovies();
  }, []);
  const filteredMovies = movies.filter(movies => {
    return movies.title.toLowerCase().includes(searchQuery.toLowerCase());
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
      <FlatList
        data={searchResults}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.movieId}
        contentContainerStyle={styles.list}
      />
    </ScrollView>
  );
};

export default SearchScreen;
