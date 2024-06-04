import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles'
import Home from './src/Views/Home';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
    <Home />
    </PaperProvider>
  );
}


