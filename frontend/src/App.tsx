import Game from './components/game';
import { AppWrapper } from './components/wrappers';
import React from 'react';

const App = () => {
  return (
    <AppWrapper> 
      <div>
        <Game></Game>
      </div>
    </AppWrapper>
  );
}

export default React.memo(App);
