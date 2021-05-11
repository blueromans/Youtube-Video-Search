import {LayoutProvider} from 'recyclerlistview';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const getWindowWidth = () => {
  return Math.round(width * 1000) / 1000;
};
const layoutMaker = (height, column = 1) => {
  return new LayoutProvider(
    () => {
      return 'VSEL'; //Since we have just one view type
    },
    (type, dim, index) => {
      const columnWidth = getWindowWidth() / column;
      dim.width = columnWidth;
      dim.height = height;
    },
  );
};
export {layoutMaker};
