import React from 'react'
import ProfileEdit from '../../ProfileEdit/ProfileEdit'
import { Grid, Input, Radio } from 'semantic-ui-react'
import DropdownEducationLevel from '../../../components/Dropdown/DropdownEducationLevel'
import { Button } from 'react-bootstrap'

type Props = {}

const EducationLife = () => {
    return (
        <>
            <ProfileEdit>
                <Grid.Row  >
                </Grid.Row>
                <Grid.Row className='mt-6' >
                    <Grid container columns={2} relaxed stackable>
                        <Grid.Column  >
                            <Grid.Row  >
                                <h4>Eğitim Durumu</h4>
                            </Grid.Row>
                            <Grid.Row  >
                                <DropdownEducationLevel />
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column >
                            <Grid.Row  >
                                <h4>Üniversite</h4>
                            </Grid.Row>
                            <Grid.Row  >
                                <Input focus placeholder='Kampüs 365' />
                            </Grid.Row>
                        </Grid.Column>
                        <br></br>
                        <Grid.Column  >
                            <Grid.Row  >
                                <h4>Bölüm</h4>
                            </Grid.Row>
                            <Grid.Row  >
                                <Input focus placeholder='Yazılım' />
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column  >
                            <Grid.Row  >
                                <h4>Başlangıç Yılı</h4>
                            </Grid.Row>
                            <Grid.Row  >
                                <Input focus placeholder='Başlangıç Yılınızı Seçiniz' type='date' />
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column >
                            <Grid.Row  >
                                <h4>Mezuniyet Yılı</h4>
                            </Grid.Row>
                            <Grid.Row  >
                                <Input focus placeholder='Mezuniyet Yılı Seçiniz' type='date' />
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column />
                        <Grid.Column><Radio label='Devam Ediyorum' /></Grid.Column>
                        <Grid.Column />
                        <Grid.Column>
                            <Button type="submit" className="btn btn-primary">
                                Kaydet
                            </Button>
                        </Grid.Column>
                    </Grid>
                </Grid.Row>
            </ProfileEdit>
        </>
    )
}

export default EducationLife