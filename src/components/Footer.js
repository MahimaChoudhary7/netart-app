import React from "react";
import { FaPhone, FaFacebook , FaGlobe } from 'react-icons/fa';
import IconButton from "./IconButton";
import "./Footer.css";

const Footer = () => {
    return (
      <footer>
        <div className="footer">
          <hr />
          <h4>C.R.I FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
          <p>
            CHEMICALS & PROCESS <span>|</span> POWER <span>|</span> WATER & WASTE WATER <span>|</span> OILS & GAS <span>|</span> PHARMA <span>|</span> SUGARS & DISTILLERIES <span>|</span> PAPER & PULP <span>|</span> MARINE & DEFENCE <span>|</span> METAL & MINING <span>|</span> FOOD & BEVERAGE <span>|</span>
          </p>
          <p>
            PETROCHEMICALS & REFINERIES <span>|</span> SOLAR <span>|</span> BUILDING <span>|</span> HVAC <span>|</span> FIRE FIGHTING <span>|</span> AGRICULTURE & RESIDENTIAL
          </p>
          <div className="red-div">
                <div className="icon-button" style={{ display:'flex', justifyContent: 'center', alignItems: 'center', height:'100%'}}>
                        <IconButton
                        icon={FaPhone}
                        text="  Toll free 1800 200 1234"
                        style={{ color: 'white', marginRight: '350px' }}
                    />
                        <IconButton
                        icon={FaFacebook}
                        text="  www.facebook.com/cripumps"
                        style={{ color: 'white', marginRight: '350px' }}
                    />
                        <IconButton
                        icon={FaGlobe}
                        text="  www.crigroups.com"
                        style={{ color: 'white' }}
                    />
                </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;