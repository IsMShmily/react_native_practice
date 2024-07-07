import React, {useContext} from 'react';
import {Button, View, Text} from 'react-native';
import {ThemeContext} from './ThemeProvider';
import useToggle from '../Hooks/useToggle';

export const ThemeToggle = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const [isOn, setIsOn] = useToggle(false);
  return (
    <View>
      <Text>Current:{theme}</Text>
      <Button title={'toggle theme'} onPress={toggleTheme} />

      <View>
        <Text>{isOn ? 'ON' : 'OFF'}</Text>
        <Button title={'change_isOn'} onPress={setIsOn} />
      </View>
    </View>
  );
};
