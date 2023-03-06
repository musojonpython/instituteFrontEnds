import React from 'react';
import { useT } from '../../../custom/hooks/useT';

const ElektronJamiyat = () => {
    const { t, lang } = useT();
    const letters = t(`ElektronhukumatP.${lang}`).split('\n');
    console.log(letters);
    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`Elektronhukumat.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-5'>
                    <div className='col'>
                        <h5 className='mt-3 mb-3 text-center'>{t(`ElektronhukumatT.${lang}`)}</h5>
                        <h5 className='mt-3 mb-3 text-center'>{t(`ElektronhukumatT2.${lang}`)}</h5>
                    </div>
                </div>
                <div className='row pl-3 pr-3'>
                    <div className='col'>
                        {
                            letters.map((item, inx) => (
                                <p key={inx}>{item}</p>
                            ))
                        }
                        <h6 style={{fontWeight: "600", marginLeft: "auto"}}>{t(`ElektronHukumatA.${lang}`)}</h6>
                    </div>
                </div>
                <div className='row pl-3 pr-3'>
                    <div className='col-12 p-3 text-center'>
                        <p>{t(`ElektronHukumatS.${lang}`)}</p>
                    </div>
                    <div className='col-8 mx-auto'>
                        <img src='/img/elektron.png' alt='image' width='100%'/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ElektronJamiyat;
