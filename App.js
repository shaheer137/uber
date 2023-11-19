import 'react-native-gesture-handler';
import { StyleSheet, Text } from 'react-native';
import Navigation from './config/Navigation'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

export default function App() {
  return ( 
     <Navigation /> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
