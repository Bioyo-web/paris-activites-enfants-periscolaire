import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet } from 'react-native';
import activities from '../data/activities.json';
import ActivityCard from '../components/ActivityCard';

export default function HomeScreen() {
  const [search, setSearch] = useState('');

  const filtered = activities.filter(act =>
    act.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activités Périscolaires à Paris</Text>
      <TextInput
        style={styles.input}
        placeholder="Rechercher une activité..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ActivityCard activity={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 15, borderRadius: 8 }
});
