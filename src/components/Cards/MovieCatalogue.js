import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Image, View} from 'react-native';
import SecondaryButton from '../SecondaryButton';
import {IC_Favorite, IC_Option, IC_UnFavorite} from '../../assets/icons';
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';
const MovieCatalogue = props => {
  const {navigation} = props;
  const favoriteStatus =
    props.props.isFavorited === true ? IC_Favorite : IC_UnFavorite;
  const movieId = props.props.movieId;
  return (
    <View style={styles.movie}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: props.props.movieImage,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.description}>
        <Text style={styles.titleMovie} numberOfLines={2}>
          {props.props.movieTitle}
        </Text>
        <Text style={styles.genreMovie} numberOfLines={1}>
          {props.props.movieGenres}
        </Text>
        <View style={styles.buttonContainer}>
          <SecondaryButton
            label="Watch Now"
            onPress={() => navigation.navigate('Description')}
            alert="Hello"
          />
        </View>
        <View style={styles.iconOptionContainer}>
          <Image source={IC_Option} />
        </View>
        <View style={styles.iconFavoriteContainer}>
          <Image source={favoriteStatus} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  movie: {
    flexDirection: 'row',
    width: 336,
    height: 136,
    marginHorizontal: 27,
    marginTop: 21,
    backgroundColor: CUSTOM_COLOR.MovieBackground,
    borderRadius: 25,
  },
  imageContainer: {
    width: '40%',
    margin: 9,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
  },
  description: {
    width: '46%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 22,
  },
  titleMovie: {
    maxWidth: 155,
    maxHeight: 44,
    marginTop: 14,
    fontSize: 15,
    lineHeight: 25,
    fontFamily: FONT_FAMILY.Semibold,
    color: CUSTOM_COLOR.White,
  },
  genreMovie: {
    maxWidth: 122,
    marginTop: 4,
    fontSize: 14,
    lineHeight: 22,
    fontFamily: FONT_FAMILY.Regular,
    color: CUSTOM_COLOR.SecondaryColorText,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 11,
  },
  iconOptionContainer: {
    position: 'absolute',
    right: -9,
    top: 19,
  },
  iconFavoriteContainer: {
    position: 'absolute',
    bottom: 11,
    right: -22,
  },
});

export default MovieCatalogue;
