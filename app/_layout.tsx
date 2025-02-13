import { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme, Platform } from 'react-native';
import { ErrorBoundary } from '../components/ErrorBoundary';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (Platform.OS === 'web' && isClient) {
      const loadWebDependencies = async () => {
        try {
          // Web-specific dependencies will only load on client-side
          if (typeof document !== 'undefined') {
            // Load web-specific dependencies here if needed
          }
        } catch (error) {
          console.error('Failed to load web dependencies:', error);
        }
      };

      loadWebDependencies();
    }
  }, [isClient]);

  return (
    <ErrorBoundary>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ErrorBoundary>
  );
}