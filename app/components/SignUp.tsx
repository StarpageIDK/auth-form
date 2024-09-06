import { useState, useEffect } from 'react';
import Portal, { createContainer } from './Portal';

const SignUp = () => {
    const [isMounted, setMounted] = useState(false);

    useEffect(() => {
        createContainer("modal-signup");
        setMounted(true);
    }, []);

    return (
        isMounted ? (<Portal id="modal-signup">
            <div className="modal-signup">
                <h1>Signup</h1>
            </div>
        </Portal>) : null
    )
};

export default SignUp;