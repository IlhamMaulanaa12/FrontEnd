import axios from "axios";
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link,  } from "react-router-dom";
import jwtDecode from "jwt-decode"
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Login = () => {

    const navigate = useNavigate()

    const [input,setInput] = useState(
        {
            email:"",
            password:"",
            
        }
    )

    const handleChange = (e) => setInput({...input, [e.target.name] : e.target.value})

    const handleRegister = (e) => {
        e.preventDefault()

        // console.log(input)

        let {email,password} = input
    
        axios.post(`http://localhost:3000/auth/login`,{email,password})
        .then((res) => {


            let {token,user} = res.data
            console.log(token)

            let decoded = jwtDecode(token)
                console.log(decoded)

                Cookies.set('token_user',token,{expires :1})
                Cookies.set('user',JSON.stringify(user),{expires : 1 })           
                
            if(decoded.role !=="admin"){
                   navigate("/");
                   Swal.fire('Login Succes')
            } else {
              navigate("/HomeA")
            }


            })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
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
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login To Your Account</p>
                      <form onSubmit={handleRegister} className="mx-1 mx-md-4">
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
                        <center>
                        <button type="submit" style={{width: '310px',marginLeft:"10px"}} className="btn btn-primary text-white">
                          Login
                        </button><br/>
                        <Link className="link-dark" to="/Register" > 
                            <div className="text-white"><h5>I don't have an account?Register</h5></div>
                          </Link>
                        </center>

                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                             <Carousel>
                                <Carousel.Item><br/><br/><br/><br/><br/><br/><br/>
                                    <img
                                    className="d-block w-100"
                                    src="https://www.unileverfoodsolutions.com.au/dam/global-ufs/mcos/anz/calcmenu/recipe/killer-recipes-update/beef-burger-with-deep-fried-bacon-and-thousand-island-dressing_main-header.jpg"
                                    width="400" height="400"
                                    alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item><br/><br/><br/><br/><br/><br/><br/>
                                    <img
                                    className="d-block w-100"
                                    src="https://img-global.cpcdn.com/recipes/18e75e45937347db/1200x630cq70/photo.jpg"
                                    width="500" height="400"
                                    alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item><br/><br/><br/><br/><br/><br/><br/>
                                    <img
                                    className="d-block w-100"
                                    src="https://img.okezone.com/content/2019/06/09/298/2064765/aroma-kopi-indonesia-semakin-harum-di-world-of-coffe-jerman-C8ygzWfm8s.jpg"
                                    width="400" height="400"
                                    alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
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

export default Login;