import React, { useEffect } from 'react';
import { Connect } from '@stacks/connect-react';
import { Router } from '@reach/router';
import { userDataState, userSessionState, useConnect } from './lib/auth';
import { useAtom } from 'jotai';
import Landing from './pages/Landing';
import HeaderAuth from './components/common/HeaderAuth';
import HeaderLogo from './components/common/HeaderLogo';
import NavBar from './components/common/NavBar';
import HeaderTitle from './components/common/HeaderTitle';
import AustinCoin from './components/cities/AustinCoin';
import MiamiCoin from './components/cities/MiamiCoin';
import NewYorkCoin from './components/cities/NewYorkCoin';
import SanFranciscoCoin from './components/cities/SanFranciscoCoin';

export default function App(props) {
  const { authOptions } = useConnect();
  const [userSession] = useAtom(userSessionState);
  const [, setUserData] = useAtom(userDataState);

  useEffect(() => {
    if (userSession?.isUserSignedIn()) {
      setUserData(userSession.loadUserData());
    } else if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn();
    }
  }, [userSession, setUserData]);

  return (
    <Connect authOptions={authOptions}>
      <div className="container mt-3">
        <div className="row align-items-center justify-content-between text-center mb-3">
          <div className="col-md text-md-start pb-3 pb-md-0">
            <HeaderLogo />
          </div>
          <div className="col-md-6 text-md-center pb-3 pb-md-0">
            <HeaderTitle />
          </div>
          <div className="col-md text-md-end text-nowrap pb-3 pb-md-0">
            <HeaderAuth userSession={userSession} />
          </div>
        </div>
        <hr />
        <div className="row align-items-center">
          <div className="col-md text-md-start pb-3 pb-md-0">
            <a
              href="https://chat.citycoins.co"
              target="_blank"
              rel="noreferrer"
              className="nav-link"
            >
              <i className="bi bi-info-circle"></i> Read the Docs
            </a>
          </div>
          <div className="col-md-6 text-md-center pb-3 pb-md-0">
            <NavBar />
          </div>
          <div className="col-md text-center text-md-end text-nowrap pb-3 pb-md-0">
            <a
              href="https://docs.citycoins.co"
              target="_blank"
              rel="noreferrer"
              className="nav-link"
            >
              <i className="bi bi-discord"></i> Join the Discord
            </a>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col">
            <Content />
          </div>
        </div>
      </div>
    </Connect>
  );
}

function Content() {
  return (
    <>
      <Router>
        <Landing path="/" exact />
        <AustinCoin path="/atx" />
        <MiamiCoin path="/mia" />
        <NewYorkCoin path="/nyc" />
        <SanFranciscoCoin path="/sfo" />
      </Router>
    </>
  );
}
