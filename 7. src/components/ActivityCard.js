import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ActivityCard({ activity }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{activity.name}</Text>
      <Text>{activity.day} - {activity.time}</Text>
      <Text>{activity.arrondissement}</Text>
      <Text>Places disponibles : {activity.available ? "Oui" : "Non"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 15, borderWidth: 1, borderColor: '#ddd', marginBottom: 10, borderRadius: 10 },
  name: { fontSize: 18, fontWeight: 'bold' }
});
