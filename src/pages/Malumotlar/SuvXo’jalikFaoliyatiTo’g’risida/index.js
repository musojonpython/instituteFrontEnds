import React from 'react';
import { useT } from '../../../custom/hooks/useT';

const SuvXojalikFaoliyati = () => {
    const { t, lang } = useT()
    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`action.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-3 pr-3'>
                    <div className='col-12 d-flex justify-content-between w-100 align-items-center'>
                        <h5 className='mx-3'>
                        “Сув хўжалиги ҳисобот беради” номли китобнинг электрон шаклини“
                        </h5>
                            <a className='btn btn-success mx-5' href=''>{t(`download.${lang}`)}</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SuvXojalikFaoliyati;
