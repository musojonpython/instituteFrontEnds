import React from 'react';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ComputerIcon from '@mui/icons-material/Computer';
import GroupIcon from '@mui/icons-material/Group';
import './style.css';
import {useT} from '../../../custom/hooks/useT';

const Section3Home = () => {

    const { t, lang } = useT();

    return (
        <section className='statistikaHomeSection w-100 text-black'>
            <div className='row main-title text-center bgsta'>
                <div className='col'>
                    <h1  className='mb-4 mt-4 text-black'>{t(`Statistics.${lang}`)}</h1>
                </div>
            </div>
            <div className="container">
                <div className='row sta pt-4 pb-4'>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-4'>
                    
                    <div class="w-60 h-60 rounded-full border-2 border-red flex justify-center items-center">
                        <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"></path>
                        </svg>
                        <p>258.154 </p> 
                        <p>Himoyadagi qushlar</p>
                    </div>

                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-4'>
                        <div className='sta-item text-center'>
                            <GroupIcon sx={{ fontSize: "60px", marginBottom: "20px" }} />
                            <div className='sta-number-text'>
                                <h3>138</h3>
                                <p>Jami ishchilar soni.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-4'>
                        <div className='sta-item text-center'>
                            <ComputerIcon sx={{ fontSize: "60px", marginBottom: "20px" }} />
                            <div className='sta-number-text'>
                                <h3>16</h3>
                                <p>Jami kompyuter soni</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-4'>
                        <div className='sta-item text-center'>
                            <BusinessCenterIcon sx={{ fontSize: "60px", marginBottom: "20px" }} />
                            <div className='sta-number-text'>
                                <h3>327</h3>
                                <p>Jami gidrotexnik inshoatlar soni.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default Section3Home;
