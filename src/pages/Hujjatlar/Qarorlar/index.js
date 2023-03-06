import React, {useEffect, useState} from 'react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Link, useLocation } from 'react-router-dom';
import { useT } from '../../../custom/hooks/useT';
import { Pagination, Stack, Typography } from "@mui/material";

const Qonunlar = () => {
  const { t, lang } = useT();
    const [page, setPage] = useState(1);
    const pages = page * 10;
    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [pages])

  
const qonunlar = [
  {
      id: 1,
      title: t(`laws1.${lang}`),
      date: "",
      number: "",
      lexUrl: "https://lex.uz/docs/4660031",
      docxUrl: "/files/1.pdf",
  },
  {
      id: 2,
      title: t(`laws2.${lang}`),
      date: " 2021-09-17",
      number: "ВМҚ-573",
      lexUrl: "Https://lex.uz/docs/12328",
      docxUrl: "/files/1.docx",
  },
  {
      id: 3,
      title: t(`laws3.${lang}`),
      date: "2021-02-23",
      number: "ВМҚ-95",
      lexUrl: "https://lex.uz/docs/5304846",
      docxUrl: "/files/3.pdf",
  },
  {
      id: 4,
      title: t(`laws4.${lang}`),
      date: "2020-07-30",
      number: "ВМҚ-459",
      lexUrl: "https://lex.uz/docs/4923635",
      docxUrl: "/files/4.pdf",
  },
  {
      id: 5,
      title: t(`laws5.${lang}`),
      date: "2020-06-01",
      number: "ВМҚ-344",
      lexUrl: "https://lex.uz/docs/4837718",
      docxUrl: "/files/5.docx",
  },
  {
      id: 6,
      title: t(`laws6.${lang}`),
      date: "2020-03-13",
      number: " ВМҚ-155",
      lexUrl: "https://lex.uz/docs/4763675",
      docxUrl: "/files/6.pdf",
  },
  {
      id: 7,
      title: t(`laws7.${lang}`),
      date: "2018-12-26",
      number: "ВМҚ-1042",
      lexUrl: "https://lex.uz/docs/4127478",
      docxUrl: "/files/7.docx",
  },
  {
      id: 8,
      title: t(`laws8.${lang}`),
      date: "2018-12-03",
      number: "ВМҚ-978",
      lexUrl: "https://lex.uz/docs/4092613",
      docxUrl: "/files/8.docx",
  },
  {
      id: 9,
      title: t(`laws9.${lang}`),
      date: " 2018-09-10",
      number: " ВМҚ-714",
      lexUrl: "https://lex.uz/docs/3901290",
      docxUrl: "/files/9.pdf",
  },
  {
      id: 10,
      title: t(`laws10.${lang}`),
      date: "2019-12-25",
      number: "ПҚ-4499",
      lexUrl: "https://lex.uz/docs/4568386",
      docxUrl: "/files/10.pdf",
  },
  {
      id: 11,
      title: t(`laws11.${lang}`),
      date: "2021-04-28 ",
      number: "ПҚ-4699",
      lexUrl: "https://lex.uz/docs/4800657",
      docxUrl: "/files/11.docx",
  },
  {
      id: 12,
      title: t(`laws12.${lang}`),
      date: " 2021-12-11",
      number: "ПҚ-4919",
      lexUrl: "https://lex.uz/docs/5157168",
      docxUrl: "/files/12.docx",
  },
  {
      id: 13,
      title: t(`laws13.${lang}`),
      lexUrl: "https://lex.uz/docs/5360478",
  },
  {
      id: 14,
      title: t(`laws14.${lang}`),
      date: " 2020-01-29",
      number: "45-sonli qaror",
      lexUrl: "https://www.lex.uz/docs/4719060",
      docxUrl: "/files/14.pdf",
  },
  {
      id: 15,
      title: t(`laws15.${lang}`),
      date: " 2020-01-15",
      number: "26-sonli qaror",
      lexUrl: "https://www.lex.uz/search/nat?actnum=26&fyear=2020",
      docxUrl: "/files/15.pdf",
  },
  {
      id: 16,
      title: t(`laws16.${lang}`),
      date: " 2019-10-09",
      number: "ПҚ-4486-sonli qaror",
      lexUrl: "https://www.lex.uz/docs/4545898",
      docxUrl: "/files/16.pdf",
  },
  {
      id: 17,
      title: t(`laws17.${lang}`),
      date: "2019-12-11",
      number: " 981-sonli qaror",
      lexUrl: "https://www.lex.uz/docs/4640429",
      docxUrl: "/files/17.pdf",
  },
  {
      id: 18,
      title: t(`laws18.${lang}`),
      date: " 2019-12-11",
      number: "982-sonli qaror",
      lexUrl: "https://www.lex.uz/docs/4640131",
      docxUrl: "/files/18.pdf",
  }
  ,
  {
      id: 19,
      title: t(`laws19.${lang}`),
      date: "2019-05-17",
      number: "413-sonli qaror",
      lexUrl: "https://www.lex.uz/docs/4342371",
      docxUrl: "/files/19.pdf",
  }
  ,
  {
      id: 20,
      title: t(`laws20.${lang}`),
      date: "2019-06-14",
      number: "497-sonli qaror",
      lexUrl: "https://www.lex.uz/docs/4378340",
      docxUrl: "/files/20.pdf",
  }
  ,
  {
      id: 21,
      title: t(`laws21.${lang}`),
      date: "2019-04-17",
      number: "322-sonli qaror",
      lexUrl: "https://www.lex.uz/docs/4290659",
      docxUrl: "/files/21.pdf",
  },
  {
      id: 22,
      title: t(`laws22.${lang}`),
      date: "2018-03-31",
      number: "255-sonli",
      lexUrl: "http://lex.uz/docs/3646578",
      docxUrl: "/files/22.pdf",
  },
  {
      id: 23,
      title: t(`laws23.${lang}`),
      date: " 2013-06-21",
      number: "176-sonli",
      lexUrl: "http://lex.uz/docs/2191966",
      docxUrl: "/files/23.html",
  },
  {
      id: 24,
      title: t(`laws24.${lang}`),
      date: "2018-12-14",
      number: "1019-son",
      lexUrl: "http://lex.uz/docs/4106932",
      docxUrl: "",
  },
  {
      id: 25,
      title: t(`laws25.${lang}`),
      date: "2018-12-04",
      number: "984-son",
      lexUrl: "http://lex.uz/docs/4092661",
      docxUrl: "/files/25.pdf",
  },
  {
      id: 26,
      title: t(`laws26.${lang}`),
      date: "2018-12-12",
      number: "1008-son",
      lexUrl: "http://lex.uz/docs/4102875",
      docxUrl: "/files/26.pdf",
  },
  {
      id: 27,
      title: t(`laws27.${lang}`),
      date: "2019-02-06",
      number: "ВМҚ-103",
      lexUrl: "http://lex.uz/pdfs/4192469",
      docxUrl: "/files/27.pdf",
  },
  {
      id: 28,
      title: t(`laws28.${lang}`),
      date: "2018-12-27",
      number: "ПҚ-4087",
      lexUrl: "http://lex.uz/docs/4133396",
      docxUrl: "/files/28.pdf",
  },
  {
      id: 29,
      title: t(`laws29.${lang}`),
      date: " 2013-03-19 ",
      number: "ВМҚ-82",
      lexUrl: "http://lex.uz/docs/2145601",
      docxUrl: "/files/29.html",
  },
  {
      id: 30,
      title: t(`laws30.${lang}`),
      date: "2018-04-17",
      number: " ПҚ-3672",
      lexUrl: "http://lex.uz/ru/docs/3687873",
      docxUrl: "/files/30.html",
  },
  {
      id: 31,
      title: t(`laws31.${lang}`),
      date: " 2018-11-29",
      number: "ПҚ-4039",
      lexUrl: "http://lex.uz/docs/4084936",
      docxUrl: "/files/31.pdf",
  },
  {
      id: 32,
      title: t(`laws32.${lang}`),
      date: "2018-07-03 ",
      number: "500",
      lexUrl: "http://lex.uz/docs/3812729",
      docxUrl: "/files/32.docx",
  },
  {
      id: 33,
      title: t(`laws33.${lang}`),
      date: "2017-11-27",
      number: "ПҚ-3405",
      lexUrl: "http://lex.uz/docs/3426211",
      docxUrl: "/files/33.html",
  },
  {
      id: 34,
      title: t(`laws34.${lang}`),
      date: "2018-11-06 ",
      number: "ПҚ-4005",
      lexUrl: "http://lex.uz/docs/4046069",
      docxUrl: "/files/34.html",
  },
  {
      id: 35,
      title: t(`laws35.${lang}`),
      date: " 2017-05-26 ",
      number: "ПҚ-3012",
      lexUrl: "http://lex.uz/docs/3221894",
      docxUrl: "/files/35.html",
  }
]

    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`Decisions.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-5 pr-5 pb-5'>

                    <Stack spacing={2}>
                        {
                                qonunlar.slice(pages-10, pages).map(item => (
                                    <div key={item.id} className='col-12 mb-2 p-2'>
                                        <Link className='text-dark text-decoration-none' to={`${item.id}`}>
                                            <h6>{item.title}</h6>
                                        </Link>
                                        <div className='qonun-date d-flex justify-content-between align-items-center'>
                                            <div>
                                                <span className='p-1 bg-secondary text-white'>{t(`RDate.${lang}`)}: {item.date}</span>
                                                <span className='p-1 bg-secondary text-white ml-3'>{t(`Number.${lang}`)}: {item.number}</span>
                                            </div>
                                            <div>
                                                <a href={item.lexUrl} className='text-decoration-non font-italic' style={{fontStyle: "italic", marginRight: "20px", textDecoration: "none"}}>{t(`lex.${lang}`)}</a>
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
                        <Pagination className='mx-auto' count={Math.ceil(qonunlar.length / 10)} page={page} onChange={handleChange} />
                    </Stack>
                </div>

            </div>
        </section>
    );
}

export default Qonunlar;




// import React from 'react';
// import PaginatedItems from './pagination';

// export default function () {
//   return (
//     <div>
//         <PaginatedItems itemsPerPage={4} />
//     </div>
//   )
// }
