import React from "react";
import countries from "../countries.json"

function Countries() {
    return (
        <div className="row row-cols-2">
            {countries.map((country) => {
                const flagUrl = `${process.env.PUBLIC_URL}/flags/${country.alpha2}.png`;


                return (
                    <div className="col mb-4" key={country.id}>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={flagUrl} className="card-img-top" alt={`${country.name}'s flag`} />
                            <div className="card-body">
                                <p className="card-text">{country.name}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Countries;
