import { Header, Grid, Container } from 'semantic-ui-react'
import DropdownLanguage from '../../../components/Dropdown/DropdownLanguage';
import DropdownLevel from '../../../components/Dropdown/DropdownLevel';
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'react-bootstrap';
import MyProfileNavbar from '../../../components/MyProfileNavbar/MyProfileNavbar';
import ProfileEdit from '../../ProfileEdit/ProfileEdit';

const style = {
    h3: {
        marginTop: '2em',
        padding: '2em 0em',
    },
    h1Styles: {

        padding: '1.5em 1.5em',

    },

}
const ForeignLanguage = () => {

    return (
        <>
            <ProfileEdit>
                <Grid container columns={2} relaxed stackable>
                    <Grid.Column  >
                        <DropdownLanguage />
                    </Grid.Column>
                    <Grid.Column >
                        <DropdownLevel />
                    </Grid.Column>
                </Grid>
                <div style={style.h1Styles} >
                    <Button type="submit" className="btn btn-primary    ">
                        Kaydet
                    </Button>
                </div>
            </ProfileEdit>
        </>
    );
}
export default ForeignLanguage;
