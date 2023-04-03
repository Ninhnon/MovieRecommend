import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CUSTOM_COLOR from '../.././constants/colors.js';
import SegmentControl from '../Buttons/SegmentControl.js';
import MovieHome from './MovieHome.js';
import {IMV_captain} from '../../assets/images/index.js';
const MovieHomeList = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>{props.label}</Text>
        <TouchableOpacity onPress={props.onCatalogue}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        <MovieHome
          source={IMV_captain}
          name="CAPTAIN MaRVEL"
          onPress={props.onPress}
        />
        <MovieHome
          source={IMV_captain}
          name="CAPTAIN MaRVEL"
          onPress={props.onPress}
        />
        <MovieHome
          source={IMV_captain}
          name="CAPTAIN MaRVEL"
          onPress={props.onPress}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '32%',
    margin: '4%',
    marginLeft: '4%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  heading: {
    width: '100%',
    height: '12%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    left: 10,
    color: CUSTOM_COLOR.White,
    fontSize: 18,
  },
  viewAll: {
    right: 20,
    color: '#E82251',
    fontSize: 12,
    top: 4,
  },
});
export default MovieHomeList;
