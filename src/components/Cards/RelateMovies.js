import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import CUSTOM_COLOR from '../.././constants/colors.js';
import MovieHome from './MovieHome.js';
const RelateMovies = props => {
  const movie = {
    mean_rating: '3.9',
    movieGenre: 'Adventure|Animation|Children|Comedy|Fantasy',
    movieId: 1,
    movieImage:
      'https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg',
    movieTitle: 'Toy Story (1995)',
  };
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>{props.label}</Text>
      </View>
      <ScrollView horizontal={true}>
        <MovieHome movie={movie} />
        <MovieHome movie={movie} />
        <MovieHome movie={movie} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '32%',
    margin: '4%',
    marginLeft: '4%',
    top: '62%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  heading: {
    width: '100%',
    height: '12%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    left: 10,
    color: CUSTOM_COLOR.White,
    fontSize: 18,
  },
  viewAll: {
    right: 20,
    color: '#E82251',
    fontSize: 12,
    top: 4,
  },
});
export default RelateMovies;
