import axios from "axios";
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Register = () => {

    const navigate = useNavigate()

    const [input,setInput] = useState(
        {
            full_name:"",
            email:"",
            password:"",
            role:"",
        }
    )

    const handleChange = (e) => setInput({...input, [e.target.name] : e.target.value})

    const handleRegister = (e) => {
        e.preventDefault()

        // console.log(input)

        let {full_name,email,password,role} = input
    
        axios.post(`http://localhost:3000/auth/register`,{full_name,email,password,role})
        .then((res) => {
          console.log(res)
          navigate("/login");
          Swal.fire('Register Succes')
          })
        .catch((err) => {
            alert(err)
            })

    }

    return(
        <section className="vh-100" style={{backgroundColor:'black'}}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card-bg-black text-white" style={{borderRadius: '25px'}}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                      <form onSubmit={handleRegister} className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example1c">Full Name</label>
                            <input required  onChange={handleChange} name="full_name" value={input.full_name} type="text" id="form3Example1c" className="form-control" />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example3c">Email</label>
                            <input required  onChange={handleChange} name="email" value={input.email} type="email" id="form3Example3c" className="form-control" />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                            <input required  onChange={handleChange} name="password" value={input.password} type="password" id="form3Example4c" className="form-control" /> 
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example1c">Role</label>
                            <input required  onChange={handleChange} name="role" value={input.role} type="text" id="form3Example1c" className="form-control" />
                          </div>
                        </div><br/>
                        <center>
                        <button type="submit" style={{width: '380px',marginLeft:"10px"}} className="btn btn-primary text-white">
                          Register
                        </button><br/>
                        <Link className="link-dark" to="/Login" > 
                            <div className="text-white"><h4>I already have an account</h4></div>
                          </Link>
                        </center>

                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Register;