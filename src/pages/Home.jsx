import React from 'react'
import { useHistory } from "react-router-dom";



function Home() {

    const history = useHistory;

    const handleClick = () => {
        history.push("/Orderpizza")
    }

    return (
        <div className='Main-section'>
            <p style={{ fontFamily: "initial" }}>KOD ACIKTIRIR<br></br>PİZZA,DOYURUR</p>
            <div>
                <button onClick={handleClick} className='main-button' style={{ backgroundColor: "yellow", padding: "5px 13px", fontSize: "1.5rem", border: "none", borderRadius: "30px" }}>ACIKTIM</button>
            </div>

        </div>
    )
}

export default Home
