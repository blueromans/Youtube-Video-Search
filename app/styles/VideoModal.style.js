import {StyleSheet} from 'react-native';
import color from 'color';

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    flex: 0.7,
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  listItem: {
    flexWrap: 'wrap',
    paddingVertical: 3,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: color('#000').alpha(0.12).rgb().string(),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: color('#000').alpha(0.12).rgb().string(),
  },
});
export default styles;
