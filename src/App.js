import React from 'react';
import Cards from ' ./components/Cards/Cards';
import Chart from ' ./components/Chart/Chart';
import CountryPicker from ' ./components/CountryPicker/CountryPicker';
import { fetchData } from './api/index'

class App extends React.Component {
    // state = {
    //     data: {}.
    // }

    constructor() {
        this.state = {
            data: {},
            country: '',
        }
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        // console.log(data);

        this.setState({ data: fetchedData });
    }

    async handleCountryChange(country) {
        // fetch date
        const fetchedData = await fetchData(country);

        // set state
        this.setState({ data: fetchedData, country: country })
    }

    render() {
        const { data } = this.state;

        return (
            <div>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange()} />
                <Chart />
            </div>
        )
    }
}

export default App;