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

const createContainer = (id: string, toMount?: HTMLElement) => {
    const elementContainer = document.createElement('div');

    if (document.getElementById(id)) {
        return;
    }

    elementContainer.setAttribute('id', id);

    if (toMount) {
        toMount.appendChild(elementContainer);
        return;
    }

    document.body.appendChild(elementContainer);
}

export { createContainer };
export default Portal;
