import React from 'react'
import { Button } from 'react-bootstrap'
import { Grid, Input } from 'semantic-ui-react'


const Setings = () => {
    return (
        <>
            <Grid container columns={3} relaxed stackable>
                <Grid.Column  >
                    <Grid.Row  >
                        <h4>Eski Şifre</h4>
                    </Grid.Row>
                    <Grid.Row  >
                        <Input focus placeholder='Eski Şifre' />
                    </Grid.Row>
                </Grid.Column>
                <Grid.Column >
                <Grid.Row  >
                        <h4>Yeni Şifre</h4>
                    </Grid.Row>
                    <Grid.Row  >
                        <Input focus placeholder='Yeni Şifre' />
                    </Grid.Row>
                </Grid.Column>
                <Grid.Column >
                <Grid.Row  >
                        <h4>Yeni Şifre Tekrar</h4>
                    </Grid.Row>
                    <Grid.Row  >
                        <Input focus placeholder='Yeni Şifre Tekrar' />
                    </Grid.Row>
                </Grid.Column>
            </Grid>
            <Grid container columns={2} relaxed stackable>
                    <Grid.Column  >
                    <Button type="submit" className="btn btn-primary ">
                        Şifre Değiştir
                    </Button>
                    </Grid.Column>
                    <Grid.Column >
                    <Button type="submit" className="btn btn-danger ">
                        Üyeliği Sonlandır
                    </Button>
                    </Grid.Column>
                </Grid>

        </>
    )
}

export default Setings