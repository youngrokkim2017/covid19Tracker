import React from 'react';
import Cards from ' ./components/Cards/Cards';
import Chart from ' ./components/Chart/Chart';
import CountryPicker from ' ./components/CountryPicker/CountryPicker';

class App extends React.Component {
    render() {
        return (
            <div>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App;