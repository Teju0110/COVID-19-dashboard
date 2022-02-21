import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Statewise =()=>{

    const[data,setData]=useState([]);

    useEffect(()=>{
        getCovidData()
    },[]
    );

    const getCovidData = async () =>{
        const res=await fetch('https://data.covid19india.org/data.json');
        const actualData =await res.json();

        console.log((actualData.statewise))

        setData(actualData.statewise)

    }

    return (
        <>
        <div className='container-fluid mt-5'>
              
        <h1 className='mb-5 text-center'>INDIA  COVID-19 Dashboard</h1>

        <div className='table-responsive'>
            <table className='table table-hover'>
                <thead >
                    <tr>
                        <th>State</th>
                        <th>Confirmed</th>
                        <th>Recovered</th>
                        <th>Death</th>
                        <th>Active</th>
                        <th>Updated</th>
                    </tr>

                </thead>

                <tbody>

                    {
                        data.map((currElem, ind)=>{
                            return(
                                <tr>
                        <td>{currElem.state}</td>
                        <td>{currElem.confirmed}</td>
                        <td>{currElem.recovered}</td>
                        <td>{currElem.deaths}</td>
                        <td>{currElem.active}</td>
                        <td>{currElem.lastupdatedtime}</td>
                    </tr>

                            )
                        })
                    }
                
                </tbody>
            </table>

        </div>

        </div>


        </>
    )

}

export default Statewise;