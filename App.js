import { StatusBar } from 'expo-status-bar';
import { Animated, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect, useRef, useState } from 'react';

import LoginScreen from './LoginScreen';

export default function App() {
  const [text, setText] = useState('')
  const [showJournal, setShowJournal] = useState(false);

  const float = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(float, {
          toValue: -12,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(float, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => animation.stop();
  }, [float]);

  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        <Animated.Text
          style={[styles.star, { top: '12%', left: '15%', transform: [{ translateY: float }] }]}
        >
          ✦
        </Animated.Text>

        <Animated.Text
          style={[styles.star, { top: '25%', right: '12%', transform: [{ translateY: float }] }]}
        >
          ✧
        </Animated.Text>

        <Animated.Text
          style={[styles.star, { bottom: '18%', left: '20%', transform: [{ translateY: float }] }]}
        >
          ✦
        </Animated.Text>
      </View>
      <Text style={styles.title}>Alyned Journal</Text>
      <Text style={styles.subtitle}>A little space just for you</Text>

      {showJournal ? (
        <>
          <TextInput
            style={styles.editor}
            placeholder="What's on your mind today?"
            multiline
            value={text}
            onChangeText={setText}
          />

          <Pressable onPress={() => setShowJournal(false)}>
            <Text style={styles.backLink}>Back to sign-in preview</Text>
          </Pressable>
        </>
      ) : (
        <LoginScreen onPreview={() => setShowJournal(true)} />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Georgia',
    fontSize: 32,
    color: '#752F4A',
    letterSpacing: 1,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 15,
    color: '#855D6B',
  },
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
  star: {
    position: 'absolute',
    fontSize: 20,
    color: '#C97A98',
  },
  backLink: {
    marginTop: 16,
    color: '#752F4A',
    fontSize: 15,
  },
});
