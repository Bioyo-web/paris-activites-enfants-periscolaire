import React from 'react';
import { SafeAreaView } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import GDPRConsent from './src/components/GDPRConsent';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GDPRConsent />
      <HomeScreen />
    </SafeAreaView>
  );
}
