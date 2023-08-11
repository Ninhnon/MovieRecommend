import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import RelateMovies from '../../components/Cards/RelateMovies';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import {IMG_ICON_PREVIOUS} from '../../assets/images';
import {useNavigation} from '@react-navigation/native';
const Description = ({route}) => {
  const {movie} = route.params;
  const [active, setActive] = useState(false);
  const navigation = useNavigation();
  const handlePress = () => {
    setActive(!active);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imgBackground}
        source={{uri: movie.movieImage}}>
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
            starStyle={{color: '#f1c40f'}}
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
          name={active ? 'heart' : 'heart-outline'}
          color={active ? 'red' : '#FFF'}
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
