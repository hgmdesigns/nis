import React from 'react';
import { TabNavigator } from 'react-navigation';

//Importing all the screens
import CalenderScreen from '../calendar';
import ChatScreen from '../chat.js';
import PaperScreen from '../papers.js';
import ProfileScreen from '../profile';
import LogInScreen from '../account/logIn';

export const Tabs = TabNavigator({
  LogIn: { 
  	screen: LogInScreen 
  },
  Chat: { 
  	screen: ChatScreen 
  },
  Calendar: { 
  	screen: CalenderScreen 
  },
  Paper: { 
  	screen: PaperScreen
  },
  Profile: { 
  	screen: ProfileScreen
  },
});
