import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { useT } from '../../../custom/hooks/useT';
import baseApi from '../../../api/baseApi';
import { TENDER_URL } from '../../../api/Urls';

const TenderTanlovlar = () => {

    const { t, lang } = useT();
    const [isLoading, setisLoading] = useState(true);
    const [ Tender, setTender ] = useState([]);

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
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`tendrTanlov.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {
                        isLoading ? <h5>{t(`load.${lang}`)}....</h5> : Tender.map((item) => (
                            <div key={item.created_at} className='col-12 mb-3'>
                                <div className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={item.image} className="img-fluid rounded-start" alt="image"/>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <Link to={`${item.created_at}`} className="card-title"><h5 className='text-dark'>{item.title}</h5></Link>
                                                <p className="card-text">
                                                    {item.content.slice(0, 350)}...
                                                </p>
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

export default TenderTanlovlar;
