import React from 'react'

interface IModal{
    open:Boolean;
}

const Modal = (props: IModal) => {
    if (!props.open) return null;
    return (
        <div>
            <h1>hola</h1>
        </div>
    )
}

export default Modal;