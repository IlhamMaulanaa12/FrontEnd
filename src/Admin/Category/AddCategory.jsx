import axios from "axios";
import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { FaBackward } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
    const navigate = useNavigate()

    const [category, setCategory] = useState([]);
    const [input,setInput] = useState(
        {
            name:"",
        }
    )

    const handleChange = (e) => setInput({...input, [e.target.name] : e.target.value})

    const handleCreate = (e) => {
        e.preventDefault()

         console.log(input)

        let {name} = input
    
        axios.post(`http://localhost:3000/api/tags`,{name})
        .then((res) => {
           console.log(res)
            ///navigate("/Category")
          })
        .catch((err) => {
            alert(err)
            })

    }


    useEffect(() => {
		axios
		.get("http://localhost:3000/api/tags")
		.then((result) => {
			console.log(result.data);
			setCategory(result.data);
		})
		.catch((error) => console.log(error));
	}, []);

    return (
        <div>
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <div className="col-auto px-0">
              <div id="sidebar" className="collapse collapse-horizontal show border-end vh-100 shadow-sm">
                <div id="sidebar-nav" className="list-group border-0 rounded-0">
                  <div className="p-2">
                    <h4>Admin Dashboard</h4>
                  </div>
                  <ul className="list-group">
                    <li className="list-group-item">
                        <Nav.Link href ='/' className="text-decoration-none text-black">
                            Dashboard
                        </Nav.Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col ps-md-2 pt-2">
              <hr />
              <div className="row">
                <div className="col-md-4">
                  <div className="card shadow">
                    <div className="card-body text-start">
                      <h5 className="card-title">All Product</h5>
                      <p className="card-text"><i className="bi bi-people mr-3" />50+</p>
                      <Nav.Link href ='/Product' className="btn btn-primary text-white" style={{height:'40px',width:'150px'}}>See Product</Nav.Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card shadow">
                    <div className="card-body text-start">
                      <h5 className="card-title">All Category</h5>
                      <p className="card-text"><i className="bi bi-people mr-3" />50+</p>
                      <Nav.Link href ='/Category' className="btn btn-primary text-white" style={{height:'40px',width:'150px'}}>See Category</Nav.Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card shadow">
                    <div className="card-body text-start">
                      <h5 className="card-title">All Tags</h5>
                      <p className="card-text"><i className="bi bi-people mr-3" />50+</p>
                      <a href="#" className="btn btn-primary">See Tags</a>
                    </div>
                  </div>
                </div>
              </div><br/>

                <Nav.Link href ='/Category' className="btn btn-dark text-white" style={{height:'40px',width:'180px'}}>
                    <FaBackward/>Back
                </Nav.Link><br/>
                <form onSubmit={handleCreate} className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example1c"> Name</label>
                            <input required  onChange={handleChange} name="name" value={input.name} type="text" id="form3Example1c" className="form-control" />
                            <br/>
                            <button type="submit" style={{width: '310px',marginLeft:"10px"}} className="btn btn-primary text-white">
                                Submit
                            </button><br/>
                          </div>
                        </div>
                        <center>
                        
                        </center>

                      </form>
            </div>
          </div>
        </div>
      </div>
    )
}

export default AddCategory