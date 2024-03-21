import './App.css';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { DropdownMenu } from './components/DropdownMenu';
import { DropdownMenuProvider } from './components/contexts/DropdownMenuContext';
import { CityWeather } from './components/CityWeather';
import { useState } from 'react';

function App() {
  const [selectedCity, setSelectedCity] = useState<string>('Lisbon');

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <DropdownMenuProvider>
        <div className="App">
          <Header title="Weather app"/>
          <DropdownMenu onCityChange={handleCityChange} selectedCity={selectedCity}/>
          <CityWeather city={selectedCity} />
        </div>
      </DropdownMenuProvider>
    </ThemeProvider>
  );
}

export default App;
