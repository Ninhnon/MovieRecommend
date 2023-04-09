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

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import {IMG_ICON_PREVIOUS, IMV_captain} from '../../assets/images';
import RelateMovies from '../../components/Cards/RelateMovies';
const Description = props => {
  const {navigation} = props;
  const [active, setActive] = useState(false);

  const handlePress = () => {
    setActive(!active);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.imgBackground} source={IMV_captain}>
        <View style={styles.detail}>
          <Text style={styles.name}>CAPTAIN MARVEL</Text>
          <Text style={styles.label}>SuperHero</Text>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={3}
            containerStyle={styles.star}
            starSize={20}
            selectedStar={rating => this.onStarRatingPress(rating)}
            fullStarColor={'#f1c40f'}
            emptyStarColor={'#7f8c8d'}
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
        onPress={() => navigation.navigate('Description')}
        onCatalogue={() => navigation.navigate('Catalogue')}
      />
    </SafeAreaView>
  );
};
export default Description;
