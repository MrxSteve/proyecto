import { AppWrapper } from './components/wrappers';
import React from 'react';

const App = () => {
  return (
    <AppWrapper> 
      <div>hola</div>
    </AppWrapper>
  );
}

export default React.memo(App);
