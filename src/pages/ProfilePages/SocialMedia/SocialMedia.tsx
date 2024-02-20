import React from 'react'
import { Grid, Input } from 'semantic-ui-react'
import DropdownSocialMedia from '../../../components/Dropdown/DropdownSocialMedia'
import { Button } from 'react-bootstrap'



const SocialMedia = () => {
    return (
        <>
            <Grid container columns={2} divided relaxed stackable>
                <Grid.Column width={4} >
                    <DropdownSocialMedia />
                </Grid.Column>
                <Grid.Column width={12} >
                    <Input focus placeholder='https://' />
                </Grid.Column>
                <Button type="submit" className="btn btn-primary">
                    Kaydet
                </Button>
            </Grid>
        </>
    )
}

export default SocialMedia