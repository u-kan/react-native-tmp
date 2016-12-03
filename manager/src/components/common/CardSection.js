import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    // array でstyleみたいにt英技されると、左側のがメインで使われて、propsで渡された場合のみそっち側が適用されるっていう実装になる
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
