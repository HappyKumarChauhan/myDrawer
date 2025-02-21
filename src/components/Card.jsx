import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import ThemeContext from "../theme/ThemeContext";

const Card = ({ title, desk }) => {
  const { colors } = useContext(ThemeContext);
  const navigation = useNavigation(); // Get navigation object

  return (
    <TouchableOpacity onPress={() => navigation.navigate("QrCode")} style={styles.container}>
      <LinearGradient colors={colors.cardBgColors} style={styles.card}>
        <Image 
          source={{ uri: "https://s3-alpha-sig.figma.com/img/0404/f946/26a4a2e1c0b5a85c6e08dc70b45bde20?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KP~2OEKt9oEPFEnjhrobk54tcRdyMjXhf0rjBueJR3aLs9uGDv8pnwvoNk5bCP~E-EtMi7xyqm27zHOyhqlcjT3~ZM7XN9VThL1DeC9Pc1~bawNJFJwvxmoTgP5TiyfHZgWzlhhxmb~Gz5FI2fV5DB60EFpyhKEgIGvxlvVSYYJNFu7x3vH81~pnVVKutB2db0iIAQYAUIcYSk1V~-gjdH3RK3eW341fjqb0gUhZr5HTFBs2G8NTI9vB7nkK4T~J02GSZZE3Paoz3GbzE7Sl-DsPct~gejfHZGNT-N8fZ1WMWcbEPW21LLow8ZklgKxrFDKm~1mfJerRFiKTGMrXkQ__" }} 
          style={styles.image} 
        />
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: "white" }]}>{title}</Text>
          <Text style={[styles.subText, { color: colors.secondaryColor }]}>For: Self</Text>
          <Text style={[styles.subText, { color: colors.secondaryColor }]}>Desk: {desk}</Text>
        </View>
        <Text style={[styles.arrow, { color: "white" }]}>{">"}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    height: 110,
    width: 339,
    marginHorizontal: 18,
    marginVertical: 2,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 12,
  },
  arrow: {
    fontSize: 18,
  },
});

export default Card;
