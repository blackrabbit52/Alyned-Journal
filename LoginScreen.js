import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function LoginScreen({ onPreview }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  
    

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Welcome back ✨</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Pressable style={styles.button} onPress={onPreview}>
        <Text style={styles.buttonText}>Preview journal</Text>
    </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '85%',
    marginTop: 20,
  },
  heading: {
    color: '#752F4A',
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
  },
    button: {
    backgroundColor: '#A84F72',
    padding: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});