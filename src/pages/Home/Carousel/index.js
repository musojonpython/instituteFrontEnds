// import NavbarHome from "../../Navbar/NavBarHome"
// import BannerHome from "../../Banner/BannerHome"
import React from 'react';
import PetsIcon from '@mui/icons-material/Pets';
import PublicIcon from '@mui/icons-material/Public';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { Carousel } from 'react-bootstrap';
import GrassIcon from '@mui/icons-material/Grass';
import './style.css';

const Carousels = () => {
    return (
    <div>
        <div class="container-fluid p-0" className='w-100 h-100' style={{position: "relative", textAlign: "center", color: "white"}} >
            
            <Carousel>
                <Carousel.Item>
                    <img height='100%' className="d-block w-100" src='./1.jpg' alt="First slide" />
                </Carousel.Item> 
                <Carousel.Item>
                    <img height='100%' className="d-block w-100" src="./2.jpg" alt="Second slide" />
                </Carousel.Item> 
                <Carousel.Item>
                    <img height='100%' className="d-block w-100" src="./3.jpg" alt="Third slide"/>
                </Carousel.Item> 
                <Carousel.Item>
                    <img height='100%' className="d-block w-100" src="./4.jpg" alt="Third slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img height='100%' className="d-block w-100" src="./5.jpg" alt="Third slide"/>
                </Carousel.Item>  
            </Carousel> 
          
            <div style={{position: "absolute", bottom: "8px", left: "15%"}}>
                <div style={{backgroundColor:"#4894c6", borderRadius: "50%"}}>
                    <div style={{margin: "0 auto", padding: "0 1.4375rem", width: "12.5rem", height: "12.5rem", position: "relative"}}>
                        <div >
                        <LocalFloristIcon style={{fontSize: "5rem",position: "absolute",top: "0", left: "50%",transform: "translateX(-50%)"}} />
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
                        <PetsIcon style={{fontSize: "5rem",position: "absolute",top: "0", left: "50%",transform: "translateX(-50%)"}} />
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
                        <GrassIcon style={{fontSize: "5rem",position: "absolute",top: "0", left: "50%",transform: "translateX(-50%)"}} />
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