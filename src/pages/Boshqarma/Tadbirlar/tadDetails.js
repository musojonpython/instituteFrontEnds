import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import baseApi from '../../../api/baseApi';
import { EVENT_URL } from '../../../api/Urls';
import { useT } from '../../../custom/hooks/useT';

const TadDetails = () => {
    const { id } = useParams();
    const { t, lang } = useT();
    const [isLoading, setisLoading] = useState(true);
    const [ tadbir, setTadbir ] = useState([]);

    const getTadbir = useCallback(
        async () => {
            baseApi.fetchAll(EVENT_URL)
            .then(response => {
                setTadbir(response.data);
                setisLoading(false);
            })
        }, [])

    useEffect(() => {
        getTadbir()
    }, []);


    return (
        <section className='text-section'>
            <div className='container-fluid pl-5 pr-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`tadbir.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {
                        isLoading ? <h5>{t(`load.${lang}`)}...</h5> : tadbir.filter(item => item.title == id).map(card => (
                            <div key={card.title} className='col-8 mb-3'>
                                <div className="card mb-3 p-3 tad-card border-1">
                                    <div className="row g-0">
                                    <h5 className="card-title mb-3">{card.title}</h5>
                                        <div className="col-12">
                                            <img src={card.image} className="img-fluid rounded-start" alt="image" />
                                        </div>
                                        <div className="col-12">
                                            <div className="card-body">
                                                <p>{card.content}</p>
                                                <div className='d-flex justify-content-between'>
                                                    <p className="fw-bold">Boshlanish sanasi: {card.start_date} </p>
                                                    <p className="card-text fw-bold">Tugash sanasi: {card.end_date}</p>
                                                </div>
                                                <p className="card-text fw-bold">Tashkilotchi: {card.organizer}</p>
                                            </div>
                                        </div>
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

export default TadDetails;
