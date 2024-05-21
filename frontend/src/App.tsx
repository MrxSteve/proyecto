//import Game from './components/game';
import { AppWrapper } from './components/wrappers';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loading from "./components/loading";

const Lobby = lazy(() => import("./pages/lobby"));
const GamePage = lazy(() => import("./pages/game"));

//typeGame="FRIEND" initialTurn={1}
const App = () => {
  return (
    <AppWrapper> 
      <Suspense fallback={<Loading/>}>
        {/* <Game/>  */}
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Lobby />} />
            <Route path="/" index element={<Lobby />} />
            <Route path="/game/:type" index element={<GamePage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </AppWrapper>
  );
}

export default React.memo(App);
