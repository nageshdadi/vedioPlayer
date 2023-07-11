import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import VideoPlayerController from './VideoPlayerController';
import VideoPlayer from 'react-native-video-player';
import {subscribe, description, viewsText, minText} from '../../config/config';
import React from 'react';
export class VideoPlay extends VideoPlayerController {
  render() {
    const data = this.props.route.params;
    const widthVal = this.state.orientation === 'portrait' ? 1500 : 900;
    const heigthVal = this.state.orientation === 'portrait' ? 900 : 430;
    return (
      <View style={styles.videoCard}>
        <VideoPlayer
          video={{
            uri: `${data.videoUrl}`,
          }}
          videoWidth={widthVal}
          disableFullscreen={true}
          videoHeight={heigthVal}
          thumbnail={{uri: 'https://i.picsum.photos/id/866/1600/900.jpg'}}
        />
        <View style={styles.descriptionCard}>
          <View style={styles.contentCrad}>
            <View>
              <Text style={styles.titleText}>
                {data.title} | {data.author}
              </Text>
              <Text>
                {viewsText} {data.views} | {data.uploadTime} | {data.duration}{' '}
                {minText}
              </Text>
            </View>
          </View>
          <View style={styles.subscribeCrad}>
            <View style={styles.profileCard}>
              <Text style={styles.profileText}>
                {data.title[0].toUpperCase()}
              </Text>
            </View>
            <Text style={styles.titleText}>{data.author}</Text>
            <TouchableOpacity style={styles.subscribeBtn}>
              <Text style={styles.subscribeText}>{subscribe}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text>{description}</Text>
            <Text>{data.description}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  videoCard: {
    flex: 1,
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
  descriptionCard: {
    padding: 10,
  },
  subscribeCrad: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subscribeBtn: {
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
  },
  subscribeText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default VideoPlay;
