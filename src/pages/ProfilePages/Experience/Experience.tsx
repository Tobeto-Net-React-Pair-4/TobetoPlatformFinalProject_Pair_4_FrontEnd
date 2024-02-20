import React from 'react'
import ProfileEdit from '../../ProfileEdit/ProfileEdit'
import { Grid, Input, Radio, TextArea } from 'semantic-ui-react'
import DropdownCity from '../../../components/Dropdown/DropdownCity'


const Experience = () => {
    return (
        <>
            
                <Grid.Row>
                </Grid.Row>
                <Grid.Row className='mt-6' >
                    <Grid container columns={2} relaxed stackable>
                        <Grid.Column  >
                            <Grid.Row  >
                                <h4>Kurum Adı</h4>
                            </Grid.Row>
                            <Grid.Row  >
                                <Input focus placeholder='Kampüs 365' />
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column >
                            <Grid.Row  >
                                <h4>Pozisyon</h4>
                            </Grid.Row>
                            <Grid.Row  >
                                <Input focus placeholder='Front-End Developer' />
                            </Grid.Row>
                        </Grid.Column>
                        <br></br>
                        <Grid.Column  >
                            <Grid.Row  >
                                <h4>Sektör</h4>
                            </Grid.Row>
                            <Grid.Row  >
                                <Input focus placeholder='Yazılım' />
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column >
                            <Grid.Row  >
                                <h4>Şehir Seçiniz</h4>
                            </Grid.Row>
                            <Grid.Row  >
                                <DropdownCity />
                            </Grid.Row>
                        </Grid.Column>
                        <br></br>
                        <Grid.Column  >
                            <Grid.Row  >
                                <h4>İş Başlangıcı</h4>
                            </Grid.Row>
                            <Grid.Row  >
                                <Input focus placeholder='SoyAdınız' type='date' />
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column >
                            <Grid.Row  >
                                <h4>İş Bitiş</h4>
                            </Grid.Row>
                            <Grid.Row  >
                                <Input focus placeholder='SoyAdınız' type='date' />
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column  >
                        </Grid.Column>
                        <Grid.Column  ><Radio label='Çalışmaya Devam Ediyorum' /></Grid.Column>
                    </Grid>
                    <Grid container columns={1} relaxed stackable>
                        <br></br>
                        <Grid.Column  >
                            <Grid.Row  >
                                <h4>İş Açıklaması</h4>
                            </Grid.Row>
                            <Grid.Row >
                                <TextArea focus placeholder='' style={{ minHeight: 100 }} />
                            </Grid.Row>
                        </Grid.Column>
                    </Grid>
                </Grid.Row>
            
        </>
    )
}

export default Experience