import { Header, Grid, Container } from 'semantic-ui-react'
import DropdownLanguage from '../../components/Dropdown/DropdownLanguage';
import DropdownLevel from '../../components/Dropdown/DropdownLevel';
import { Button } from 'react-bootstrap';

const style = {
    h3: {
        marginTop: '2em',
        padding: '2em 0em',
    },

}



const ForeignLanguage = () => {

    return (
        <>
            <Container>
                <Header as='h3' content='' style={style.h3} textAlign='center' />
                <Grid container columns={2} divided relaxed stackable>
                    <Grid.Column>
                        <DropdownLanguage />
                    </Grid.Column>
                    <br></br>
                    <Grid.Column>
                        <DropdownLevel />
                    </Grid.Column>
                    <Button type="submit" className="btn btn-primary w-10 mt-6 md-1">
                        Kaydet
                    </Button>
                </Grid>

            </Container>

        </>


    );
}
export default ForeignLanguage;
