import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import styles from './style';
import {IMG_AVATAR_PROFILE} from '../../assets/images';
import {IC_History, IC_Logout, IC_Profile} from '../../assets/icons';
import ProfileCard from '../../components/Cards/ProfileCard';
import HeaderWithoutBack from '../../components/Headers/HeaderWithoutBack';
import {getUserLoginInfo} from '../../constants/AsyncStorage';
const Profile = ({navigation}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUserLoginInfo();
      setUser(userData);
      console.log('🚀 ~ file: index.js:16 ~ fetchUser ~ userData:', userData);
    };

    fetchUser();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithoutBack title="Profile" />
      <View style={styles.profile}>
        <View style={styles.imageContainer}>
          <Image source={IMG_AVATAR_PROFILE} style={styles.image} />
        </View>
        <Text style={styles.nameProfile} numberOfLines={1}>
          {user ? user.username : 'User'}
        </Text>
        <Text style={styles.accountProfile} numberOfLines={1}>
          {user ? user.email : 'demo@gmail.com'}
        </Text>
      </View>
      <View style={styles.listProfileBar}>
        <ProfileCard icon={IC_Profile} title="Change Password" />
        <ProfileCard
          icon={IC_History}
          title="History"
          onPress={() => navigation.navigate('History')}
        />
        <ProfileCard
          icon={IC_Logout}
          title="Logout"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </SafeAreaView>
  );
};
export default Profile;
