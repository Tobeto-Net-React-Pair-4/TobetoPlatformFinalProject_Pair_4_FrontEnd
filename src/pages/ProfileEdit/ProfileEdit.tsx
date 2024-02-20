import React, { ReactNode } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import MyProfileNavbar from '../../components/MyProfileNavbar/MyProfileNavbar'
import { Outlet } from 'react-router-dom'

const style = {
    h3: {
        marginTop: '5em',
        padding: '2em 0em',
    },
    h1Styles: {
        padding: '1.5em 1.5em',
    },

}

const ProfileEdit: React.FC = () => {
    return (
        <div>
            <Container as='h3' style={style.h3}  >
                <Grid container columns={2} divided relaxed stackable>
                    <Grid.Column width={4} >
                        <MyProfileNavbar />
                    </Grid.Column>
                    <Grid.Column width={12} >
                        <Outlet/>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}

export default ProfileEdit