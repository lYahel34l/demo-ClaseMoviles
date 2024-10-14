import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailScreen';
import ComponentScreen from './src/screens/ComponentScreen';





const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Component" component={ComponentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


// const navigator = createNativeStackNavigator({
//     Home: HomeScreen,
//     Components: ComponentScreen,
// },
// {
//   initialRouteName: 'Components',
//   defaultNavigationOptions: {
//     title: 'App'
//   }
// }
// );




