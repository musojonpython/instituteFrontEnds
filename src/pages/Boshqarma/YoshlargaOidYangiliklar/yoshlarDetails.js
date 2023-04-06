import React, { useCallback, useEffect, useState} from 'react';
import baseApi from '../../../api/baseApi'
import { ADULTNEWS_URL } from '../../../api/Urls';
import { useT } from '../../../custom/hooks/useT';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { Person } from '@mui/icons-material';
import { useParams } from 'react-router-dom';

export default function YoshlarDetails() {

    const [loading, setisLoading] = useState(true);
    const {t, lang} = useT();
    const [news, setNews] = useState([]);
    const { id } = useParams()

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
                        loading ? <h5>{t(`load.${lang}`)}</h5> : news.filter(card => card.title == id).map((item, inx) => (
                            <div className='col-12'>
                            <div className="card border-0 mb-3">
                                <div className="row g-0 justify-content-center">
                                    <div className="col-md-8">
                                        <img src={item.image} className="img-fluid w-100 h-100 rounded-start" alt="image" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.content}</p>
                                            <div className='d-flex justify-content-between'>
                                            <p className="card-text"><small className="text-muted"><DateRangeIcon sx={{fontSize: 20}} /> {item.created_at.slice(0,10)} / {item.created_at.substr(11,5)}</small></p>
                                            <p className="card-text"><small className="text-muted"><Person sx={{fontSize: 20}} /> {item.author}</small></p>
                                            </div>
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
