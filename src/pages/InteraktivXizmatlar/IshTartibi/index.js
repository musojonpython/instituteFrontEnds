import React from 'react';
import { useT } from '../../../custom/hooks/useT';

const IshTartibi = () => {

    const { t, lang } = useT();

    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`ishTartib.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-3 pr-3'>
                    <div className='col'>
                        <p>{t(`ishTartib1.${lang}`)}</p>
                        <p>{t(`ishTartib2.${lang}`)}</p>
                        <p>{t(`ishTartib3.${lang}`)}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IshTartibi;
