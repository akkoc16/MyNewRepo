/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import List from './src/List';
import State from './src/State';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => State);
