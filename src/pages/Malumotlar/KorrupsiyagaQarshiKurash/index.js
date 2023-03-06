import React from 'react';
import { useT } from '../../../custom/hooks/useT';

const KorrupsiyagaQarshi = () => {

    const { t, lang } = useT();

    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`korrupsiyaTitle.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-3 pr-3'>
                    <div className='col'>
                       <a href='/files/korrupsiya.pdf' className='text-decoration-none text-dark'>
                           <h6>
                               {t(`korrupsiya.${lang}`)}
                           </h6>
                       </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default KorrupsiyagaQarshi;
