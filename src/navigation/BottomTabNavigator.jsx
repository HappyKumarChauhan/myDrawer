import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ThemeContext from '../theme/ThemeContext';
import MyDrawer from './MyDrawer'
import { useContext } from 'react';
import DashboardScreen from '../screens/Dashboard';
const Tab = createBottomTabNavigator();
function MyTabs() {
  const { colors} = useContext(ThemeContext)
  return (

    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      // Tab Bar Style
      tabBarStyle: { backgroundColor: colors.background, borderTopWidth: 1, height:70 },
  
      // Active Tab Customization
      tabBarActiveTintColor: colors.color, 
  
      // Inactive Tab Customization
      tabBarInactiveTintColor: 'gray',
  
      // Label Style
      tabBarShowLabel:false
    }}
  >
    <Tab.Screen
      name="Home"
      component={DashboardScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" size={30} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Book"
      component={BookingsScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="book" size={30} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="QrCodeScanner"
      component={Dashboard} // Custom component for the screen
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="qr-code-scanner" size={30} color="white" />
        ),
        tabBarIconStyle: { backgroundColor: 'black',width:50, height:50, justifyContent:'center',borderRadius:30,position:'relative',bottom:5, zIndex:-10 },
      }}
    />
    <Tab.Screen
      name="Meeting"
      component={RoomSpaceScreen}
      options={{
        tabBarIcon: ({ color, size }) => (import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ThemeContext from '../theme/ThemeContext';
import { useContext } from 'react';
import DashboardScreen from '../screens/Dashboard';
import BookingsScreen from '../screens/BookingsScreen';
import RoomSpaceScreen from '../screens/RoomSpaceScreen';
import PersonalDetailsScreen from '../screens/PersonalDetailsScreen';
import QrCodeScannerScreen from '../screens/QrCodeScannerScreen'; // Make sure this file exists

const Tab = createBottomTabNavigator();

function MyTabs() {
  const { colors } = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.background, borderTopWidth: 1, height: 70 },
        tabBarActiveTintColor: colors.color,
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="home" size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name="Book"
        component={BookingsScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="book" size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name="QrCodeScanner"
        component={QrCodeScannerScreen} // Updated to the correct screen
        options={{
          tabBarIcon: ({ color }) => <Icon name="qr-code-scanner" size={30} color="white" />,
          tabBarIconStyle: {
            backgroundColor: 'black',
            width: 50,
            height: 50,
            justifyContent: 'center',
            borderRadius: 30,
            position: 'relative',
            bottom: 5,
            zIndex: -10,
          },
        }}
      />
      <Tab.Screen
        name="Meeting"
        component={RoomSpaceScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="meeting-room" size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={PersonalDetailsScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="person-outline" size={30} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;

          <Icon name="meeting-room" size={30} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={PersonalDetailsScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="person-outline" size={30} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
  

  );
}
export default MyTabs;