import { useState, useEffect } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


const App = () => {

    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            position => setLat(position.coords.latitude),
            err => setErrorMessage(err.message)
        );
    }, []);

    const renderContent = () => {
            if (!errorMessage && lat) {
                return <SeasonDisplay lat={lat} />;
            }
            if (errorMessage && !lat) {
                return <div>Error: {errorMessage}</div>;
            }
            return <Spinner />;
    };

    return (
        <div className="border red">
            {renderContent()}
        </div>
    )

}

export default App;