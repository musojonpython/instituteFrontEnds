import React from 'react';
import { useT } from '../../../custom/hooks/useT';
import './style.css'

const Faoliyat2 = () => {

    const {t, lang} = useT();

    let letter = t(`Aboutfaoliyat11.${lang}`).split('\n');

    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`faoliyat11.${lang}`)}</h3>
                            {/* <div className='text-title-line'></div> */}
                        </div>
                    </div>
                </div>
                <div className='row pl-5'>
                    <div className='col'>
                        {/* <h5 className='mt-3 mb-3'>{t(`faoliyat11.${lang}`)}</h5> */}
                        {/* <h4 className='text-center mb-4 mt-4'>{t(`faoliyat11.${lang}`)}</h4> */}
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

export default Faoliyat2;
