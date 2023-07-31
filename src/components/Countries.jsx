import React from "react";
import countries from "../countries.json"

function Countries({ searchQuery }) {
    return (
        <div className="row">
                {
                    countries.filter(country => country.name.toLowerCase().includes(searchQuery.toLowerCase())).map((country) => {
                        const flagUrl = `/flags/${country.alpha2}.png`;


                        return (
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={country.id}>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={flagUrl} className="card-img-top" alt={`${country.name}'s flag`} />
                                    <div className="card-body">
                                        <p className="card-text">{country.name}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default Countries;
