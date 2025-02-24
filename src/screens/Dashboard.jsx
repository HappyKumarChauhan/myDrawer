import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Platform } from "react-native";
import Card from "../components/Card";
import CardTwo from "../components/CardTwo";
import ThemeContext from "../theme/ThemeContext";
import Icon from "react-native-vector-icons/MaterialIcons";
import MyDrawer from "../navigation/MyDrawer";
import Header from "../components/Header";

const DashboardScreen = ({ navigation }) => {
  const { colors } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState("Upcoming");

  const upcomingData = [
    { id: "1", title: "Bengaluru Brigade", desk: "BM-8F-WS-26-2nd Floor" },
    { id: "2", title: "Bengaluru Brigade", desk: "BM-8F-WS-26-2nd Floor" },
    { id: "3", title: "Bengaluru Brigade", desk: "BM-8F-WS-26-2nd Floor" },
    { id: "4", title: "Bengaluru Brigade", desk: "BM-8F-WS-26-2nd Floor" },
  ];

  const myListData = [
    { id: "1", title: "Reserved Space", desk: "RM-5A-WS-12-3rd Floor" },
    { id: "2", title: "Reserved Space", desk: "RM-5A-WS-12-3rd Floor" },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={[styles.iconButton, { backgroundColor: colors.secondaryBg }]}>
          <Icon name="menu" size={30} color={colors.color} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.color }]}>Dashboard</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')} style={[styles.iconButton, { backgroundColor: colors.secondaryBg }]}>
          <Icon name="notifications" size={30} color={colors.color} />
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Upcoming" && { borderBottomColor: colors.color, borderBottomWidth: 2 }]}
          onPress={() => setActiveTab("Upcoming")}
        >
          <Text style={[styles.tabText, { color: colors.color }]}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "My List" && { borderBottomColor: colors.color, borderBottomWidth: 2 }]}
          onPress={() => setActiveTab("My List")}
        >
          <Text style={[styles.tabText, { color: colors.color }]}>My List</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={activeTab === "Upcoming" ? upcomingData : myListData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          activeTab === "Upcoming" ? (
            <Card title={item.title} desk={item.desk} />
          ) : (
            <CardTwo title={item.title} desk={item.desk} />
          )
        }
        contentContainerStyle={{ padding: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
    marginTop: 25,
  },
  iconButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: Platform.OS === 'ios' ? 40 : 20,  // Adjust margin for iOS
    backgroundColor: 'white',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 5,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tabText: {
    fontSize: 16,
  },
});

export default DashboardScreen;
