import React, { useState } from 'react'
import { addUser } from './UserReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Create = () => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [MobileNo ,setMobilenum] = useState('');
    const [mark ,setMarks] = useState("");

    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addUser({ id: users[users.length - 1].id + 1, name, email,MobileNo,mark }));

        navigate("/")

    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>

                <h3 className='p-3'>Add New Users</h3>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>name:</label>
                        <input
                            type="text"
                            placeholder='text-content '
                            name='name'
                            className='form-control'
                            onChange={e => setName(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor='email'>email:</label>
                        <input
                            type="text"
                            placeholder='text-content '
                            name='email'
                            className='form-control'
                            onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="MobileNo">Number:</label>
                        <input 
                        type='number'
                        placeholder='text-content'
                        name='MobileNo'
                        className='form-control'
                        onChange={e => setMobilenum(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="mark">Mark:</label>
                        <input 
                        type='number'
                        placeholder='text-content'
                        name='mark'
                        className='form-control'
                        onChange={e => setMarks(e.target.value)}
                        />
                    </div>
                    <br />

                    <button className='btn btn-info'>Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Create
