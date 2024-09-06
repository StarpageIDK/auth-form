import { useState, useEffect, useCallback, MouseEventHandler } from 'react';
import Portal, { createContainer } from './Portal';
import { Form } from '@remix-run/react';

type Props = {
    onClose: () => void;
};

const SignUp = (props: Props) => {
    const [isMounted, setMounted] = useState(false);
    const { onClose } = props;

    const handleSignUp = async (email: string, password: string) => {
        try {
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            console.log('Signup successful:', data);
            onClose();
        } catch (error) {
            console.error('Signup failed:', error);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        await handleSignUp(email, password);
    };

    useEffect(() => {
        createContainer("modal-signup");
        setMounted(true);
    }, []);

    const handleClose: MouseEventHandler<HTMLButtonElement> =
        useCallback(() => {
            onClose?.();
        }, [onClose]);

    return (
        isMounted ? (<Portal id="modal-signup">
            <div className="modal-signup">
                <h1>Sign up</h1>
                <Form onSubmit={handleSubmit}>
                    <div className="emailTab">
                        <input type="email" id="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="passwordTab">
                        <input type="password" id="password" name="password" placeholder="Password" required />
                    </div>
                    <input type="submit" value="Signup" />
                </Form>
                <button onClick={handleClose}>Close</button>
            </div>
        </Portal>) : null
    )
};

export default SignUp;