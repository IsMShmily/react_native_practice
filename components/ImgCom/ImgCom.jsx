import React, {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';

/**
 * 图片组件
 * @returns
 */
const ImgCom = () => {
  const [defaultUrl, setDefaultUrl] = useState({
    uri: 'https://images.pexels.com/photos/15804651/pexels-photo-15804651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  });
  return (
    <View>
      <Image
        source={require('../../assets/img/logo.png')}
        style={styles.img1}
      />
      <Image
        source={defaultUrl}
        style={styles.img1}
        onError={() => {
          setDefaultUrl(require('../../assets/img/logo.png'));
          console.log('图片加载失败');
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  img1: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default ImgCom;
