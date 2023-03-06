import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import baseApi from '../../../api/baseApi';
import { TENDER_URL } from '../../../api/Urls';
import { useT } from '../../../custom/hooks/useT';


const Tenddetails = () => {
    const { id } = useParams();
    const { t, lang } = useT();
    const [isLoading, setisLoading] = useState(true);
    const [Tender, setTender] = useState([]);

    const getTender = useCallback(
        async () => {
            baseApi.fetchAll(TENDER_URL)
                .then(response => {
                    setTender(response.data);
                    setisLoading(false);
                })
        }, [])

    useEffect(() => {
        getTender()
    }, []);

    return (
        <section className='text-section'>
            <div className='container-fluid pl-5 pr-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`tendrTanlov.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {
                        isLoading ? <h5>{t(`load.${lang}`)}....</h5> : Tender.filter(item => item.created_at == id).map(card => (
                            <div className='col-8 '>
                                <div key={card.created_at} className="card mb-3 p-3">
                                    <h5 className="card-title mb-3 text-dark">{card.title}</h5>
                                    <img src={card.image} className="card-img-top w-100" alt="image" />
                                    <div className="card-body">
                                        <p className="card-text">{card.content}</p>
                                        <h5 className="card-title text-dark">{t(`terms.${lang}`)}</h5>
                                        <p className="card-text">{card.terms_of_participation}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Tenddetails;
