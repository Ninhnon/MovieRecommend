import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './style';
import HeaderWithBack from '../../components/Headers/HeaderWithBack';
import MovieCatalogue from '../../components/Cards/MovieCatalogue';
import {initData} from '../../data/dataservice';
import {Movie} from '../../models/movie';
import {useNavigation} from '@react-navigation/native';
const Catalogue = ({route}) => {
  const {categoryName} = route.params;
  const [movies, setMovies] = useState([]);
  const [categoryMovies, setCategoryMovies] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadMovies = async () => {
      const data = await initData();
      const movieObjects = data
        .filter(movieData =>
          movieData.genres.toLowerCase().includes(categoryName.toLowerCase()),
        )
        .map(
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Description', {movie: item})}>
      <MovieCatalogue
        imageMovie={{uri: item.image}}
        title={item.title}
        genre={item.genre}
        isPrimary={true}
        isFavorite={false}
      />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithBack
        onPress={() => navigation.goBack()}
        title={categoryName}
      />
      <ScrollView style={styles.listMovies}>
        <FlatList
          horizontal
          data={movies}
          renderItem={renderItem}
          keyExtractor={item => item.movieId}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Catalogue;
