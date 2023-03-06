import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import baseApi from '../../../api/baseApi';
import { EVENT_URL } from '../../../api/Urls';
import { useT } from '../../../custom/hooks/useT';
import './style.css';
import DateRangeIcon from '@mui/icons-material/DateRange';



const Tadbirlar = () => {
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
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`tadbir.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {
                        isLoading ? <h5>{t(`load.${lang}`)}...</h5> : tadbir.map((item) => (
                            <div key={item.title} className='col-12 mb-3'>
                                <div className="card mb-3 p-2 tad-card">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={item.image} className="img-fluid rounded-start" alt="image"/>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <Link to={`${item.title}`} className="card-title text-dark hover-blue"><h5>{item.title}</h5></Link>
                                                <p className="card-text">Tashkilotchi:  {item.organizer}</p>
                                                <p className="card-text">Boshlanish sanasi: <DateRangeIcon sx={{fontSize: 20}} /> {item.start_date}</p>
                                                <p className="card-text">Tugash sanasi: <DateRangeIcon sx={{fontSize: 20}} /> {item.end_date}</p>
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

export default Tadbirlar;
