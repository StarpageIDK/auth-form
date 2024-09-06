import { useState, useEffect, useCallback, MouseEventHandler } from 'react';
import Portal, { createContainer } from './Portal';
import { Form } from '@remix-run/react';

type Props = {
    onClose: () => void;
};

const SignUp = (props: Props) => {
    const [isMounted, setMounted] = useState(false);
    const { onClose } = props;

    useEffect(() => {
        createContainer("modal-signup");
        setMounted(true);
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };

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
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="passwordTab">
                        <input type="password" placeholder="Password" />
                    </div>
                    <input type="submit" value="Signup" />
                </Form>
                <button onClick={handleClose}>Close</button>
            </div>
        </Portal>) : null
    )
};

export default SignUp;