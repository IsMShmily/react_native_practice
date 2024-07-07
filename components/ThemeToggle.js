import React, {useContext} from 'react';
import {Button, View, Text, ScrollView, StyleSheet} from 'react-native';
import {ThemeContext} from './ThemeProvider';
import useToggle from '../Hooks/useToggle';
import ImgCom from './ImgCom/ImgCom';
import TextInputCom from './InputCom/InputCom';
import ScrollViewCom from './ScrollCom/ScrollCom';

export const ThemeToggle = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const [isOn, setIsOn] = useToggle(false);
  return (
    <ScrollView>
      <View>
        <Text>Current:{theme}</Text>
        <Button title={'toggle theme'} onPress={toggleTheme} />
        <View>
          <Text>{isOn ? 'ON' : 'OFF'}</Text>
          <Button title={'change_isOn'} onPress={setIsOn} />
        </View>
        <View>
          {/** 图片组件练习 */}
          <Text style={styles.titleText}>------ 图片组件练习 ------</Text>
          <ImgCom />
          {/** 输入组件练习 */}
          <Text style={styles.titleText}>------ 输入组件练习 ------</Text>
          <TextInputCom />
        </View>
        {/** 滚动练习 */}
        <Text style={styles.titleText}>------ 滚动组件练习 ------</Text>
        <ScrollViewCom />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titleText: {
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
  },
});
