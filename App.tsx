import React from 'react';
import MainScreen from './src/MainScreen';
import {SafeAreaView} from 'react-native';
import {store} from './src/reducers/store';
import {Provider} from 'react-redux';
const App = () => {
  return (
    <Provider store={store}>
<SafeAreaView>
      <MainScreen />
    </SafeAreaView>
    </Provider>
    
  );
};

// const styles = StyleSheet.create({
// });

export default App;
