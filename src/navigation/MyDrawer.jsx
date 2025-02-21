import React, { useContext } from 'react';
import { View, Text, Button, Image, StyleSheet, Pressable } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import DashboardScreen from '../screens/Dashboard';
import MyTabs from './BottomTabNavigator';
import ThemeContext from '../theme/ThemeContext';

// Create the drawer navigator
const Drawer = createDrawerNavigator();

// Custom Drawer Component
const CustomDrawerContent = (props) => {
  const {colors}=useContext(ThemeContext)
  const menuItems = [
    { name: 'Home', icon: 'home', screen: 'Home' },
    { name: 'Profile', icon: 'person', screen: 'Profile' },
    { name: 'Messages', icon: 'message', screen: 'Messages' },
    { name: 'Favorites', icon: 'favorite', screen: 'Favorites' },
    { name: 'Settings', icon: 'settings', screen: 'Settings' },
  ];

  return (
    <View style={styles.drawerContainer}>
      <LinearGradient
        colors={colors.sidePanelBgColors}
        style={styles.drawerHeader}
      >
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/185829049?v=4' }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>XYZ</Text>
        <Text style={styles.profileEmail}>XYZ@gmail.com</Text>
      </LinearGradient>

      <DrawerContentScrollView {...props}>
        {menuItems.map((item) => (
          <Pressable
            key={item.screen}
            style={({ pressed }) => [
              styles.menuItem,
              pressed && { backgroundColor: '#00000010' },
              props.state.index === props.state.routes.findIndex(
                (route) => route.name === item.screen
              ) && styles.activeMenuItem
            ]}
            onPress={() => props.navigation.navigate(item.screen)}
          >
            <Icon name={item.icon} size={24} color="#333" />
            <Text style={styles.menuText}>{item.name}</Text>
          </Pressable>
        ))}
      </DrawerContentScrollView>

      <View style={styles.footer}>
        <Pressable style={styles.footerItem}>
          <Icon name="info" size={20} color="#666" />
          <Text style={styles.footerText}>About</Text>
        </Pressable>
        <Pressable style={styles.footerItem}>
          <Icon name="logout" size={20} color="#666" />
          <Text style={styles.footerText}>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
};

// Screen Components
const HomeScreen = ({ navigation }) => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenTitle}>Home Screen</Text>
    <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
  </View>
);

const SettingsScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenTitle}>Settings Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenTitle}>Profile Screen</Text>
    <Button title="Go to Personal Details" onPress={() => navigation.navigate('PersonalDetails')} />
  </View>
);

const MessagesScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenTitle}>Messages Screen</Text>
  </View>
);

const FavoritesScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenTitle}>Favorites Screen</Text>
  </View>
);

// Main Navigator
const MyDrawer = () => {
  return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerType: 'slide',
          drawerStyle: {
            width: '90%',
          },
        }}
      >
        <Drawer.Screen name="Home" component={MyTabs} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Messages" component={MessagesScreen} />
        <Drawer.Screen name="Favorites" component={FavoritesScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
  );
};

// Styles
const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  drawerHeader: {
    padding: 20,
    paddingTop: 40,
    paddingBottom: 30,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileEmail: {
    color: '#ffffffdd',
    fontSize: 14,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    paddingHorizontal: 20,
  },
  activeMenuItem: {
    backgroundColor: '#6C63FF20',
    borderLeftWidth: 4,
    borderLeftColor: '#6C63FF',
  },
  menuText: {
    fontSize: 16,
    marginLeft: 20,
    color: '#333',
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    marginLeft: 10,
    color: '#666',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
});

export default MyDrawer;