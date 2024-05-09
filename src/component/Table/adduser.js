import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { userAdded } from "../../redux-toolkit/slices/UserSlice";

export function AddUser() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [created_at, setCreated_at] = useState("");
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleCreated_At = (e) => setCreated_at(e.target.value);

  const usersAmount = useSelector((state) => state.users.length);

  const handleClick = () => {
    if (name && created_at) {
      dispatch(
        userAdded({
          id: usersAmount + 1,
          name,
          created_at,
        })
      );

      setError(null);

    } else {
      setError("Fill in all fields");
    }

    setName("");
    setCreated_at("");
  };


  return (
    <div className="container">
      <div className="row">
        <h1>Add user</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label for="nameInput">Name</label>
         
          <input
            className="u-full-width"
            type="text"
            placeholder="test@mailbox.com"
            id="nameInput"
            onChange={handleName}
            value={name}
          />
          <label for="emailInput">Created_At</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="test@mailbox.com"
            id="emailInput"
            onChange={handleCreated_At}
            value={created_at}
          />
     
          <button onClick={handleClick} className="button-primary">
            Add user
          </button>
        
        </div>
      </div>
    </div>
  );
}