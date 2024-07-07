import React from 'react';
import {ScrollView, Image, StyleSheet, View, Text} from 'react-native';

const ScrollViewCom = () => {
  return (
    <ScrollView
      style={styles.scrollContainer}
      showsHorizontalScrollIndicator={false} //关闭横向滚动条
      showsVerticalScrollIndicator={false} //关闭纵向滚动条
      horizontal={false} //横向滚动
      onScroll={() => {
        // console.log('');
      }}>
      <Image
        source={require('../../assets/img/logo.png')}
        style={styles.img1}
      />
      <Image
        source={require('../../assets/img/logo.png')}
        style={styles.img1}
      />
      <Image
        source={require('../../assets/img/logo.png')}
        style={styles.img1}
      />
      <Image
        source={require('../../assets/img/logo.png')}
        style={styles.img1}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollContainer: {
    width: '100%',
    height: 200,
    marginTop: 10,
    padding: 10,
  },
  img1: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});
export default ScrollViewCom;
