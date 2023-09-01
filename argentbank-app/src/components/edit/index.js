import React, { useState } from 'react';
import { useSelector} from "react-redux";
import './style.css';

export default function Edit() {
  const [edit, setEdit] = useState(false);
  const selectUser = (state) => state.user.user
  const user = useSelector(selectUser)

  
  return (
      <div>
          <form style={{ display: !edit ? 'none' : '' }} 
              className="edit-form">
                <h1>Edit user info</h1>
            <div className="input-wrapper">
              <label for="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label for="first name">First Name</label>
              <input type="text" id="firstname" />
            </div>
            <div className="input-wrapper">
              <label for="last name">Last Name</label>
              <input type="text" id="lastname" />
            </div>
            <div className='buttons'>
              <button 
              className="edit-button" 
              onClick={""}>
                Save
              </button>
              <button 
              className="edit-button" 
              onClick={""}>
                Cancel
              </button>
            </div>
          </form>
          <div className="message" style={{ display: !edit ? '' : 'none' }}>
            <h1>Welcome back<br /><span>{user.body.firstName}</span></h1>
            <button 
            className="edit-button" 
            onClick={() => setEdit(!edit)}>
              Edit Name
            </button>
        </div>
      </div>
    );
  }