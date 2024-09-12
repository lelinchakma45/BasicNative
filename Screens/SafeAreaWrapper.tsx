// components/SafeAreaWrapper.tsx
import React, { ReactNode } from 'react';
import { SafeAreaView, StyleSheet, View, ViewStyle } from 'react-native';

interface SafeAreaWrapperProps {
  children: ReactNode;
  style?: ViewStyle;
}

const SafeAreaWrapper: React.FC<SafeAreaWrapperProps> = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SafeAreaWrapper;
