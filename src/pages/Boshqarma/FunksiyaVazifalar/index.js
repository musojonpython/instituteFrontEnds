// import { t } from 'i18next';
import React from 'react';
import { useT } from '../../../custom/hooks/useT';
import './style.css'

const FunksiyaVazifalar = () => {

    const {t, lang} = useT();

    let letter = t(`bfunksiyaHaqida.${lang}`).split('\n');

    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`bfunksiyavazifa.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-5'>
                    <div className='col'>
                        <h5 className='mt-3 mb-3'>{t(`bFunksiyaTitle2.${lang}`)}</h5>
                    </div>
                </div>
                <div className='row pl-3 pr-3'>
                    <div className='col'>
                        {
                            letter.map(item => (
                                <p key={item} style={{textIndent: "30px", marginBottom: "20px"}}>
                                {item}<br/>
                                </p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FunksiyaVazifalar;
