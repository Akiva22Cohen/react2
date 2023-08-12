import React, { useState } from 'react'

function CreateForm() {
    let school = [,];
    let [name, setCounter] = useState('akiva');
    school = name;
    console.log(name);
    // console.log(password);

    return (
        <div className="container-fluid">
            <div className="container">
                <header style={{ minHeight: '10vh' }}>header</header>
                <div className='border col-md-6 mx-auto p-1 p-md-3 rounded shadow bg-primary-subtle'>
                    <h2>Form</h2>
                    <div className='d-flex flex-column justify-content-start flex-wrap col-10 col-md-8 mx-auto'>
                        <div className='bg-body-secondary p-2 m-1 rounded'>
                            <label className='form-label'>Name:</label>
                            <input className='form-control' type="text" />
                        </div>
                        <div className='bg-body-secondary p-2 m-1 rounded'>
                            <label className='form-label'>Password:</label>
                            <input className='form-control' type="password" />
                        </div>
                        <div className='bg-body-secondary p-2 m-1 rounded'>
                            <label className='form-label'>Email:</label>
                            <input className='form-control' type="email" name="" id="" />
                        </div>
                        <button className='btn btn-dark m-1'>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateForm