import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, FlatList, View, Button, Linking } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function App() {

  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    const access = await Contacts.requestPermissionsAsync();
    if (access.granted) {
      // we have permission grab contacts.
      const contactsData = await Contacts.getContactsAsync();
      setContacts(contactsData.data);
    }
  }

  const call = (contact) => {
    let phoneNumber = contact.phoneNumbers[0].digits;
    console.log(phoneNumber);
    // make a phone call on "click"
    const link = `tel:${phoneNumber}`;
    Linking.canOpenURL(link)
      .then(supported => Linking.openURL(link))
      .catch(console.error);
  }

  useEffect(() => {
    getContacts();
  }, [])

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.titleContainer}>
          <Text style={{ fontSize: 20 }}>My Contacts</Text>
        </View>
        <View style={styles.content}>
          <FlatList
            data={contacts}
            keyExtractor={(contact) => contact.id}
            renderItem={({ item }) => <Button title={item.name} onPress={() => call(item)} />}
          />
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 4,
    alignItems: 'center',
  }
});
