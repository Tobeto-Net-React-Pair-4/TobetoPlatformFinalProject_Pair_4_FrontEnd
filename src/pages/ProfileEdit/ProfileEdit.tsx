import React, { ReactNode } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import MyProfileNavbar from '../../components/MyProfileNavbar/MyProfileNavbar'

const style = {
    h3: {
        marginTop: '5em',
        padding: '2em 0em',
    },
    h1Styles: {
        padding: '1.5em 1.5em',
    },

}
interface LayoutProps {
    children: ReactNode;
}
const ProfileEdit: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Container as='h3' style={style.h3}  >
                <Grid container columns={2} divided relaxed stackable>
                    <Grid.Column width={4} >
                        <MyProfileNavbar />
                    </Grid.Column>
                    <Grid.Column width={12} >
                        {children}
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}

export default ProfileEdit