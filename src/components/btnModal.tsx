import React from 'react'


// BUSCAR COMO USAR Y MANEJAR OTROS ESTADOS DESDE DIFERENTES ARCHIVOS

interface IBtnModal{
    open:Boolean;
}

const BtnModal = (props:IBtnModal) => {
    return (
        <div>
            <button onClick={() => (!props.open)}>Modallll</button>
        </div>
    )
}

export default BtnModal;
