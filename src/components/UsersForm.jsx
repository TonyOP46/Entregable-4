import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const UsersForm = ({ getUsers, selectedUsers, deselectedUsers }) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(()=>{
    if(selectedUsers){
      reset(selectedUsers)
    }
  },[selectedUsers])

  const submit = (data) => {
    if(selectedUsers){
      axios.put(`https://users-crud1.herokuapp.com/users/${selectedUsers.id}/`, data)
      .then(()=>getUsers())
    }else{
    axios
      .post("https://users-crud1.herokuapp.com/users/", data)
      .then(() => getUsers())
      .catch(error => console.log(error.response))
    console.log(data);
    }
    clear()
  }

  const clear =()=>{
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: ""
    })
    deselectedUsers()
  }

  return (
    <div className="Users">
      <form onSubmit={handleSubmit(submit)}>
        <div className="input-container">
          <label htmlFor="first_name">First Name </label>
          <input type="text" id="first_name" {...register("first_name")} />
        </div>
        <div className="input-container">
          <label htmlFor="last_name">Last Name </label>
          <input type="text" id="last_name" {...register("last_name")} />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email </label>
          <input type="email" id="email" {...register("email")} />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password </label>
          <input type="password" id="password" {...register("password")} />
        </div>
        <div className="input-container">
          <label htmlFor="birthday"></label>
          <input type="date" id="birthday" {...register("birthday")} />
        </div>
        <button className="submit">{selectedUsers ? "Update": "Submit"}</button>
        <button onClick={clear}>Clear</button>
      </form>
    </div>
  );
};

export default UsersForm;
