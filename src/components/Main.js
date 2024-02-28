import React from "react";
import One from '../assets/1.png';
import Two from '../assets/2.png';
import Three from '../assets/3.png';

const Main=()=> {
    return(
        <>
        <div className="main" style={{ display:'flex', alignItems:'center', padding: '20px'}}>
            <img style={{ marginRight: '70px', maxWidth: '30%', height:'auto' }} src={One} alt=""/>
            <div className="content" style={{ flex: '1' }}>
                <h3> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
                    <ul>
                        <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                        <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                    </ul>
                <img style={{ marginRight: '70px', maxWidth: '100%', height: 'auto' }} src={Two} alt=""/>
                <p>Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
            </div>
        </div>
        <div className="last" style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding: '20px'}}>
            <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
            <img style={{ maxWidth: '80%', height: 'auto' }} src={Three} alt=""/>
            <br/>
            <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
        </div>
        </>
    );
};

export default Main;