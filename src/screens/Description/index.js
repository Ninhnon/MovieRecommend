import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import RelateMovies from '../../components/Cards/RelateMovies';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import { IMG_ICON_PREVIOUS } from '../../assets/images';
import { useNavigation } from '@react-navigation/native';
import { getUserLoginInfo } from '../../constants/AsyncStorage';
import { API_URL } from '../../constants/constant';
import axios from 'axios';
const Description = ({ route }) => {
  const { movie } = route.params;

  const [user, setUser] = useState(null);
  const [movieInfo, setMovieInfo] = useState(null);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserLoginInfo();
        setUser(userData);

        if (userData) {
          const userId = userData.userId ? userData.userId.toString() : '1';
          console.log('userId', userId);

          // Fetch user data along with isFavorited and isWatched information
          const userMovieInfo = await axios.get(
            API_URL + '/user_movies/' + userId + '/' + movie.movieId,
          );
          console.log('userMovieInfo', userMovieInfo.data);
          setMovieInfo(userMovieInfo.data);
          setLoading(false);
        }
      } catch (error) {
        console.log('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    if (movieInfo) {
      console.log('MovieInfo', movieInfo);
    }
  }, [movieInfo]);

  const changeFavorite = async () => {
    try {
      if (movieInfo) {
        console.log('movieInfo.isFavorited', movieInfo.isFavorited);
        const response = await axios.put(
          API_URL + '/user_movies/' + user.userId + '/' + movieInfo.movieId,
          {
            isFavorited: !movieInfo.isFavorited,
          },
          { headers: { 'Content-Type': 'application/json' } },
        );
        console.log(response.data);
      } else {
        const response = await axios.post(
          API_URL + '/user_movies/' + user.userId,
          {
            movieId: movie.movieId,
            isFavorited: true,
            isWatched: false,
          },
          { headers: { 'Content-Type': 'application/json' } },
        );
        console.log(response.data);
      }

      // Assuming the API response contains the updated movieInfo data,
      // update the local state with the updated data.
      setMovieInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePress = async () => {
    try {
      await changeFavorite();
      setMovieInfo({
        ...movieInfo,
        isFavorited: !movieInfo.isFavorited,
      });
    } catch (error) {
      console.log(error);
    }
  };
  if (loading) {
    // Display a loading indicator while data is being fetched
    return <ActivityIndicator size="large" style={styles.loadingIndicator} />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imgBackground}
        source={{ uri: movie.movieImage }}>
        <View style={styles.detail}>
          <Text style={styles.name}>{movie.movieTitle}</Text>
          <Text style={styles.label}>{movie.movieGenre}</Text>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={Number(movie.mean_rating)}
            containerStyle={styles.star}
            starSize={20}
            selectedStar={rating => this.onStarRatingPress(rating)}
            fullStarColor={'red'}
          />
        </View>
      </ImageBackground>
      <TouchableOpacity
        style={styles.buttonPreVious}
        onPress={() => navigation.goBack()}>
        <Image source={IMG_ICON_PREVIOUS} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.heart} onPress={handlePress}>
        <MaterialCommunityIcons
          name={movieInfo && movieInfo.isFavorited ? 'heart' : 'heart-outline'}
          color={movieInfo && movieInfo.isFavorited ? 'red' : '#FFF'}
          size={50}
        />
      </TouchableOpacity>
      <RelateMovies
        style={styles.relate}
        label="Relate Movies"
        onPress={() => navigation.navigate('MyTab')}
        onCatalogue={() => navigation.navigate('Catalogue')}
      />
    </SafeAreaView>
  );
};
export default Description;
