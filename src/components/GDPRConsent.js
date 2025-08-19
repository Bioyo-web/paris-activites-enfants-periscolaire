import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function GDPRConsent() {
  const [accepted, setAccepted] = useState(false);

  if (accepted) return null;

  return (
    <View style={styles.banner}>
      <Text style={{ flex: 1 }}>
        Nous utilisons uniquement vos données locales (favoris). Aucune donnée n’est partagée.
      </Text>
      <Button title="OK" onPress={() => setAccepted(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  banner: { flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#eee' }
});
