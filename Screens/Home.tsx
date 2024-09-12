// Screens/Home.tsx
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper'; // Optionally use react-native-paper for better styling

const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>Welcome to the Home Screen!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    width: '100%',
    padding: 16,
  },
});

export default Home;
