import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import HeaderHome from '../../components/Headers/HeaderHome';
import Search from '../../components/Cards/Search';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import MovieHome from '../../components/Cards/MovieHome';
import axios from 'axios';
import MovieContext from '../../data/MovieContext';
import {API_URL} from '../../constants/constant';
import {CATEGORIES} from '../../constants/constant';
// const URL = 'https://web-movies-api-azurewebsites.net/';
const Home = () => {
  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Description', {movie: item})}>
      <MovieHome movie={item} />
    </TouchableOpacity>
  );
  // const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const {recommendMovies} = React.useContext(MovieContext);
  const [selectedValue, setSelectedValue] = useState(CATEGORIES[0]);
  useEffect(() => {
    axios
      .get(API_URL + '/movies/Drama')
      .then(response => {
        // setMovies(response.data);
        setFilterMovies(response.data);
      })
      .catch(error => {
        console.log('Error fetching movies:', error);
      });
  }, []);
  // const getMoviesByCategory = category => {
  //   return movies.filter(movie => {
  //     return movie.movieGenre
  //       .toLowerCase()
  //       .includes(category.name.toLowerCase());
  //   });
  // };
  // const handleSelectCategory = category => {
  //   setSelectedValue(category);
  //   const moviesByCategory = getMoviesByCategory(category);
  //   setFilterMovies(moviesByCategory);
  // };
  const handleSelectCategory = async category => {
    setSelectedValue(category);

    try {
      const response = await axios.get(API_URL + `/movies/${category.name}`);
      setFilterMovies(response.data);
    } catch (error) {
      console.log('Error fetching movies by category:', error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <HeaderHome />
      <Search onPress={() => navigation.navigate('Search')} />
      <Text style={styles.genres}>Genres:</Text>
      <View style={{height: 50}}>
        <FlatList
          data={CATEGORIES}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => handleSelectCategory(item)}>
              <View
                style={[
                  styles.tag,
                  selectedValue.id === item.id && styles.selectedView,
                ]}>
                <Text
                  style={[
                    styles.line,
                    selectedValue.id === item.id && styles.selected,
                  ]}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.movieRecommend}>
        <View style={styles.heading}>
          <Text style={styles.title}>{selectedValue.name}</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Catalogue', {
                categoryName: selectedValue.name,
              })
            }>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={filterMovies.slice(0, 6)}
          renderItem={renderItem}
          keyExtractor={item => item.movieId}
        />
      </View>
      <View style={styles.movieRecommend}>
        <View style={styles.heading}>
          <Text style={styles.title}>Movie Recommend For You</Text>
        </View>
        <FlatList
          horizontal
          data={recommendMovies.slice(0, 6)}
          renderItem={renderItem}
          keyExtractor={item => item.movieId}
        />
      </View>
    </SafeAreaView>
  );
};
export default Home;
