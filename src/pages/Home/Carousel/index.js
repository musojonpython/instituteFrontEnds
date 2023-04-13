import React from 'react';
import PetsIcon from '@mui/icons-material/Pets';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { Carousel, Navbar } from 'react-bootstrap';
import GrassIcon from '@mui/icons-material/Grass';
import Weather from '../WeatherPage';
import NavbarMain from "../../Navbar"
import './style.css';

const Carousels = () => {
    return (
    <div>
      
        <div class="container-fluid p-0" className='w-100 h-100' style={{position: "relative", textAlign: "center", color: "white"}} >
        {/* <Weather /> */}
        <img height='100%' className="d-block w-100" src='./1.png' alt="First slide" />
          
            <div style={{position: 'absolute', top: "4%", left: "47%", transform: "translate(-50%, -50%)", color:"black", width:"38%"}}>
                <Weather />
            </div>
            <div style={{position: "absolute", bottom: "8px", left: "15%"}}>
                <div style={{backgroundColor:"#4894c6", borderRadius: "50%"}}>
                    <div style={{margin: "0 auto", padding: "0 1.4375rem", width: "12.5rem", height: "12.5rem", position: "relative"}}>
                        <div >
                        {/* <LocalFloristIcon style={{fontSize: "5rem",position: "absolute",top: "0", left: "50%",transform: "translateX(-50%)"}} /> */}
                        <img style={{fontSize: "5rem",position: "absolute",top: "0", left: "50%",transform: "translateX(-50%)"}} src="./ecology.png" alt='Ecology'/>
                        </div>
                        <div style={{paddingTop:"50%"}} ><span style={{fontSize:"2.25rem", marginTop:"54%", fontWeight:"500"}}>285,457</span> </div>
                        <div > <span style={{fontSize:"1.125rem", fontWeight:"300"}}>Protected Areas</span> </div>
                    </div>
                </div>
            </div>
          
            <div style={{position: 'absolute', top: "80%", left: "48%", transform: "translate(-50%, -50%)"}}>
              <div style={{backgroundColor:"#9f77c8", borderRadius: "50%", display:"block"}}>
                    <div style={{margin: "0 auto", padding: "0 1.4375rem", width: "12.5rem", height: "12.5rem", position: "relative"}}>
                        <div style={{display:"block"}}>
                        {/* <PetsIcon style={{fontSize: "5rem",position: "absolute",top: "0", left: "50%",transform: "translateX(-50%)"}} /> */}
                        <img style={{fontSize: "5rem",position: "absolute",top: "0", left: "50%",transform: "translateX(-50%)"}} src="./environment.png" alt='Ecology'/>
                        </div>
                        <div style={{paddingTop:"50%"}} ><span style={{fontSize:"2.25rem", marginTop:"54%", fontWeight:"500"}}>285,457</span> </div>
                        <div style={{display:"block"}}> <span style={{fontSize:"1.125rem", fontWeight:"300"}}>Protected Areas</span> </div>
                    </div>
                </div>
            </div>

            <div style={{position: "absolute", bottom: "8px", right: "15%"}}>
                <div style={{backgroundColor:"#e67552", borderRadius: "70%", display:"block"}}>
                    <div style={{margin: "0 auto", padding: "0 1.4375rem", width: "12.5rem", height: "12.5rem", position: "relative"}}>
                        <div style={{display:"block"}}>
                            {/* earth-day */}

                        <img style={{fontSize: "5rem",position: "absolute",top: "0", left: "50%",transform: "translateX(-50%)"}} src="./earth-day.png" alt='Ecology'/>
                        </div>
                        <div style={{paddingTop:"50%"}} ><span style={{fontSize:"2.25rem", marginTop:"54%", fontWeight:"500"}}>285,457</span> </div>
                        <div style={{display:"block"}}> <span style={{fontSize:"1.125rem", fontWeight:"300"}}>Protected Areas</span> </div>
                    </div>
                </div>
            </div>

        </div> 
    </div>
);}

export default Carousels;