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
import ChooseCategories from '../../components/Cards/ChooseCategories';
import React, {useState, useEffect} from 'react';
import {initData} from '../../data/dataservice';
import {Movie} from '../../models/movie';
import {useNavigation} from '@react-navigation/native';
import MovieHome from '../../components/Cards/MovieHome';
const Home = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const loadMovies = async () => {
      const data = await initData();
      const movieObjects = data.map(
        movieData =>
          new Movie(
            movieData.movieId,
            movieData.title,
            movieData.genres,
            movieData.image,
          ),
      );
      setMovies(movieObjects);
      setFilterMovies(movieObjects);
    };
    loadMovies();
  }, []);
  const categories = [
    {id: 1, name: 'Action'},
    {id: 2, name: 'Adventure'},
    {id: 3, name: 'Comedy'},
    {id: 4, name: 'Drama'},
    {id: 5, name: 'Horror'},
    {id: 6, name: 'Tom'},
  ];
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Description', {movie: item})}>
      <MovieHome movie={item} />
    </TouchableOpacity>
  );
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [selectedValue, setSelectedValue] = useState(categories[0]);
  const getMoviesByCategory = category => {
    return movies.filter(movie => {
      return movie.genre.toLowerCase().includes(category.name.toLowerCase());
    });
  };
  const handleSelectCategory = category => {
    setSelectedValue(category);
    const moviesByCategory = getMoviesByCategory(category);
    setFilterMovies(moviesByCategory);
  };
  return (
    <SafeAreaView style={styles.container}>
      <HeaderHome />
      <Search onPress={() => navigation.navigate('Search')} />
      <Text style={styles.genres}>Genres:</Text>
      <View style={{height: 50}}>
        <FlatList
          data={categories}
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
          data={filterMovies}
          renderItem={renderItem}
          keyExtractor={item => item.movieId}
        />
      </View>
    </SafeAreaView>
  );
};
export default Home;
