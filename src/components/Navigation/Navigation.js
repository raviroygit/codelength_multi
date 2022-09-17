import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationContent from './NavigationContent';
import RouteLinking from '../RouteLinking/RouteLinking';



const Navigation=()=> {
  return (
      <NavigationContainer linking={RouteLinking}>
        <NavigationContent/>
      </NavigationContainer>

  );
};

export default Navigation;