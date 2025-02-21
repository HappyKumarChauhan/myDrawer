import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const UploadScreen = ({ navigation }) => {
  const [photos, setPhotos] = useState([
    { id: '1', name: 'Photo 1.png', size: '2.4 MB', uri: 'https://s3-alpha-sig.figma.com/img/0404/f946/26a4a2e1c0b5a85c6e08dc70b45bde20?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KP~2OEKt9oEPFEnjhrobk54tcRdyMjXhf0rjBueJR3aLs9uGDv8pnwvoNk5bCP~E-EtMi7xyqm27zHOyhqlcjT3~ZM7XN9VThL1DeC9Pc1~bawNJFJwvxmoTgP5TiyfHZgWzlhhxmb~Gz5FI2fV5DB60EFpyhKEgIGvxlvVSYYJNFu7x3vH81~pnVVKutB2db0iIAQYAUIcYSk1V~-gjdH3RK3eW341fjqb0gUhZr5HTFBs2G8NTI9vB7nkK4T~J02GSZZE3Paoz3GbzE7Sl-DsPct~gejfHZGNT-N8fZ1WMWcbEPW21LLow8ZklgKxrFDKm~1mfJerRFiKTGMrXkQ__' },
    { id: '2', name: 'Photo 1.png', size: '2.4 MB', uri: 'https://s3-alpha-sig.figma.com/img/0404/f946/26a4a2e1c0b5a85c6e08dc70b45bde20?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KP~2OEKt9oEPFEnjhrobk54tcRdyMjXhf0rjBueJR3aLs9uGDv8pnwvoNk5bCP~E-EtMi7xyqm27zHOyhqlcjT3~ZM7XN9VThL1DeC9Pc1~bawNJFJwvxmoTgP5TiyfHZgWzlhhxmb~Gz5FI2fV5DB60EFpyhKEgIGvxlvVSYYJNFu7x3vH81~pnVVKutB2db0iIAQYAUIcYSk1V~-gjdH3RK3eW341fjqb0gUhZr5HTFBs2G8NTI9vB7nkK4T~J02GSZZE3Paoz3GbzE7Sl-DsPct~gejfHZGNT-N8fZ1WMWcbEPW21LLow8ZklgKxrFDKm~1mfJerRFiKTGMrXkQ__' },
    { id: '3', name: 'Photo 1.png', size: '2.4 MB', uri: 'https://s3-alpha-sig.figma.com/img/0404/f946/26a4a2e1c0b5a85c6e08dc70b45bde20?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KP~2OEKt9oEPFEnjhrobk54tcRdyMjXhf0rjBueJR3aLs9uGDv8pnwvoNk5bCP~E-EtMi7xyqm27zHOyhqlcjT3~ZM7XN9VThL1DeC9Pc1~bawNJFJwvxmoTgP5TiyfHZgWzlhhxmb~Gz5FI2fV5DB60EFpyhKEgIGvxlvVSYYJNFu7x3vH81~pnVVKutB2db0iIAQYAUIcYSk1V~-gjdH3RK3eW341fjqb0gUhZr5HTFBs2G8NTI9vB7nkK4T~J02GSZZE3Paoz3GbzE7Sl-DsPct~gejfHZGNT-N8fZ1WMWcbEPW21LLow8ZklgKxrFDKm~1mfJerRFiKTGMrXkQ__' },
    { id: '4', name: 'Photo 1.png', size: '2.4 MB', uri: 'https://s3-alpha-sig.figma.com/img/0404/f946/26a4a2e1c0b5a85c6e08dc70b45bde20?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KP~2OEKt9oEPFEnjhrobk54tcRdyMjXhf0rjBueJR3aLs9uGDv8pnwvoNk5bCP~E-EtMi7xyqm27zHOyhqlcjT3~ZM7XN9VThL1DeC9Pc1~bawNJFJwvxmoTgP5TiyfHZgWzlhhxmb~Gz5FI2fV5DB60EFpyhKEgIGvxlvVSYYJNFu7x3vH81~pnVVKutB2db0iIAQYAUIcYSk1V~-gjdH3RK3eW341fjqb0gUhZr5HTFBs2G8NTI9vB7nkK4T~J02GSZZE3Paoz3GbzE7Sl-DsPct~gejfHZGNT-N8fZ1WMWcbEPW21LLow8ZklgKxrFDKm~1mfJerRFiKTGMrXkQ__' },
  ]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <Icon name="keyboard-arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Upload</Text>
        <TouchableOpacity style={styles.iconButton}
        onPress={() => navigation.navigate('Notifications')}>
          <Icon name="notifications-none" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Upload Section */}
      <Text style={styles.sectionTitle}>Upload File or Take Photos</Text>
      <View style={styles.uploadContainer}>
        <TouchableOpacity style={styles.uploadButton}>
          <View style={styles.iconCircle}>
            <Icon name="photo-camera" size={24} color="white" />
          </View>
          <Text>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.uploadButton}>
          <View style={styles.iconCircle}>
            <Icon name="cloud-upload" size={24} color="white" />
          </View>
          <Text>Upload Photo</Text>
        </TouchableOpacity>
      </View>

      {/* Uploading Photos */}
      <Text style={styles.sectionTitle}>Uploading Photos</Text>
      <FlatList
        data={photos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.photoCard}>
            <Image source={{ uri: item.uri }} style={styles.photo} />
            <View style={styles.photoInfo}>
              <Text style={styles.photoName}>{item.name}</Text>
              <Text style={styles.photoSize}>{item.size}</Text>
            </View>
            <TouchableOpacity>
              <Icon name="close" size={20} color="black" />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton}
      onPress={() => navigation.navigate('Dash')}>
        <Text></Text>
        <Text style={styles.nextButtonText}>Next</Text>
        <Icon name="chevron-right" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 1 },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },
  iconButton: { width: 50, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 50, backgroundColor: 'white', elevation: 5 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginVertical: 16, paddingBottom: 10,},
  uploadContainer: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 },
  uploadButton: { alignItems: 'center', flex: 1, marginHorizontal: 5, paddingVertical: 20, backgroundColor: '#f8f8f8', borderRadius: 10, elevation: 3 },
  iconCircle: { width: 50, height: 50, borderRadius: 25, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  photoCard: { flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 3, backgroundColor: '#f8f8f8', borderRadius: 8, marginVertical: 5, elevation:5 },
  photo: { width: 50, height: 50, borderRadius: 8, marginRight: 10 },
  photoInfo: { flex: 1 },
  photoName: { fontSize: 14, fontWeight: 'bold' },
  photoSize: { fontSize: 12, color: '#777' },
  nextButton: { flexDirection: 'row', backgroundColor: 'black', padding: 12, borderRadius: 8, alignItems: 'center', justifyContent: 'space-between', marginTop: 20 },
  nextButtonText: { color: 'white', fontSize: 16, marginRight: 5 },
});

export default UploadScreen;
