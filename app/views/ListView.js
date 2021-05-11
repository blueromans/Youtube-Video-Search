import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {DataProvider} from 'recyclerlistview';
import FastImage from 'react-native-fast-image';
import {Section, ListItem, BaseList} from '../components';

const ListView = () => {
  const dispatch = useDispatch();
  const {
    videos: {videos, error, pageToken},
    location: {location},
  } = useSelector(state => state);
  const [dataProvider, setDataProvider] = useState(
    new DataProvider((r1, r2) => {
      return r1 !== r2;
    }).cloneWithRows([]),
  );
  const getVideos = useCallback(() => {
    const credentials = {
      type: 'GET_VIDEOS',
      coordinate: location,
      maxResult: 10,
      loading: true,
      pageToken: pageToken,
    };
    console.log('Listview', pageToken);
    if (!pageToken) {
      return;
    }
    dispatch(credentials);
  }, [dispatch]);

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    if (videos) {
      setDataProvider(
        dataProvider.cloneWithRows([...dataProvider.getAllData(), ...videos]),
      );
    }
  }, [videos, pageToken]);

  const _renderItem = (type, data) => {
    const {
      snippet: {title, description, thumbnails},
    } = data;
    const {
      default: {url},
    } = thumbnails;
    const _handleVideoImage = () => (
      <FastImage
        style={{width: 120, height: 90}}
        resizeMode={FastImage.resizeMode.cover}
        source={{uri: url}}
      />
    );
    return (
      <ListItem
        left={_handleVideoImage}
        title={title}
        description={description}
      />
    );
  };
  const onEndReached = () => {
    if (!pageToken) {
      return;
    }
    getVideos();
    console.log('onEndReached', pageToken);
  };
  return (
    <Section ph10>
      <BaseList
        onEndReached={onEndReached}
        renderItem={_renderItem}
        dataProvider={dataProvider}
        height={100}
      />
    </Section>
  );
};
export default ListView;
