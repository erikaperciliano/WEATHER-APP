import { render, screen, fireEvent  } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Importing extend-expect for custom matchers

import App from '../App';
import { SunriseSunset } from '../components/SunriseSunset/indext';
import { TemperatureToogle } from '../components/TemperatureToggle';
import { Header } from '../components/Header';


    describe('<App/>', () => {
        it('renders the header with correct title', () => {
            render(<App />);
            
            const headerTitle = screen.getByText('Weather app');
            
            expect(headerTitle).toBeInTheDocument();
        });
    });

    describe('Header', () => {
        it('renders title correctly', () => {
            const title = 'Test Header';

            render(<Header title={title} />);

            expect(screen.getByText(title)).toBeInTheDocument();
        });
    });

    describe('SunriseSunset', () => {
        it('renders sunrise and sunset times correctly', () => {
        const sunrise = '6:30 AM';
        const sunset = '6:30 PM';
    
        render( <SunriseSunset sunrise={sunrise} sunset={sunset} />);
    
        expect(screen.getByText(new RegExp(`Sunrise: ${sunrise}`))).toBeInTheDocument();
        expect(screen.getByText(new RegExp(`Sunset: ${sunset}`))).toBeInTheDocument();
        });
    });

    describe('TemperatureToggle', () => {
        it('renders toggle button', () => {
        const onToggleMock = jest.fn();

        render(<TemperatureToogle isCelsius={true} onToggle={onToggleMock} />);

        expect(screen.getByText('Toggle')).toBeInTheDocument();
    });
    
        it('calls onToggle function when button is clicked', () => {
        const onToggleMock = jest.fn();
    
        render(<TemperatureToogle isCelsius={true} onToggle={onToggleMock} />);
    
        const toggleButton = screen.getByText('Toggle');
    
        fireEvent.click(toggleButton);
    
        expect(onToggleMock).toHaveBeenCalledTimes(1);
    });
});


