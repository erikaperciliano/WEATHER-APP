import logo from './logo.png';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { DropdownMenu } from './components/DropdownMenu';
import { DropdownMenuProvider } from './components/contexts/DropdownMenuContext';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <DropdownMenuProvider>
        <div className="App">
          <Header title="Weather app"/>
          <DropdownMenu />
        </div>
      </DropdownMenuProvider>
    </ThemeProvider>
  );
}

export default App;
