import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    });

    const lineChart = (
        dailyData.length
            ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [
                        { 
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: "Infected"
                        }, 
                        {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: "Deaths"
                        },
                    ],
                }}
            />
            )
            :
            null
    )
    
    const barChart = (
        confirmed
            ? (
                <Bar 
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                        }],
                        data: [confirmed, recovered, deaths],
                    }}
                    options={{
                        legend: {
                            display: false,
                            title: { 
                                display: true,
                                text: `Current state in ${country}`
                            }
                        }
                    }}
                />
            ) : 
            null
    )

    return (
        <div>
            {country ? 
                barChart
            :
                lineChart
            }
        </div>
    )
}

export default Chart;