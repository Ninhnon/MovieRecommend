import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import styles from './style';
import HeaderHome from '../../components/Headers/HeaderHome';
import Search from '../../components/Cards/Search';
import ChooseCategories from '../../components/Cards/ChooseCategories';
import MovieHomeList from '../../components/Cards/MovieHomeList';
const Home = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <HeaderHome />
      <Search />
      <ChooseCategories />
      <MovieHomeList
        label="Movie Recommend"
        onPress={() => navigation.navigate('Description')}
        onCatalogue={() => navigation.navigate('Catalogue')}
      />
      <MovieHomeList
        label="Movie Recommend"
        onPress={() => navigation.navigate('Description')}
        onCatalogue={() => navigation.navigate('Catalogue')}
      />
    </SafeAreaView>
  );
};
export default Home;
