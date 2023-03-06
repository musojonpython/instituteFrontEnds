import React from 'react';
import { Table } from 'react-bootstrap';
import { useT } from '../../../custom/hooks/useT';


const AxborotFoydalanuvchisi = () => {

    const { t, lang } = useT();

    const datas = [
        {
            name: t(`SName1.${lang}`),
            position: t(`SPosition1.${lang}`),
            phone: " 73-542-21-28  /	99-987-45-50",
            email: "soqtepa@umail.uz"
        },
        {
            name: t(`SName2.${lang}`),
            position: t(`SPosition2.${lang}`),
            phone: " 73-542-28-11  /	90-565-29-66",
            email: "soqtepa@umail.uz"
        },
        {
            name: t(`SName3.${lang}`),
            position: t(`SPosition3.${lang}`),
            phone: " 73-542-21-28   / 90-570-77-60",
            email: "soqtepa@umail.uz"
        },
        {
            name: t(`SName4.${lang}`),
            position: t(`SPosition4.${lang}`),
            phone: " 73-542-21-28  /	97-337-18-09",
            email: "soqtepa@umail.uz"
        },
        {
            name: t(`SName5.${lang}`),
            position: t(`SPosition5.${lang}`),
            phone: " 99-606-48-46",
            email: "soqtepa@umail.uz"
        },
        {
            name: t(`SName6.${lang}`),
            position: t(`SPosition6.${lang}`),
            phone: " 73-542-56-17  /	 90-934-19-00",
            email: "soqtepa@umail.uz"
        },
        {
            name: t(`SName7.${lang}`),
            position: t(`SPosition7.${lang}`),
            phone: " 73-542-32-09   /  99-935-86-40",
            email: "soqtepa@umail.uz"
        }
    ]

    return (
        <section className='text-section w-100'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`sorovnoma.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-5'>
                    <div className='col text-center mb-4'>
                        <h5 className='mt-3 mb-3'>{t(`sorovnomaT.${lang}`)}</h5>
                    </div>
                </div>
                <div className='row pl-3 pr-3 pb-5'>
                    <div className='col-12'>
                        <Table striped bordered hover className='text-center'>
                            <thead>
                                <tr>
                                    <th>№</th>
                                    <th>{t(`fio.${lang}`)}</th>
                                    <th>{t(`lav.${lang}`)}</th>
                                    <th>{t(`PhoneNumber.${lang}`)}</th>
                                    <th>{t(`email.${lang}`)}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    datas.map((item, inx) => (
                                        <tr key={inx}>
                                            <td>{inx+1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.position}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.email}</td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AxborotFoydalanuvchisi;
