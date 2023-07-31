import React from "react";
import countries from "../countries.json"

function Countries({ searchQuery }) {
    return (
        // <div className="main">

            <div className="grid-container">
                {
                    countries.filter(country => country.name.toLowerCase().includes(searchQuery.toLowerCase())).map((country) => {
                        const flagUrl = `/flags/${country.alpha2}.png`;


                        return (
                            <div className="card" style={{ width: '18rem', height: '22rem' }} key={country.id}>
                                <img src={flagUrl} className="card-img-top" alt={`${country.name}'s flag`} />
                                <div className="card-body">
                                    <p className="card-text">{country.name}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        // </div>
    )
}

export default Countries;
