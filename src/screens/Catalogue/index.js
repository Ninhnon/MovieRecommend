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
import axios from 'axios';
import {API_URL} from '../../constants/constant';
import {useNavigation} from '@react-navigation/native';
const Catalogue = ({route}) => {
  const {categoryName} = route.params;
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    axios
      .get(API_URL + '/movies/' + categoryName)

      .then(response => {
        setMovies(response.data);
        console.log(categoryName);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Description', {movie: item})}>
      <MovieCatalogue
        imageMovie={{uri: item.movieImage}}
        title={item.movieTitle}
        genre={item.movieGenre}
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
      {/* <ScrollView > */}
      <FlatList
        style={styles.listMovies}
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.movieId}
      />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};
export default Catalogue;
