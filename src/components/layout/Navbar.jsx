import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Dashboard</a>
                <div className='d-inline-flex text-white fw-bold w-25 justify-content-around'>
                    <img src="http://zvejsalniekabirojs.lv/wp-content/uploads/2018/08/default_image.jpg" width='50' className="rounded-circle img-fluid" alt="img-thumbnail" />
                    <p className='align-self-end'>Administrador</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar