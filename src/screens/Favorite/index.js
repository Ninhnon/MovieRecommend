import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import styles from './style';
import MovieCatalogue from '../../components/Cards/MovieCatalogue';
import {IMV_captain_american} from '../../assets/images';
import HeaderWithoutBack from '../../components/Headers/HeaderWithoutBack';
const Favorite = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithoutBack title="Favorite" />
      <ScrollView style={styles.listMovies}>
        <MovieCatalogue
          imageMovie={IMV_captain_american}
          title="Captain America Captain America Captain America"
          genre="Action, Adventure Captain America"
          isPrimary={false}
          isFavorite={true}
        />
        <MovieCatalogue
          imageMovie={IMV_captain_american}
          title="Captain America Captain America Captain America"
          genre="Action, Adventure Captain America"
          isPrimary={false}
          isFavorite={true}
        />
        <MovieCatalogue
          imageMovie={IMV_captain_american}
          title="Captain America Captain America Captain America"
          genre="Action, Adventure Captain America"
          isPrimary={false}
          isFavorite={true}
        />
        <MovieCatalogue
          imageMovie={IMV_captain_american}
          title="Captain America Captain America Captain America"
          genre="Action, Adventure Captain America"
          isPrimary={false}
          isFavorite={true}
        />
        <MovieCatalogue
          imageMovie={IMV_captain_american}
          title="Captain America Captain America Captain America"
          genre="Action, Adventure Captain America"
          isPrimary={false}
          isFavorite={true}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Favorite;
