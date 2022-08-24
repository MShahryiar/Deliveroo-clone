import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import RestaurantScreen from './screens/RestaurantScreen';
import { Provider } from "react-redux";
import { store } from "./store";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>     
        <TailwindProvider>
          <Provider store={store}>
            <Stack.Navigator>
              <Stack.Screen name='Home' component={Home}/>
              <Stack.Screen name='Restaurant' component={RestaurantScreen}/>
            </Stack.Navigator>
          </Provider>
          </TailwindProvider>
    </NavigationContainer>
  );
}
