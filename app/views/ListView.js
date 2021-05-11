import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {DataProvider} from 'recyclerlistview';
import FastImage from 'react-native-fast-image';
import {Section, ListItem, BaseList} from '../components';

const ListView = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state, shallowEqual);
  const {
    videos: {videos, error, pageToken},
    location: {location},
  } = state;
  const [dataProvider, setDataProvider] = useState(
    new DataProvider((r1, r2) => {
      return r1 !== r2;
    }),
  );
  const getVideos = useCallback(
    pageToken_ => {
      const credentials = {
        type: 'GET_VIDEOS',
        coordinate: location,
        pageToken: pageToken_,
      };
      dispatch(credentials);
    },
    [dispatch],
  );

  useEffect(() => {
    if (videos) {
      setDataProvider(
        dataProvider.cloneWithRows([...dataProvider.getAllData(), ...videos]),
      );
    }
  }, [videos]);

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
    getVideos(pageToken);
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
export default React.memo(ListView);
