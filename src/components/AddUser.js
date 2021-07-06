import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import "./AddUser.css";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const AddUser = () => {
  const [name, setName] = useState("");
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name,
    };
    addUser(newUser);
    history.push("/");
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Task Description</Label>
        <Input
          type="text"
          value={name}
          onChange={onChange}
          name="name"
          placeholder="Enter Task"
          required
        ></Input>


<div className="datetime">
            <div className="date">
              <label className="label">Date</label>
              <br />

              <input type="date" name="date"  />
            </div>
            <div className="time">
              <label className="label">Time</label>
              <br />

              <input type="time" name="time" placeholder="Time" />
            </div>
          </div>
          <div className="dropdown">
            <label>Asign User</label>
            <br />
            <select type="list" name="list" className="list" >
              <option type="p1">Prem Kumar</option>
              <option type="p1">Raju</option>
              <option type="p1">Max</option>
            </select>
          </div>
      </FormGroup>
      <div className="d-flex flex-row-reverse">
      <Button type="submit" className="sBtn">Submit</Button>
      <Link to="/" className="btn btn-danger mr-2">
        Cancel
      </Link>
      </div>
    </Form>
  );
};
