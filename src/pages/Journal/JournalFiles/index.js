import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { useState, useEffect, useCallback } from 'react';
import { useT } from '../../../custom/hooks/useT';
import { JOURNALFILES_URL,  } from '../../../api/Urls';
import baseApi from '../../../api/baseApi';

const OchiqMalumot = () => {
    const [journalFiles, setJournalFiles] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const { t, lang } = useT()

    const getJournalFiles = useCallback(
        async () => {
            baseApi.fetchAll(JOURNALFILES_URL)
            .then(response => {
                setJournalFiles(response.data)
                setisLoading(false);
            })
        }, []);
    
    useEffect(() => {
        getJournalFiles();
    }, []);

    return (
        
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`jurnal.${lang}`)}</h3>
                        </div>
                    </div>
                </div>
                <div className='row pl-5'>
                    <Grid container spacing={4} >
                        {
                            isLoading ? <h5>{t(`load.${lang}`)}.....</h5> :
                            journalFiles.map(item => (
                                <Grid item xs={12} md={4} sm={12} >
                                    <div sx={{ maxWidth: 345 }} key={item.id} style={{marginTop:'40px !important', marginBottom:'40px'}} >
                                        <CardMedia
                                            component="img"
                                            alt={item.title}
                                            height="400"
                                            width="400"
                                            image={item.image}/>
                                        <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.description.slice(0, 120)}
                                        </Typography>
                                        </CardContent>
                                        <CardActions>
                                        <a href={item.files}>
                                            <Button size="small">{t(`yuklash.${lang}`)}</Button>
                                        </a>
                                        {/* <Button size="small">Learn More</Button> */}
                                    </CardActions>
                                </div>
                              </Grid>
                            ))
                        }
                    {/* </div> */}
                    </Grid>
                </div>
            </div>
        </section>
    )
}

export default OchiqMalumot;
