import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/components/Navigation/Navigation'
import { Provider as PaperProvider } from 'react-native-paper';
import useTheme from './src/utils/Colour/Colour';

export default function App() {

  const theme = useTheme();

  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <Navigation />
      </SafeAreaProvider>
    </PaperProvider>
  );
};