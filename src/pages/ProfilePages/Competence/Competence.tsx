import { Dropdown, Grid } from 'semantic-ui-react'
import ProfileEdit from '../../ProfileEdit/ProfileEdit';
import DropdownLevel from '../../../components/Dropdown/DropdownLevel';
import { Button } from 'react-bootstrap';



const Competence: React.FC = () => {
    return (
        <>
            
                <Grid container columns={1} relaxed stackable>
                    <Grid.Column  >
                        <Grid.Row  >
                            <h4>Yetkinlik</h4>
                        </Grid.Row>
                        <Grid.Row >
                            <DropdownLevel />
                        </Grid.Row>
                        <Button type="submit" className="btn btn-primary mt-6">
                                Kaydet
                            </Button>
                    </Grid.Column>
                </Grid>
            </>

    )
}

export default Competence;