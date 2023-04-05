import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import styles from './style';
import HeaderWithBack from '../../components/Headers/HeaderWithBack';
import {IMV_captain_american} from '../../assets/images';
import SecondaryButton from '../../components/SecondaryButton';
import CustomButton from '../../components/CustomButton';
import {IC_Option} from '../../assets/icons';
const Catalogue = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithBack onPress={() => navigation.goBack()} title="CATALOGUE" />
      <View style={styles.listMovies}>
        <View style={styles.movie}>
          <View style={styles.imageContainer}>
            <Image source={IMV_captain_american} style={styles.image} />
          </View>
          <View style={styles.description}>
            <Text style={styles.titleMovie} numberOfLines={2}>
              Captain American Hell 2 3 4
            </Text>
            <Text style={styles.genreMovie} numberOfLines={1}>
              Action, Adventure American Captain American Captain American
            </Text>
            <View style={styles.buttonContainer}>
              <SecondaryButton
                label="Watch Now"
                onPress={() => navigation.navigate('Description')}
              />
            </View>
            <View style={styles.iconContainer}>
              <Image source={IC_Option} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Catalogue;
