import React, { useState } from 'react'; import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import styles from './PasswordReset.css';


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
        <div className={"form-container"}>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
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

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default PasswordReset;