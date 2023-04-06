import { CalendarToday } from '@mui/icons-material';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import baseApi from '../../../api/baseApi';
import { ANONC_URL } from '../../../api/Urls';

const ElonDetails = () => {
    const { id } = useParams();
    const [Anonc, setAnonc] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const getAnonc = useCallback(
        async () => {
            baseApi.fetchAll(ANONC_URL)
                .then(response => {
                    setAnonc(response.data)
                    setisLoading(false);
                })
        }, []);

    useEffect(() => {
        getAnonc();
    }, []);

    return (
        <section className='text-section'>
            <div className='container-fluid pl-5 pr-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>E'lonlar</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {
                        isLoading ? <h5>Loading...</h5> : Anonc.filter(item => item.created_at == id).map(card => (
                            <div key={card.created_at} className='col-12 col-md-9 mb-3'>
                                <div className="card mb-3">
                                        <div className='p-2'>
                                            <p className="card-text text-right m-0">
                                                <CalendarToday sx={{fontSize: "18px", color: "gray"}} /> <small className="text-muted">{card.created_at.slice(0, 10)} / {card.created_at.slice(11, 16)}</small>
                                            </p>
                                            <h5 className="card-title text-dark m-2">{card.title}</h5>
                                        </div>
                                    <img src={card.image} className="card-img-top" alt="image" />
                                    <div className="card-body">
                                        <h5>{card.note}</h5>
                                        <p className="card-text">{card.content}</p>
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

export default ElonDetails;
