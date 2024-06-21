import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from './UserReducer';




const   Update= () => {
    const {id} =useParams();
    const  users =useSelector((state)=>state.users);

    const existingUser =users.filter(f => f.id==id);

    const {email,name,MobileNo,mark} =existingUser[0]
    const [uname ,setName]=useState(name);
    const [uemail,setEmail]=useState(email);
    const [uMobileNo ,setMobilenum] = useState(MobileNo);
    const [umark ,setMarks] = useState(mark);


    const dispatch =useDispatch();
    const navigate =useNavigate();

    const handleUpdate =(event) => {
        event.preventDefault();
        dispatch(updateUser({
            id:id,
            name:uname,
            email:uemail,
            MobileNo:uMobileNo,
            mark:umark
        }))
         navigate("/")
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>

             <h3 className='p-3'>Update New Users</h3>
      
        <form onSubmit={handleUpdate}>
            <div>
                <label htmlFor='name'>name:</label>
                <input 
                type="text" 
                placeholder='text-content '
                 name='name' 
                 className='form-control'
                 value={uname}
                 onChange={e => setName(e.target.value)}
                  />
            </div>

            <div>
                <label htmlFor='email'>email:</label>
                <input 
                type="text" 
                placeholder='text-content '
                 name='email' 
                 className='form-control' 
                 value={uemail}
                 onChange={e =>setEmail(e.target.value)}
                 />
            </div>
            
            <div>
                <label htmlFor="MobileNo">MobileNo:</label>
                <input 
                type="text"
                placeholder='text-content'
                name='MobileNo'
                className='form-control'
                value={uMobileNo}
                onChange={e =>setMobilenum(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="mark">mark:</label>
                <input 
                type="number"
                placeholder='text-content'
                name='mark'
                className='form-control'
                value={umark}
                onChange={e =>setMarks(e.target.value)}
                />
            </div>
            <br/>

            <button className='btn btn-info'>Update</button>
        </form>

    </div>
</div>
  )
}

export default  Update