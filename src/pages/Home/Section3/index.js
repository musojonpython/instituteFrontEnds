import React from 'react';
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
                        <div className='sta-item text-center'>
                            <img className="image-style" src="./earth-day.png" alt='Ecology'/>
                            <div className='sta-number-text'>
                                <h3>51</h3>
                                <p>Tugatilgan loyhalar</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-4'>
                        <div className='sta-item text-center'>
                        <img className="image-style" src="./green.png" alt='Ecology'/>
                            <div className='sta-number-text'>
                                <h3>50</h3>
                                <p>Atrof muhitni muhofaza qilishda erishilgan yutuqlar</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-4'>
                        <div className='sta-item text-center'>
                        <img className="image-style" src="./agriculture.png" alt='Ecology'/>
                            <div className='sta-number-text'>
                                <h3>15</h3>
                                <p>Hamkorlikda erishilgan ijobiy natijalar.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-4'>
                        <div className='sta-item text-center'>
                        <img className="image-style" src="./tree.png" alt='Ecology'/>
                            <div className='sta-number-text'>
                                <h3>45</h3>
                                <p>Targ'ibot va tashbiqot ishlari.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section3Home;
