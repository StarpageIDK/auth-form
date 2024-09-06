import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';

type PortalProps = {
    children: React.ReactNode;
    id: string;
}

const Portal = (props: PortalProps) => {
    const { id, children } = props;
    const [mount, setMount] = useState<HTMLElement | null>();

    useEffect(() => {
        if (id) {
            const elementContainer = document.getElementById(id);

            if (!elementContainer) {
                throw new Error('Element to mount not found');
            }

            setMount(elementContainer);
        }
    }, [id]);

    return mount ? createPortal(children, mount) : null;
};

export default Portal;
