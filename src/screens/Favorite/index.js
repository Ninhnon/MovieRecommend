import React, {useEffect, useState} from 'react';
import {SafeAreaView, TouchableOpacity, FlatList, Button} from 'react-native';
import styles from './style';
import MovieCatalogue from '../../components/Cards/MovieCatalogue';
import HeaderWithoutBack from '../../components/Headers/HeaderWithoutBack';
import {API_URL} from '../../constants/constant';
import axios from 'axios';
import {getUserLoginInfo} from '../../constants/AsyncStorage';
const Favorite = () => {
  const [user, setUser] = useState(null);
  const [movies, setMovies] = useState([]);
  const renderItem = ({item}) => (
    <TouchableOpacity
      // onPress={() => navigation.navigate('Description', {movie: item})}>
      onPress={() => {
        console.log('movies: ', movies);
      }}>
      <MovieCatalogue props={item} />
    </TouchableOpacity>
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserLoginInfo();
        setUser(userData);

        if (userData.isFavorited) {
          const userId = userData.userId ? userData.userId.toString() : '1';
          console.log('userId', userId);

          // Fetch user data along with isFavorited and isWatched information
          const userMovieList = await axios.get(
            API_URL + '/user_movies/' + userId,
          );
          // Filter movies where isFavorited is true
          const filteredMovies = userMovieList.data.filter(
            movie => movie.isFavorited,
          );

          // Process and set the filtered movies in the state
          const moviesWithDetails = filteredMovies.map(movie => {
            return {
              movieImage:
                movie.movie && movie.movie.movieImage
                  ? movie.movie.movieImage
                  : 'https://m.media-amazon.com/images/M/MV5BMjQxM2YyNjMtZjUxYy00OGYyLTg0MmQtNGE2YzNjYmUyZTY1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
              movieGenre:
                movie.movie && movie.movie.movieGenre
                  ? movie.movie.movieGenre
                  : 'Action',
              movieTitle:
                movie.movie && movie.movie.movieTitle
                  ? movie.movie.movieTitle
                  : 'YES',
              isFavorited: movie.isFavorited ? movie.isFavorited : false,
              isWatched: movie.isWatched ? movie.isWatched : false,
            };
          });

          setMovies(moviesWithDetails);
        }
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
        style={styles.listMovies}
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.movieId}
      />
    </SafeAreaView>
  );
};
export default Favorite;
