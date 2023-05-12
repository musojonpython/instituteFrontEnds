import React from 'react';
import { useT } from '../../../custom/hooks/useT';
import { Table } from 'react-bootstrap'

const JismoniyYuridikShaxslar = () => {
    const { t, lang } = useT();

    const letters = t(`OQonunText.${lang}`).split('\n');

    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`Jismoniy.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-5'>
                    <div className='col'>
                        <h5 className='mt-3 mb-3 text-center'>{t(`JismoniyT.${lang}`)}</h5>
                    </div>
                </div>
                <div className='row pl-3 pr-3'>
                    <div className='col-12 my-3'>
                        <h5 className='text-center'>{t(`JismoniyJ.${lang}`)}</h5>
                    </div>
                    <div className='col-12 mx-auto'>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>{t(`lav.${lang}`)}</th>
                                    <th>{t(`fio.${lang}`)}</th>
                                    <th>{t(`accceptDate.${lang}`)}</th>
                                    <th>{t(`accceptTime.${lang}`)}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t(`HeadDepartment.${lang}`)}</td>
                                    <td>{t(`JismoniyJ1.name.${lang}`)}</td>
                                    <td>{t(`JismoniyJ1.day.${lang}`)}</td>
                                    <td>{t(`JismoniyJ1.time.${lang}`)}</td>
                                </tr>
                                <tr>
                                    <td>{t(`HeadDepartmentDeputy.${lang}`)}</td>
                                    <td>{t(`JismoniyJ2.name.${lang}`)}</td>
                                    <td>{t(`JismoniyJ2.day.${lang}`)}</td>
                                    <td>{t(`JismoniyJ2.time.${lang}`)}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <h5>{t(`OQonun.${lang}`)}</h5>
                        <h5 className='text-center my-3'>{t(`OQonunT.${lang}`)}</h5>
                        <p>
                            {letters.map((item, inx) => <p key={inx}>{item}</p>)}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default JismoniyYuridikShaxslar;
