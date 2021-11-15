/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import Navigations from './src/navigations';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navigations);
