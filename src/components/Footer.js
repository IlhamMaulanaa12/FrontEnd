import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook,faTwitterSquare,faYoutube,faLinkedin,} from "@fortawesome/free-brands-svg-icons"


const Footer = () => {
    return (
        <div className="text-center" style={{backgroundColor: "black"}}>
            <div style={{flex: 1, height: '2px', backgroundColor: '#ffc107'}} /><br/>
          <div class="f-flex pt-2">
            <a href="" class="btn btn-outline-light btn-social">
            <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
            <a href="" class="btn btn-outline-light btn-social">
            <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="" class="btn btn-outline-light btn-social">
            <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="" class="btn btn-outline-light btn-social">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div> 
        <h4 className="text-white">©2023 : Fast Food.com</h4><br/>
      </div>
    )
}

export default Footer;