import React from 'react'
import { useT } from '../../../custom/hooks/useT';

export default function Normative() {
    const { t, lang } = useT()
    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`normative.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-3 pr-3'>
                    <div className='col'>
                        <h5>{t(`normativeT.${lang}`)}</h5>
                        <div >
                            <a className='text-decoration-none px-4 d-inline-block ml-3' href='https://lex.uz/docs/3026246' target={'_blank'}>{t(`lex.${lang}`)}</a>
                            <a href='/files/normativ.pdf' target='_blank'>
                            <button className='btn btn-success' type="button">{t(`download.${lang}`)}</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
