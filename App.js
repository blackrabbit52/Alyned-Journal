import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text>Welcome to Alyned Journal</Text>
      <TextInput
        style={styles.editor}
        placeholder="What's on your mind today?"
        multiline
        value={entry}
        onChangeText={setEntry}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCE8EF',
    alignItems: 'center',
    justifyContent: 'center',
  },
   editor: {
    width: '85%',
    minHeight: 160,
    marginTop: 24,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    textAlignVertical: 'top',
  },
});
