// import {  useDispatch, useSelector } from "react-redux";
// import {  userUpdated } from "../../redux-toolkit/slices/CommonSlice";
// import { useEffect, useState } from "react";
// import { fetchUser, postUser, putUser, userAdded } from "../../redux-toolkit/slices/UserSlice";


// export function UserList() {
// const {posts} = useSelector((state)=>state.users) || []
// // const userId = useSelector((state) => state.users.length)
// const dispatch = useDispatch();
// // const [name, setName] = useState(userId.name);
// //   const [email, setEmail] = useState(userId.email);
//   const [error, setError] = useState(null);

// //   const handleName = (e) => setName(e.target.value);
// //   const handleEmail = (e) => setEmail(e.target.value);
// useEffect(()=>{
//     dispatch(fetchUser())
// },[])

// useEffect(()=>{
//     dispatch(postUser())
// },[])

// useEffect(()=>{
//     dispatch(putUser())
// },[])


// //   const handleClick = () => {
//     // if (error) {
//     //   dispatch(
//     //     userUpdated({
//     //     //   id: userId,
//     //     //   name,
//     //     //   email,
//     //     })
//     //   );

//     //   setError(null);
//     // } else {
//     //   setError("Fill in all fields");
//     // }

//     // setName("");
//     // setEmail("");
 
// //   };
// const handleSubmit = (e) =>{
//     e.preventDefault();
//     const name = e.target.userName.value;
//     if(name){
//         dispatch(userAdded(name));
//         e.target.userName.value=''
//     }
// }
//     return (
        
//       <div className="container">
//  {/* <form onSubmit={handleSubmit}>
//     <input type="title" name="userName" placeholder="Enter a New User "/>
//     <button type="submit">Add User</button> */}
//         <div className="row">
//           <h1>Redux CRUD User app</h1>
//         </div>
//         <div className="row">
       
//         </div>
//         <div className="row">
//           <table class="u-full-width">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Created At</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
         
//             {posts.map((user) => (
//               <tr key={user.id}>
//                 <td>{user.id}</td>
//                 <td>{user.name}</td>
//                 <td>{user.created_at} </td>
//                 <td>
               
//                   <button>Delete</button>
                  
//                   <button>Edit</button>
//                 </td>
//               </tr>
//                  ))}
//             </tbody>
//           </table>
          
//         </div>
//         {/* </form> */}
//       </div>
      
//     );
//   }


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, userDeleted, userUpdated } from '../../redux-toolkit/slices/UserSlice';

export function UserList() {
    const dispatch = useDispatch();
    const  {posts} = useSelector(state => state.users) || [];

    useEffect(() => {
        dispatch(fetchUser());
    }, []);

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error}</p>;

    const handleDelete = (id) => {
        dispatch(userDeleted(id));
    };

    const handleEdit = (id) =>{
      dispatch(userUpdated(id))
    }

    return (
        <div className="container">
          <div className='row'>
            <h1>Redux CRUD User App</h1>
            </div>
            <div className='row'>

            </div>
            <div className='row'>
            <table className="u-full-width">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Created At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.created_at}</td>
                            <td>
                                <button onClick={() => handleDelete(user.id)}>Delete</button>
                                <button onClick = {() => handleEdit(user.id)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}
