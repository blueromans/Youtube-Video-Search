import React, {useRef} from 'react';
import {RecyclerListView} from 'recyclerlistview';

import {EmptyComponent} from '..';
import {layoutMaker} from '../../helper';
const BaseList = ({
  dataProvider,
  height,
  renderItem,
  onEndReached,
  type,
  emptyMessage = 'Kayıt bulunamadı!',
  column = 1,
  ...rest
}) => {
  const layoutProvider = useRef(layoutMaker(height, column)).current;
  return (
    <React.Fragment>
      {dataProvider && dataProvider.getSize() > 0 ? (
        <RecyclerListView
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          optimizeForInsertDeleteAnimations={true}
          canChangeSize={false}
          onEndReachedThreshold={0.1}
          rowRenderer={renderItem}
          dataProvider={dataProvider}
          layoutProvider={layoutProvider}
          onEndReached={onEndReached}
          {...rest}
        />
      ) : (
        <EmptyComponent emptyMessage={emptyMessage} />
      )}
    </React.Fragment>
  );
};
export default BaseList;
