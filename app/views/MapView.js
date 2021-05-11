import React, {useEffect, useCallback, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {View, StyleSheet} from 'react-native';
import RNMapView, {Marker} from 'react-native-maps';

import {Section, VideoModal, Loading} from '../components';
import styles from '../styles/MapView.style';

const MapView = () => {
  const mapRef = useRef(null);
  const dispatch = useDispatch();
  const {
    videos: {videos, loading, error},
    location: {location: initialRegion},
  } = useSelector(state => state);
  const [position, setPosition] = useState(initialRegion);
  const [isVisible, setIsVisible] = useState(false);
  const hideModal = () => {
    setIsVisible(false);
  };
  const getCurrentLocation = useCallback(
    () => dispatch({type: 'GET_LOCATION'}),
    [dispatch],
  );
  useEffect(() => {
    getCurrentLocation();
  }, []);
  const handleMapPress = e => {
    const coordinate = e.nativeEvent.coordinate;
    const region = {
      ...coordinate,
      latitudeDelta: initialRegion.latitudeDelta,
      longitudeDelta: initialRegion.longitudeDelta,
    };
    mapRef.current.animateToRegion(region, 1000);
  };
  const handleRegionChange = mapRegion => {
    setPosition(mapRegion);
    dispatch({
      type: 'GET_VIDEOS',
      coordinate: mapRegion,
      maxResult: 10,
      loading: true,
      pageToken: null,
    });
    setIsVisible(true);
  };
  return (
    <Section>
      <Loading isVisible={loading} />
      <VideoModal
        error={error}
        videos={videos}
        hideModal={hideModal}
        isVisible={isVisible && !loading}
      />
      <RNMapView
        ref={mapRef}
        initialRegion={position}
        onPress={handleMapPress}
        loadingEnabled={false}
        onRegionChangeComplete={handleRegionChange}
        style={StyleSheet.absoluteFillObject}
        rotateEnabled={false}>
        {!!position && position.latitude && (
          <React.Fragment>
            <Marker
              anchor={{x: 0.5, y: 0.6}}
              coordinate={{
                latitude: position.latitude,
                longitude: position.longitude,
              }}>
              <View style={styles.dotContainer}>
                <View style={styles.dot} />
              </View>
            </Marker>
          </React.Fragment>
        )}
      </RNMapView>
    </Section>
  );
};
export default React.memo(MapView);
