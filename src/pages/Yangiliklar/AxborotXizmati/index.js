import React from 'react';
import { useT } from '../../../custom/hooks/useT';

const AxborotXizmati = () => {
    const { t, lang } = useT();
    return (
        <section className='text-section w-100'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`axborotXizmati.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-5'>
                    <div className='col'>
                        <h5 className='mt-3 mb-3'>Суюнов Шуҳрат Нормахматович – Жамоатчилик ва оммавий ахборот воситалари билан алоқалар шўъбаси бошлиғи, вазирнинг матбуот котиби, ахборот сиёсати масалалари бўйича маслаҳатчиси</h5>
                    </div>
                </div>
                <div className='row pl-3 pr-3'>
                    <div className='col'>
                        <p>Тел: (71) 202-47-84</p>
                        <p>E-mail: press@minwater.uz</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AxborotXizmati;
