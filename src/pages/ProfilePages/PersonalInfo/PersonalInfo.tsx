import React from 'react'
import ProfileEdit from '../../ProfileEdit/ProfileEdit'
import { Grid, Icon, Input, TextArea } from 'semantic-ui-react';
import ppImage from "../../../components/Image/13315.png";
import { Image, } from "react-bootstrap";
import DropdownCity from '../../../components/Dropdown/DropdownCity';

const PersonalInfo = () => {
    return (
        <>
            <ProfileEdit>
                <Grid.Row  >
                    <Image
                        className="rounded-circle me-5"
                        src={ppImage}
                        style={{
                            marginLeft: '40%', display: "inline-block",
                            width: "250px",
                            height: "235px",
                            objectFit: "cover",
                            float: 'left',
                        }}
                        alt=""
                    ></Image>
                </Grid.Row>
                <Grid.Row className='mt-6' >
                    <Grid container columns={2} relaxed stackable>
                        <Grid.Column  >
                            <Grid.Row  >
                                <h4>Adınız</h4>
                            </Grid.Row>
                            <Grid.Row  >
                                <Input focus placeholder='Adınız' />
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column >
                            <Grid.Row  >
                                <h4>Soyadınız</h4>
                            </Grid.Row>
                            <Grid.Row  >
                                <Input focus placeholder='SoyAdınız' />
                            </Grid.Row>
                        </Grid.Column>
                        <br></br>
                        <Grid.Column  >
                            <Grid.Row  >
                                <h4><Icon name='flag' color='teal' data-tip='Mesaj gönderile'></Icon>Telefon Numaranız</h4>
                            </Grid.Row>
                            <Grid.Row  >
                                <Input focus placeholder='5** *** ** **' type='tel' />
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column >
                            <Grid.Row  >
                                <h4>Doğum Tarihiniz</h4>
                            </Grid.Row>
                            <Grid.Row  >
                                <Input focus placeholder='SoyAdınız' type='date' />
                            </Grid.Row>
                        </Grid.Column>
                        <br></br>
                        <Grid.Column  >
                            <Grid.Row  >
                                <h4>TC Kimlik No</h4>
                            </Grid.Row>
                            <Grid.Row  >
                                <Input focus placeholder='************' type='number' />
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column >
                            <Grid.Row  >
                                <h4>E-posta</h4>
                            </Grid.Row>
                            <Grid.Row  >
                                <Input focus placeholder='Email' type='email' />
                            </Grid.Row>
                        </Grid.Column>
                    </Grid>
                    <Grid container columns={1} relaxed stackable>
                        <br></br>
                        <Grid.Column  >
                            <Grid.Row  >
                                <h4>Ülke</h4>
                            </Grid.Row>
                            <Grid.Row  >
                                <Input focus placeholder='Ülke' />
                            </Grid.Row>
                        </Grid.Column>
                    </Grid>
                    <Grid container columns={2} relaxed stackable >
                        
                        <Grid.Column  className='pl-6'>
                            <Grid.Row  >
                                <h4>İl</h4>
                            </Grid.Row>
                            <Grid.Row  >
                               <DropdownCity/>
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column >
                            <Grid.Row  >
                                <h4>İlçe</h4>
                            </Grid.Row>
                            <Grid.Row  >
                            <DropdownCity/>
                            </Grid.Row>
                        </Grid.Column>
                    </Grid>
                    <Grid container columns={1} relaxed stackable>
                        <br></br>
                        <Grid.Column  >
                            <Grid.Row  >
                                <h4>Mahalle / Sokak</h4>
                            </Grid.Row>
                            <Grid.Row  >
                                <TextArea focus placeholder='' style={{ minHeight: 100 }}/>
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column  >
                            <Grid.Row  >
                                <h4>Hakkımda</h4>
                            </Grid.Row>
                            <Grid.Row  >
                                <TextArea  focus placeholder='' style={{ minHeight: 100 }}/>
                            </Grid.Row>
                        </Grid.Column>
                    </Grid>
                </Grid.Row>
            </ProfileEdit>
        </>
    )
}

export default PersonalInfo;