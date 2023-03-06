import React, { useCallback, useEffect, useState } from 'react';
import './style.css';
import baseApi from '../../../api/baseApi';
import {LECTURE_URL} from '../../../api/Urls';
import { useT } from '../../../custom/hooks/useT';

const RahbariyatMaruzalari = () => {

    const [isLoading, setisLoading] = useState(true);
    const [Lecture, setLecture] = useState([]);
    const { t, lang } = useT();

    const getLecture = useCallback(
        async () => {
            baseApi.fetchAll(LECTURE_URL)
                .then(res => {
                    setLecture(res.data);
                    setisLoading(false)
                })
        }, [])

    useEffect(() => {
        getLecture()
    }, [])

    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`maruza.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-3 pr-3'>
                    {
                        isLoading ? <h5>{t(`load.${lang}`)}...</h5> : Lecture.map(item => (
                            <div className='col-12 mb-4'>
                                <a href={item.file} className='text-decoration-none text-dark rah-title'>
                                    {item.title}
                                </a> <br />
                                <h6 className='rah-date'>{item.created_at.slice(0,10)}</h6>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default RahbariyatMaruzalari;
