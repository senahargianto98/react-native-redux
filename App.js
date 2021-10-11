// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Counter from './screens/Counter';
import {Provider} from 'react-redux';
import storeState from './redux/store';

// storeState.subscribe(() => console.log(storeState.getState()))

function HomeScreen() {
  return <Counter />;
}

const Stack = createNativeStackNavigator();

function App() {
  const [counter, setCounter] = React.useState('testnih');
  storeState.subscribe(() => {
    setCounter(storeState.getState().text)
  });
  console.log(counter)
  return (
    <Provider store={storeState}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
