import React from 'react';
import {Text, View} from 'react-native';

const Item = ({name, price}) => {
  const handleTextClick = () => {
    alert('31212321');
  };
  return (
    <View>
      <Text onPress={handleTextClick}>name：{name}</Text>
      <Text>price：{price}</Text>
    </View>
  );
};
export default Item;
