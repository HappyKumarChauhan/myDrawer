import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ThemeContext from '../theme/ThemeContext';
import Header from '../components/Header';

const UploadScreen = ({navigation}) => {
  const {colors} = useContext(ThemeContext);
  const [photos, setPhotos] = useState([
    {
      id: '1',
      name: 'Photo 1.png',
      size: '2.4 MB',
      uri:
        'https://s3-alpha-sig.figma.com/img/0404/f946/26a4a2e1c0b5a85c6e08dc70b45bde20?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KP~2OEKt9oEPFEnjhrobk54tcRdyMjXhf0rjBueJR3aLs9uGDv8pnwvoNk5bCP~E-EtMi7xyqm27zHOyhqlcjT3~ZM7XN9VThL1DeC9Pc1~bawNJFJwvxmoTgP5TiyfHZgWzlhhxmb~Gz5FI2fV5DB60EFpyhKEgIGvxlvVSYYJNFu7x3vH81~pnVVKutB2db0iIAQYAUIcYSk1V~-gjdH3RK3eW341fjqb0gUhZr5HTFBs2G8NTI9vB7nkK4T~J02GSZZE3Paoz3GbzE7Sl-DsPct~gejfHZGNT-N8fZ1WMWcbEPW21LLow8ZklgKxrFDKm~1mfJerRFiKTGMrXkQ__',
    },
    {
      id: '2',
      name: 'Photo 2.png',
      size: '3.1 MB',
      uri:
        'https://s3-alpha-sig.figma.com/img/0404/f946/26a4a2e1c0b5a85c6e08dc70b45bde20?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KP~2OEKt9oEPFEnjhrobk54tcRdyMjXhf0rjBueJR3aLs9uGDv8pnwvoNk5bCP~E-EtMi7xyqm27zHOyhqlcjT3~ZM7XN9VThL1DeC9Pc1~bawNJFJwvxmoTgP5TiyfHZgWzlhhxmb~Gz5FI2fV5DB60EFpyhKEgIGvxlvVSYYJNFu7x3vH81~pnVVKutB2db0iIAQYAUIcYSk1V~-gjdH3RK3eW341fjqb0gUhZr5HTFBs2G8NTI9vB7nkK4T~J02GSZZE3Paoz3GbzE7Sl-DsPct~gejfHZGNT-N8fZ1WMWcbEPW21LLow8ZklgKxrFDKm~1mfJerRFiKTGMrXkQ__',
    },
    {
      id: '3',
      name: 'Photo 3.png',
      size: '1.8 MB',
      uri:
        'https://s3-alpha-sig.figma.com/img/0404/f946/26a4a2e1c0b5a85c6e08dc70b45bde20?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KP~2OEKt9oEPFEnjhrobk54tcRdyMjXhf0rjBueJR3aLs9uGDv8pnwvoNk5bCP~E-EtMi7xyqm27zHOyhqlcjT3~ZM7XN9VThL1DeC9Pc1~bawNJFJwvxmoTgP5TiyfHZgWzlhhxmb~Gz5FI2fV5DB60EFpyhKEgIGvxlvVSYYJNFu7x3vH81~pnVVKutB2db0iIAQYAUIcYSk1V~-gjdH3RK3eW341fjqb0gUhZr5HTFBs2G8NTI9vB7nkK4T~J02GSZZE3Paoz3GbzE7Sl-DsPct~gejfHZGNT-N8fZ1WMWcbEPW21LLow8ZklgKxrFDKm~1mfJerRFiKTGMrXkQ__',
    },
    {
      id: '4',
      name: 'Photo 4.png',
      size: '2.9 MB',
      uri:
        'https://s3-alpha-sig.figma.com/img/0404/f946/26a4a2e1c0b5a85c6e08dc70b45bde20?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KP~2OEKt9oEPFEnjhrobk54tcRdyMjXhf0rjBueJR3aLs9uGDv8pnwvoNk5bCP~E-EtMi7xyqm27zHOyhqlcjT3~ZM7XN9VThL1DeC9Pc1~bawNJFJwvxmoTgP5TiyfHZgWzlhhxmb~Gz5FI2fV5DB60EFpyhKEgIGvxlvVSYYJNFu7x3vH81~pnVVKutB2db0iIAQYAUIcYSk1V~-gjdH3RK3eW341fjqb0gUhZr5HTFBs2G8NTI9vB7nkK4T~J02GSZZE3Paoz3GbzE7Sl-DsPct~gejfHZGNT-N8fZ1WMWcbEPW21LLow8ZklgKxrFDKm~1mfJerRFiKTGMrXkQ__',
    },
  ]);

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Header title="Upload" navigation={navigation} />
      <View style={styles.main}>
        <Text style={[styles.sectionTitle, {color: colors.color}]}>
          Upload File or Take Photos
        </Text>
        <View style={styles.uploadContainer}>
          <TouchableOpacity
            style={[styles.uploadButton, {backgroundColor: colors.secondaryBg}]}
          >
            <View
              style={[styles.iconCircle, {backgroundColor: colors.buttonBg}]}
            >
              <Icon name="photo-camera" size={24} color={colors.buttonText} />
            </View>
            <Text style={{color: colors.color}}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.uploadButton, {backgroundColor: colors.secondaryBg}]}
          >
            <View
              style={[styles.iconCircle, {backgroundColor: colors.buttonBg}]}
            >
              <Icon name="cloud-upload" size={24} color={colors.buttonText} />
            </View>
            <Text style={{color: colors.color}}>Upload Photo</Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.sectionTitle, {color: colors.color}]}>
          Uploading Photos
        </Text>
        <FlatList
          data={photos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View
              style={[styles.photoCard, {backgroundColor: colors.secondaryBg}]}
            >
              <Image source={{uri: item.uri}} style={styles.photo} />
              <View style={styles.photoInfo}>
                <Text style={[styles.photoName, {color: colors.color}]}>
                  {item.name}
                </Text>
                <Text
                  style={[styles.photoSize, {color: colors.secondaryColor}]}
                >
                  {item.size}
                </Text>
              </View>
              <TouchableOpacity>
                <Icon name="close" size={20} color={colors.color} />
              </TouchableOpacity>
            </View>
          )}
        />

        <TouchableOpacity
          style={[styles.nextButton, {backgroundColor: colors.buttonBg}]}
          onPress={() => navigation.navigate('Dash')}
        >
          <Text></Text>
          <Text style={[styles.nextButtonText, {color: colors.buttonText}]}>
            Next
          </Text>
          <Icon name="chevron-right" size={24} color={colors.buttonText} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main:{
    marginHorizontal:20
  },
  iconButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 16,
    paddingBottom: 10,
  },
  uploadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  uploadButton: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 20,
    borderRadius: 10,
    elevation: 3,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  photoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    borderRadius: 8,
    marginVertical: 5,
    elevation: 5,
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  photoInfo: {
    flex: 1,
  },
  photoName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  photoSize: {
    fontSize: 12,
  },
  nextButton: {
    flexDirection: 'row',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  nextButtonText: {
    fontSize: 16,
    marginRight: 5,
  },
});

export default UploadScreen;
