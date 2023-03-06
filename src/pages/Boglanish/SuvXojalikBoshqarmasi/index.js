import React from 'react';
import { Table } from 'react-bootstrap';
import { useT } from '../../../custom/hooks/useT';
import './style.css';

const SuvXojalikBoshqarmasi = () => {

    const { t, lang } = useT();

    return (
        <section className='text-section container-fluid' style={{ width: "100%" }}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`AloqaXizmati.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-5'>
                    <div className='col'>
                        <h5 className='mt-3 mb-3'>{t(`AloqaXizmatiT.${lang}`)}</h5>
                    </div>
                </div>
                <div className='row pl-3 pr-3'>
                    <div className='col table-tar'>
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
            </div>
        </section>
    );
}

export default SuvXojalikBoshqarmasi;
