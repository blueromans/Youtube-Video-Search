import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    flexGrow: 1,
    flexWrap: 'wrap',
    fontSize: 16,
    textAlign: 'left',
  },
  description: {
    fontSize: 14,
    flex: 1,
    flexGrow: 1,
    textAlign: 'left',
    flexWrap: 'wrap'

  },
  marginVerticalNone: {marginVertical: 0},
  iconMarginLeft: {marginLeft: 0, marginRight: 16},
  iconMarginRight: {marginRight: 0},
  item: {
    marginVertical: 6,
    paddingLeft: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default styles;
