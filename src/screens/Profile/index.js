import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import styles from './style';
import {TouchableOpacity} from 'react-native';
import {IMG_AVATAR_PROFILE} from '../../assets/images';
import {
  IC_History,
  IC_Logout,
  IC_Notification,
  IC_Profile,
} from '../../assets/icons';
import ProfileCard from '../../components/Cards/ProfileCard';
import HeaderWithoutBack from '../../components/Headers/HeaderWithoutBack';
const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithoutBack title="Profile" />
      <View style={styles.profile}>
        <View style={styles.imageContainer}>
          <Image source={IMG_AVATAR_PROFILE} style={styles.image} />
        </View>
        <Text style={styles.nameProfile} numberOfLines={1}>
          Amos Ivor
        </Text>
        <Text style={styles.accountProfile} numberOfLines={1}>
          @amos.ivor.1710
        </Text>
      </View>
      <View style={styles.listProfileBar}>
        <ProfileCard icon={IC_Profile} title="My profile" />
        <ProfileCard icon={IC_Notification} title="Notification" />
        <ProfileCard icon={IC_History} title="History" />
        <ProfileCard icon={IC_Logout} title="Logout" />
      </View>
    </SafeAreaView>
  );
};
export default Profile;
