import React, { useCallback, useEffect, useState } from 'react';
import baseApi from '../../../api/baseApi'
import { ADULTNEWS_URL } from '../../../api/Urls';
import { useT } from '../../../custom/hooks/useT';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { Link } from 'react-router-dom';

export default function YoshlarYangiliklar() {

    const [loading, setisLoading] = useState(true);
    const { t, lang } = useT();
    const [news, setNews] = useState([])

    const getNews = useCallback(
        async () => {
            baseApi.fetchAll(ADULTNEWS_URL)
                .then(response => {
                    setNews(response.data);
                    setisLoading(false);
                })
        }, [])

    useEffect(() => {
        getNews()
    }, [])

    console.log(news);

    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`yoshlargaOid.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-3 pr-3 pt-4'>

                    {
                        loading ? <h5>{t(`load.${lang}`)}</h5> : news.map((item, inx) => (
                            <div key={inx} className='col-12'>
                                <div className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={item.image} className="img-fluid w-100 h-100 rounded-start" alt="image" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <Link to={`${item.title}`} className='text-decoration-none text-dark hover-primary'><h5 className="card-title">{item.title}</h5></Link>
                                                <p className="card-text">{item.content.slice(0, 190)}...</p>
                                                <p className="card-text"><small className="text-muted"><DateRangeIcon sx={{ fontSize: 20 }} /> {item.created_at.slice(0, 10)} / {item.created_at.substr(11, 5)}</small></p>
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
    )
}
