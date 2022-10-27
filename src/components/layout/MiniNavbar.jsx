import React from 'react'

const MiniNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light rounded shadow mt-3">
            <div className="container-fluid">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb ">
                        <li className="breadcrumb-item">
                            <a className='text-secondary fw-bold' href="/">Kab admin</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a className='text-secondary fw-bold' href="/">Servicios</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            <a className='text-secondary fw-bold' href="/">Crear - Editar Servicio</a>
                        </li>
                    </ol>
                </nav>
            </div>
        </nav>
    )
}

export default MiniNavbar