import { Container, Row, Col, Form, Button } from "react-bootstrap";
import React, { useState } from 'react';
import axios from 'axios';
import './PasswordReset.css';


interface State {
    email: string;
    error: string | null;
}

const PasswordReset = () => {
    const [state, setState] = useState<State>({
        email: '',
        error: null,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setState((prevState) => ({ ...prevState, error: null }));

        try {
            await axios.post('/api/password-reset', state);
            alert('Password reset link has been sent to your email address.');
        } catch (error: any) {
            setState((prevState) => ({ ...prevState, error: error.response.data.message }));
        }
    };

    return (
        <div >
            <Container>
                <Row className="justify-content-center mt-5 ">
                    
                    <Col md="auto">
                        <Form onSubmit={handleSubmit} >
                        
                            <h1 >Şifreyi sıfırla</h1>
                            <Form.Group controlId="email">
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={state.email}
                                    onChange={handleChange}
                                    placeholder="Enter email"
                                />
                            </Form.Group>

                            {state.error && (
                                <div className="alert alert-danger" role="alert">
                                    {state.error}
                                </div>
                            )}

                            <Button className="button " variant="primary" type="submit" >
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PasswordReset;
