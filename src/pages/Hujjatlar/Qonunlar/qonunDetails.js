import React from 'react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Link, useParams } from 'react-router-dom';
import { useT } from '../../../custom/hooks/useT';



export default function QonunDetails() {

    const { id } = useParams();
    const {t, lang} = useT();

    const qonunlar = [
        {
            id: 1,
            title: t(`qonun1.${lang}`),
            docxUrl: "./files/qonunlar 1 СУВ ВА СУВДАН ФОЙДАЛАНИШ ТЎҒРИСИДА.docx",
            lexUrl: "https://lex.uz/docs/12328",
            date: "1993-05-06",
            number: "837-XII"
        },
        {
            id: 2,
            title: t(`qonun2.${lang}`),
            docxUrl: "./files/qonunlar 1 СУВ ВА СУВДАН ФОЙДАЛАНИШ ТЎҒРИСИДА.pdf",
            lexUrl: "https://lex.uz/docs/84823",
            date: "1999-08-20",
            number: "826-I"
        },
    ]

    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`laws.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-5 pr-5'>
                    {
                        qonunlar && qonunlar.filter(qonun => qonun.id == id).map(item => (
                            <div className='col-12 mb-4 p-2'>
                                <h5>{item.title}</h5>
                                <div className='qonun-date d-flex justify-content-between align-items-center mb-5'>
                                    <div>
                                        <span className='p-1 bg-secondary text-white'>{t(`RDate.${lang}`)}: {item.date}</span>
                                        <span className='p-1 bg-secondary text-white ml-3'>{t(`Number.${lang}`)}: {item.number}</span>
                                    </div>
                                    <div>
                                        <a href={item.lexUrl} className='text-decoration-none font-italic'>{t(`lex.${lang}`)}</a>
                                        <a href={item.docxUrl} target="_blank" rel="noopener noreferrer">
                                            <button className='btn btn-success ml-3' type="button">
                                                <FileDownloadIcon /> {t(`download.${lang}`)}
                                            </button>
                                        </a>
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
