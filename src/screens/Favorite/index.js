import React, {useEffect, useState} from 'react';
import {SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
import styles from './style';
import MovieCatalogue from '../../components/Cards/MovieCatalogue';
import HeaderWithoutBack from '../../components/Headers/HeaderWithoutBack';
import {API_URL} from '../../constants/constant';
import axios from 'axios';
import {getUserLoginInfo} from '../../constants/AsyncStorage';
const Favorite = props => {
  const {navigation} = props;
  const [user, setUser] = useState(null);
  const [movies, setMovies] = useState([]);
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Description', {movie: item})}>
      <MovieCatalogue props={item} />
    </TouchableOpacity>
  );
  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUserLoginInfo();
      setUser(userData);
    };

    fetchUser();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = user.userId ? user.userId.toString() : '1';
        console.log('userId', userId);
        // Fetch user data along with isFavorited and isWatched information
        const userResponse = await axios.get(API_URL + '/users/' + userId);
        setUser(userResponse.data);

        // Fetch movies data along with descriptions
        const moviesResponse = await axios.get(API_URL + '/movies');
        const moviesWithDetails = userResponse.data.movies.map(movie => {
          //console.log('moviesWithDetails', movie);
          //console.log('userResponse', userResponse.data.movies);
          // Find isFavorited, isWatched, and description information for each movie
          const userMovieInfo = moviesResponse.find(
            userMovie => userMovie.movieId === movie.movieId,
          );
          //console.log('userMovieInfo', userMovieInfo);

          // Combine movie data with user-specific information
          return {
            ...movie,
            isFavorited: userMovieInfo ? userMovieInfo : false,
            isWatched: userMovieInfo ? userMovieInfo : false, // Add description from the movies API response
          };
        });

        setMovies(moviesWithDetails);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  console.log(movies);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithoutBack title="Favorite" />
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.movieId}
      />
    </SafeAreaView>
  );
};
export default Favorite;
