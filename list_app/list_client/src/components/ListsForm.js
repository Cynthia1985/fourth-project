
import React, { Component } from 'react';

class ListsForm extends Component {
render() {

    const [name, setName] = ("");
    const [category, setCategory] = ("");

    const handleSubmit = (e) => {
       e.preventDefault();

       const list = {
           name: name,
           category: category
       }
       
       handleSubmit(e, list);
       setName("");
       setCategory("");
       
    }
 
    return (
        <>
        <div className="form-title">
          <h2>Add a List</h2> 
        </div>
        <form onSubmit={handleSubmit}>
        <input
          onChange={e => setName(e.target.value)}
          name="name"
          placeholder="List Title"
          type="text"
          value={name}
          id="name"
        />
        <input
          onChange={e => setCategory(e.target.value)}
          name={"category"}
          placeholder={"List Category"}
          type={"text"}
          value={category}
          id={"category"}
        />
        <input
          type="submit"
          value="SUBMIT"
        />
        </form>
        </>
    )
    }

}

export default ListsForm;