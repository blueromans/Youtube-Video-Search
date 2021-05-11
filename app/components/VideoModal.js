import React from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import Modal from 'react-native-modal';
import styles from '../styles/VideoModal.style';
import {Section, ListItem} from '.';

const VideoModal = ({isVisible, hideModal, videos, error = ''}) => {
  const {navigate} = useNavigation();
  const navigateToListView = () => {
    navigate('ListView');
  };
  return (
    <Modal
      useNativeDriver={true}
      isVisible={isVisible}
      onBackButtonPress={hideModal}
      onBackdropPress={hideModal}
      style={styles.modal}
      propagateSwipe={true}
      scrollOffsetMax={100}
      backdropOpacity={0.4}>
      <Section style={styles.modalContainer}>
        <Section full flex={false}>
          <TouchableOpacity
            style={{alignItems: 'flex-end'}}
            onPress={hideModal}>
            <Text style={{padding: 10, fontWeight: 'bold', color: 'orange'}}>
              Kapat
            </Text>
          </TouchableOpacity>
        </Section>
        <Section full>
          {error ? (
            <Section center middle>
              <Text>Hata Oluştu. Hata Detayı</Text>
              <Text>{error.toString()}</Text>
            </Section>
          ) : (
            <React.Fragment>
              <ScrollView
                style={{flex: 1}}
                showsVerticalScrollIndicator={false}>
                {!!videos &&
                  videos.map((item, index) => {
                    const {
                      snippet: {title, description, thumbnails},
                    } = item;
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
                        style={styles.listItem}
                        left={_handleVideoImage}
                        key={index}
                        title={title}
                        description={description}
                      />
                    );
                  })}
              </ScrollView>
              <Section flex={false}>
                <TouchableOpacity
                  onPressIn={navigateToListView}
                  style={{alignItems: 'flex-end'}}
                  onPress={hideModal}>
                  <Text
                    style={{padding: 10, fontWeight: 'bold', color: 'orange'}}>
                    TÜMÜNÜ GÖRÜNTÜLE
                  </Text>
                </TouchableOpacity>
              </Section>
            </React.Fragment>
          )}
        </Section>
      </Section>
    </Modal>
  );
};
export default VideoModal;
