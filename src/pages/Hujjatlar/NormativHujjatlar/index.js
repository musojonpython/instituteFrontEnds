import React from 'react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Link } from 'react-router-dom';


const qonunlar = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/assets/files/1.docx",
        body: [
            {
                id: 1,
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio."
            },
            {
                id: 2,
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio."
            },
            {
                id: 3,
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 3",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio."
            },
            {
                id: 4,
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 4",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio."
            },
        ]
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 2",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/assets/files/1.docx",
        body: [
            {
                id: 1,
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio."
            },
            {
                id: 2,
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio."
            },
            {
                id: 3,
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 3",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio."
            },
            {
                id: 4,
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 4",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio."
            },
        ]
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 3",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/assets/files/1.docx",
        body: [
            {
                id: 1,
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio."
            },
            {
                id: 2,
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio."
            },
            {
                id: 3,
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 3",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio."
            },
            {
                id: 4,
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 4",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio."
            },
        ]
    },
    {
        id: 4,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio. 4",
        date: "10.15.2000",
        number: "100-1",
        lexUrl: "https://lex.uz/docs/12328",
        docxUrl: "/assets/files/1.docx",
        body: [
            {
                id: 1,
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio."
            },
            {
                id: 2,
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio."
            },
            {
                id: 3,
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 3",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio."
            },
            {
                id: 4,
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 4",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis et tincidunt vitae sed aliquam vulputate mauris lobortis mauris. Lectus mattis mi amet odio."
            },
        ]
    },
]


const NormativeHujjatlar = () => {
    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>Normativ Hujjatlar</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-5 pr-5'>
                    {
                        qonunlar.map(item => (
                            <div key={item.id} className='col-12 mb-4 p-2'>
                                <Link className='text-dark text-decoration-none' to={`${item.id}`}>
                                    <h6>{item.title}</h6>
                                </Link>
                                <div className='qonun-date d-flex justify-content-between align-items-center'>
                                    <div>
                                        <span className='p-1 bg-secondary text-white'>Ro’yxatdan o’tish sanasi: {item.date}</span>
                                        <span className='p-1 bg-secondary text-white ml-3'>Raqami {item.number}</span>
                                    </div>
                                    <div>
                                        <a href={item.lexUrl} className='text-decoration-none font-italic'>Lex.uz da o’qish</a>
                                        <a href={item.docxUrl} target="_blank" rel="noopener noreferrer">
                                            <button className='btn btn-success ml-3' type="button">
                                                <FileDownloadIcon /> Yuklab olish
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
    );
}

export default NormativeHujjatlar;
