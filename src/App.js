import styled from "styled-components";
import SideBar from "./Components/SideBar";
import HomePage from "./Pages/HomePage";
import {Route, Routes} from "react-router-dom";
import ResumePage from "./Pages/ResumePage";
import Particle from "./Components/Particles";
import PortfolioPage from "./Pages/PortfoliosPage";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import {IconButton, Switch} from "@mui/material";
import {useEffect, useState} from "react";

import MenuIcon from '@mui/icons-material/Menu';

function App() {
  const [theme, setTheme] = useState('dark-theme')
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false)

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
      setChecked(false);
    } else {
      setTheme('light-theme');
      setChecked(true);
    }
  }

  //comment
  return (
    <div className="App">
      <SideBar navToggle={navToggle}/>
      <div className="theme">
        <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4Icon/>
          </div>
          <div className="right-content">
            <Switch
              value=""
              checked={checked}
              inputProbs={{"aria-label": ""}}
              size="medium"
              onClick={themeToggler}
            />
          </div>
        </div>
      </div>

      <div className="ham-burger-menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon/>
        </IconButton>
      </div>

      <MainContentStyled>
        <Particle/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/resume" element={<ResumePage/>}/>
          <Route path="/portfolio" element={<PortfolioPage/>}/>
        </Routes>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }

  h1 {
    display: flex;
    text-align: center;
    flex-direction: column;
  }

  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 0.4rem;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;
export default App;
