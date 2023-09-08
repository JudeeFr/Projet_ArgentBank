import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './style.css';
import { editProfile } from '../../app/Api';


export default function Edit() {
  const [showEdit, setShowEdit] = useState(false);
  
  const [newUsername, setNewUsername] = useState('')
 
  const selectUser = (state) => state.user.user
  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  const edit = () => {
    
    dispatch(editProfile(newUsername))
    setShowEdit(false)
    var msg="Your Username has been modified.";
       alert(msg);
  }

  return (
      <div>
          <form style={{ display: !showEdit ? 'none' : '' }}  onSubmit={e => e.preventDefault()}
              className="edit-form">
                <h1>Edit user info</h1>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input 
                id="username" 
                value={newUsername}
                placeholder={user.body.userName}
                type="text"
                onChange={(e) => {
                setNewUsername(e.target.value)}}/>
            </div>
            <div className="input-wrapper">
              <label htmlFor="first name">First Name</label>
              <input 
              type="text" 
              id="firstname" 
              placeholder={user.body.firstName}
              disabled="disabled" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="last name">Last Name</label>
              <input 
              type="text" 
              id="lastname"
              placeholder={user.body.lastName} 
              disabled="disabled"/>
            </div>
            <div className='buttons'>
              <button 
              type='submit'
              className="edit-button" 
              onClick={edit}>
                Save
              </button>
              <button 
              type='button'
              className="edit-button" 
              onClick={() => {setShowEdit(false)}}>
                Cancel
              </button>
            </div>
          </form>
          <div className="message" style={{ display: !showEdit ? '' : 'none' }}>
            <h1>Welcome back<br /><span>{user.body.firstName}</span></h1>
            <button 
            className="edit-button" 
            onClick={() => setShowEdit(!showEdit)}>
              Edit Username
            </button>
        </div>
      </div>
    );
  }