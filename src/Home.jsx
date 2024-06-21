import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';




const Home = () => {
    const  users =useSelector((state)=>state.users);
    const dispatch =useDispatch();
    // console.log(users);

    const handleDelete =(id) => {
          dispatch(deleteUser ({id:id}))
    }

  return (
    <div className='Container'>

        <h2 className='text-center mt-5'>REACT-REDUX METHOD USING REDUX -TOOLKIT</h2>
        <hr/>
        <a className="btn btn-success" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  You want To 
  create the 
  New users
</a>
{/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  Button with data-bs-target
</button> */}

<div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">REDUX-METHOD</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div>
        This Is The Student Details Of 1 st Term
    </div>
    <div className="dropdown mt-3">
      <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
        CLICK HERE
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Action</a></li>
        <Link to="/Create" className='btn btn-success my-3 text-center '> Create +</Link>
        

        <li><a class="dropdown-item" href="#">Another action</a></li>
      </ul>
    </div>
  </div>
</div>
        {/* <Link to="/Create" className='btn btn-success my-3 text-center '> Create +</Link> */}
        <hr/>

        <table className='table'>
            <thead>
                <tr >
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile No</th>
                    <th>Marks</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
        {users.map((users,index) => (
            <tr key={index}>
                <td>{users.id}</td>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.MobileNo}</td>
                <td>{users.mark}</td>
                
                <td>
                    <Link to={`/edit/${users.id}`} className='btn btn-sm btn-dark'><i class="bi bi-pencil-square"></i></Link>
                    <button className='btn btn-sm btn-danger ms-4' onClick={()=>handleDelete(users.id)}><i class="bi bi-trash-fill"></i></button>

                </td>
            </tr>
           ))}
        </tbody>
        </table>
          
       
      
    </div>
  )
}

export default Home
