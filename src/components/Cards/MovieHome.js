import React from 'react';
import StarRating from 'react-native-star-rating';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
const MovieHome = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <ImageBackground source={props.source} style={styles.img} />
      <View style={styles.detail}>
        <Text style={styles.name}>{props.name}</Text>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={3}
          containerStyle={styles.star}
          starSize={10}
          starStyle={{marginHorizontal: -30}}
          selectedStar={rating => this.onStarRatingPress(rating)}
          fullStarColor={'#f1c40f'}
          emptyStarColor={'#7f8c8d'}
        />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 240,
    borderRadius: 20,
    marginRight: 8,
  },
  img: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },
  detail: {
    position: 'absolute',
    top: '78%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: 0.8,
  },
  name: {
    left: '10%',
    top: '0%',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFF',
  },
  starStyle: {
    margin: -11,
  },
  star: {
    left: '-2%',
    top: '2%',
    marginHorizontal: 50,
  },
});
export default MovieHome;
