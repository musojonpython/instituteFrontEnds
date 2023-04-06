import React from 'react';
import { useT } from '../../../custom/hooks/useT';

const BoshqarmaNizomi = () => {

    const { t, lang } = useT();

    let letter = t(`bNizom.${lang}`).split('\n');

    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`bNizomTitle1.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-5'>
                    <div className='col'>
                        <h5 className='mt-3 mb-3'>{t(`bNizomTitle2.${lang}`)}</h5>
                    </div>
                </div>
                <div className='row pl-3 pr-3'>
                    <div className='col'>
                        <p>
                            {
                                letter.map((item) => (
                                    <>
                                        {item} <br />
                                    </>
                                ))
                            }
                        </p>
                        <div className='d-flex justify-content-between fw-bold mt-3 mb-3'>
                            <span>{t(`bNizomTitleBottom.${lang}`)}</span>
                            <span>И.Хошимов</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BoshqarmaNizomi;
