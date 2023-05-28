import AsyncStorage from '@react-native-async-storage/async-storage';

const DATA_KEY = 'myData';

export const initData = async () => {
  try {
    // Check if the data has already been saved to storage
    const storedData = await AsyncStorage.getItem(DATA_KEY);
    if (storedData !== null) {
      return JSON.parse(storedData);
    }
    const jsonData = require('./movie.json').slice(0, 1000);
    const objects = jsonData.map(item => ({
      movieId: item.movieId,
      title: item.title,
      genres: item.genres,
      image: item.image,
    }));

    // Save the new data to storage
    await AsyncStorage.setItem(DATA_KEY, JSON.stringify(objects));
    return objects;
  } catch (error) {
    console.error(error);
    return [];
  }
};
