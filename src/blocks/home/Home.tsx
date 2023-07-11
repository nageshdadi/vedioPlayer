/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {videoData, youtubeTitle, viewsText, minText} from '../../config/config';
import HomeController from './HomeController';

export class Home extends HomeController {
  render() {
    return (
      <SafeAreaView style={styles.mainCard}>
        <View style={styles.topCard}>
          <View style={styles.youtubeCard}>
            <AntDesignIcon name="youtube" size={35} color="#e62f22" />
            <Text style={styles.youtubeHead}>{youtubeTitle}</Text>
          </View>
          <View style={styles.youtubeIconCard}>
            <Ionicons name="notifications-outline" size={30} />
            <Ionicons name="search-outline" size={30} />
            <FontAwesome name="product-hunt" size={30} />
          </View>
        </View>
        <View style={{marginBottom: 80}}>
          <FlatList
            data={videoData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}: {item: any}) => {
              return (
                <View>
                  <TouchableOpacity
                    style={styles.videoCard}
                    onPress={() => {
                      this.props.navigation.navigate('VideoPlayer', {...item});
                    }}>
                    <Image
                      style={styles.itemImage}
                      resizeMode="contain"
                      source={{uri: `${item.thumbnailUrl}`}}
                    />
                    <View style={styles.contentCrad}>
                      <View style={styles.profileCard}>
                        <Text style={styles.profileText}>
                          {item.title[0].toUpperCase()}
                        </Text>
                      </View>
                      <View>
                        <Text style={styles.titleText}>
                          {item.title} | {item.author}
                        </Text>
                        <Text>
                          {viewsText} {item.views} | {item.uploadTime} |{' '}
                          {item.duration} {minText}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  mainCard: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  youtubeCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  youtubeIconCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 150,
  },
  youtubeHead: {
    fontSize: 25,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  videoCard: {
    marginBottom: 10,
  },
  itemImage: {
    height: 250,
    width: '100%',
  },
  contentCrad: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500',
    maxWidth: '100%',
  },
  profileCard: {
    height: 50,
    width: 50,
    borderRadius: 40,
    backgroundColor: 'gray',
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    color: '#fff',
    fontSize: 20,
  },
});
export default Home;
