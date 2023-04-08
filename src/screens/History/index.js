import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import styles from './style';
import HeaderWithoutBack from '../../components/Headers/HeaderWithoutBack';
import MovieCatalogue from '../../components/Cards/MovieCatalogue';
import {IMV_captain_american} from '../../assets/images';
const History = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithoutBack title="History" />
      <ScrollView style={styles.listMovies}>
        <MovieCatalogue
          imageMovie={IMV_captain_american}
          title="Captain America Captain America Captain America"
          genre="Action, Adventure Captain America"
          isPrimary={true}
          isFavorite={true}
        />
        <MovieCatalogue
          imageMovie={IMV_captain_american}
          title="Captain America Captain America Captain America"
          genre="Action, Adventure Captain America"
          isPrimary={true}
          isFavorite={false}
        />
        <MovieCatalogue
          imageMovie={IMV_captain_american}
          title="Captain America Captain America Captain America"
          genre="Action, Adventure Captain America"
          isPrimary={true}
          isFavorite={true}
        />
        <MovieCatalogue
          imageMovie={IMV_captain_american}
          title="Captain America Captain America Captain America"
          genre="Action, Adventure Captain America"
          isPrimary={true}
          isFavorite={false}
        />
        <MovieCatalogue
          imageMovie={IMV_captain_american}
          title="Captain America Captain America Captain America"
          genre="Action, Adventure Captain America"
          isPrimary={true}
          isFavorite={true}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default History;
