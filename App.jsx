import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ThemeProvider} from './components/ThemeProvider';
import {ThemeToggle} from './components/ThemeToggle';

const App = () => {
  return (
    <SafeAreaView>
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
