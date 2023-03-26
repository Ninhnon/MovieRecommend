import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {EyeIcon1} from '../../assets/icons';
import {EyeIcon2} from '../../assets/icons';

const CustomInput = props => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  return (
    <KeyboardAvoidingView style={styles.container}>
      {props.label === 'Password' ? (
        <>
          <TouchableOpacity
            onPress={() => {
              setIsSecureEntry(!isSecureEntry);
            }}>
            {isSecureEntry === true ? (
              <Image source={EyeIcon1} style={styles.IconPassword} />
            ) : (
              <Image source={EyeIcon2} style={styles.IconPassword} />
            )}
          </TouchableOpacity>
          <TextInput
            secureTextEntry={isSecureEntry}
            placeholder={props.label}
            placeholderTextColor={'#FFF'}
            style={{color: '#FFF'}}
            onFocus={props.onFocus}
            onChangeText={text => props.onChangeText(text)}
          />
          <View>
            <Text style={{marginTop: 7, color: '#FFF', fontSize: 12}}>
              {props.error}
            </Text>
          </View>
        </>
      ) : (
        <>
          <TextInput
            editable
            multiline
            numberOfLines={4}
            placeholder={props.label}
            placeholderTextColor={'#FFF'}
            style={{color: '#FFF'}}
            secureTextEntry={false}
            keyboardType="email-address"
            onFocus={props.onFocus}
            onChangeText={text => props.onChangeText(text)}
          />
          <View>
            <Text style={{marginTop: 2, color: '#fff', fontSize: 12}}>
              {props.error}
            </Text>
          </View>
        </>
      )}
    </KeyboardAvoidingView>
  );
};
export default CustomInput;
