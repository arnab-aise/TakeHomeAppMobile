/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { KeyboardAvoidingView, StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        enabled={true} 
        behavior="padding"
        // keyboardVerticalOffset={75}
        style={{ flex: 1 }}
        >
      <WebView
        source={{ uri: 'https://takehomeapp.com' }}
        style={{ flex: 1 }}
        nestedScrollEnabled
      />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
