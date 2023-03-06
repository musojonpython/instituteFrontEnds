import React from 'react';
import { useT } from '../../../custom/hooks/useT';

const SuvXojalikFidoiylari = () => {

    const { t, lang } = useT();

    const letters = t(`FidoiyP.${lang}`).split('\n')

    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`Fidoiy.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-5'>
                    <div className='col'>
                        <h5 className='mt-3 mb-3'>{t(`FidoiyT.${lang}`)}</h5>
                    </div>
                </div>
                <div className='row pl-3 pr-3'>
                    <div className='col'>
                        {
                            letters.map((item, inx) => (
                                <p key={inx}>{item}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SuvXojalikFidoiylari;
