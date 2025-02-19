import React from 'react';
import AppNavigator from './src/navigation/StackNavigator';
import ThemeProvider from './src/theme/ThemeProvider';

const App = () => {
  return (
  <ThemeProvider>
  <AppNavigator />;
  </ThemeProvider>
  );
};

export default App;