import Game from './components/game';
import { AppWrapper } from './components/wrappers';
import React from 'react';

//typeGame="FRIEND" initialTurn={1}
const App = () => {
  return (
    <AppWrapper> 
        <Game/> 
    </AppWrapper>
  );
}

export default React.memo(App);
