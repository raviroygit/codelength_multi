import {useColorScheme} from 'react-native';
import {DarkTheme, DefaultTheme} from 'react-native-paper';

const FIREHOSE_RED = 'green';

export default function useTheme() {
  const colorScheme = useColorScheme();

  const baseTheme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  const theme = {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      primary: FIREHOSE_RED,
      
    },
  };

  return theme;
}
