import React, { useContext } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const WelcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={{ uri: 'https://cdn.decoist.com/wp-content/uploads/2015/08/Upholstered-daybed-for-the-contemporary-home-office.jpg' }}
            style={styles.background}
        >
            <LinearGradient colors={['rgba(75, 0, 130,0.5)','rgba(0, 0, 128,0.5)']} style={styles.overlay}>
                <View style={styles.main}>
                    <Text style={[styles.primaryHeading]}>Connect, Create and Collaborate</Text>
                    <Text style={[styles.secondaryHeading]}>The ultimate Co-working experience</Text>
                    <Text style={[styles.description]}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, deleniti dolore aliquam aliquid quo odio laudantium minima illo mollitia libero necessitatibus quidem.</Text>
                    
                    <TouchableOpacity
                        style={[styles.button]}
                        onPress={() => navigation.navigate('SignUp')}
                    >
                        <Text></Text>
                        <Text style={[styles.buttonText]}>Get Started</Text>
                        <Icon name="navigate-next" size={30} color='black' />
                    </TouchableOpacity>

                </View>
            </LinearGradient>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    main: {
        paddingHorizontal: 40,
        paddingVertical: 80,
    },
    primaryHeading: {
        color:'white',
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 27,
        paddingVertical: 5,
    },
    secondaryHeading: {
        color:'white',
        paddingVertical: 5,
        fontSize: 14,
        fontWeight: '600',
    },
    description: {
        color:'white',
        paddingVertical: 5,
        paddingBottom: 30,
        fontSize: 12,
        fontWeight: '600',
    },
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 0,
    },
    button: {
        alignItems: 'center',
        backgroundColor:'#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 58,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    themeButton: {
        marginTop: 20,
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default WelcomeScreen;
