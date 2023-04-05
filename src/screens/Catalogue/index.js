import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import styles from './style';
import HeaderWithBack from '../../components/Headers/HeaderWithBack';
import {IMV_captain_american} from '../../assets/images';
import MovieCatalogue from '../../components/Cards/MovieCatalogue';
const Catalogue = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithBack onPress={() => navigation.goBack()} title="CATALOGUE" />
      <ScrollView style={styles.listMovies}>
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
export default Catalogue;
