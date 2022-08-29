import React, { useState } from 'react'
import {Form,Button,Dropdown} from 'react-bootstrap'
import './AddFriends.css'

const AddFriends = () => {
    const[option,setOption] = useState('')
    const[name,setName] = useState('')

    // Handling localStorage
    var data = JSON.parse(localStorage.getItem('data') || "[]")
    function submitHandler(){
        var arrayData = {
            name:name,
            friend:option
        }

        data.push(arrayData)
        localStorage.setItem('data',JSON.stringify(data))
    }

  return (
    <div>
        <h1 className="addFriends">Add Friends</h1>    
        
        <Form onSubmit={submitHandler}>

{/* Bootstrap */}
            <div className='row'>
                <div className='col-sm-6'>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Your Name" onChange={e => setName(e.target.value)}/>
      </Form.Group>
      </div>
      <div className="col-sm-6">
      <Form.Label>Friend</Form.Label>
      <br></br>
    <select onChange={e =>setOption(e.target.value)}>
      <option>None</option>
        {data.map(dataList =>{
            return <option>{dataList.name}</option>
        })}
    </select>
    </div>
    {/* Info Hint Text */}
    <h5><span className='text'>[Name]</span> is a friend of <span className='text'>[Friend]</span></h5>
    </div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </div>
  )
}

export default AddFriends