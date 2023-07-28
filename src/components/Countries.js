import React from "react";
import countries from "../countries.json"

function Countries() {
    return (
        <div>
            {countries.map((country) => {
                const flagUrl = `/flags/${country.alpha2}.png`;

                return (
                    <div className="card" style={{ width: '18rem' }} key={country.id}>
                        <div>
                            <img src={flagUrl} className="card-img-top" alt={`${country.name}'s flag`} />
                            <p className="card-text">{country.name}</p>
                        </div>
                    </ div>
                )
            })}
        </div>
    )
} 

export default Countries;