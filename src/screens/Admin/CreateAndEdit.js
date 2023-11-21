import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {API_URL, CATEGORIES} from '../../constants/constant';

const AddEditMovieScreen = ({navigation, route}) => {
  const [movieId, setMovieId] = useState(null); // Assuming you have movieId in edit mode
  const [movieTitle, setMovieTitle] = useState('');
  const [movieGenre, setMovieGenre] = useState([]);
  const [movieImage, setMovieImage] = useState(null);

  useEffect(() => {
    if (route.params && route.params.movieInfo) {
      const {movieId, movieTitle, movieGenre, movieImage} =
        route.params.movieInfo;
      setMovieId(movieId);
      setMovieTitle(movieTitle);
      setMovieImage(movieImage);
      console.log(
        '🚀 ~ file: CreateAndEdit.js:23 ~ useEffect ~ movieGenre:',
        movieGenre,
      );

      // Assuming movieGenre is a string like 'Action|Sci-Fi|Adventure'
      setMovieGenre(movieGenre.split('|'));

      console.log(
        '🚀 ~ file: CreateAndEdit.js:18 ~ AddEditMovieScreen ~ movieGenre:',
        movieGenre,
      );
    }
  }, [route.params]);

  // Function to handle genre selection
  const toggleGenre = genre => {
    let updatedGenres = [...movieGenre];

    if (updatedGenres.includes(genre)) {
      updatedGenres = updatedGenres.filter(item => item !== genre);
    } else {
      updatedGenres.push(genre);
    }

    setMovieGenre(updatedGenres);
  };

  const renderGenreButtons = () => {
    // List of available genres

    return CATEGORIES.map(genre => (
      <TouchableOpacity
        key={genre.id}
        onPress={() => toggleGenre(genre.name)}
        style={{
          backgroundColor: movieGenre.includes(genre.name)
            ? 'green'
            : 'lightgray',
          padding: 10,
          borderRadius: 5,
          margin: 5,
        }}>
        <Text
          style={{color: movieGenre.includes(genre.name) ? 'white' : 'black'}}>
          {genre.name}
        </Text>
      </TouchableOpacity>
    ));
  };

  // Function to submit or update movie data
  const submitOrUpdateData = () => {
    if (movieId) {
      // Update existing movie data
      updateData();
    } else {
      // Add new movie data
      _submitData();
    }
  };

  const _submitData = () => {
    const mergedGenres = movieGenre.join('|');
    console.log(movieTitle, mergedGenres, movieImage);
    fetch(API_URL + '/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        movieTitle: movieTitle,
        movieGenre: mergedGenres,
        movieImage: movieImage,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(
          '🚀 ~ file: CreateAndEdit.js:62 ~ AddEditMovieScreen ~ data:',
          data,
        );
        Alert.alert(`${data.movieTitle} is valid successfully!!`);
        navigation.navigate('HomeAdmin');
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  const updateData = () => {
    const mergedGenres = movieGenre.join('|');
    fetch(API_URL + '/movies/' + movieId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        movieTitle: movieTitle,
        movieGenre: mergedGenres,
        movieImage: movieImage,
      }),
    })
      .then(res => res.json())
      .then(data => {
        Alert.alert(`${data.movieTitle} is updated successfully!!`);
        navigation.navigate('HomeAdmin');
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  // Function to handle image selection from gallery
  const handleImageSelection = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        mediaType: 'photo', // Set the media type to photo
      });

      handleUpData(image.path);
    } catch (error) {
      console.log('Image picker error:', error);
    }
  };

  const handleUpData = photoPath => {
    const data = new FormData();
    data.append('file', {
      uri: photoPath,
      type: 'image/jpg', // Set the type accordingly
      name: photoPath.split('/').pop(), // Extracting image name from path
    });
    data.append('upload_preset', 'movie_recommend');
    data.append('cloud_name', 'dvpt9evqt');

    fetch('https://api.cloudinary.com/v1_1/dvpt9evqt/image/upload', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(res => res.json())
      .then(data => {
        setMovieImage(data.url);
        console.log(data);
      })
      .catch(error => {
        Alert.alert('Error While Uploading');
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter movie title"
        value={movieTitle}
        onChangeText={text => setMovieTitle(text)}
      />

      <View style={styles.genreContainer}>{renderGenreButtons()}</View>

      <TouchableOpacity
        style={styles.imageButton}
        onPress={handleImageSelection}>
        {/* Show selected image or default text */}
        {movieImage ? (
          <Image source={{uri: movieImage}} style={styles.image} />
        ) : (
          <Text>Select Image</Text>
        )}
      </TouchableOpacity>

      {/* Button to submit/update data */}
      <TouchableOpacity
        style={styles.submitButton}
        onPress={submitOrUpdateData}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  imageButton: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default AddEditMovieScreen;
