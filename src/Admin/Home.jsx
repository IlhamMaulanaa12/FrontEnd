import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HomeA = () => {

    const navigate = useNavigate()

    const [products, setProduct] = useState([]);

    useEffect(() => {
		axios
		.get("http://localhost:3000/api/products")
		.then((result) => {
			setProduct(result.data.data);
		})
		.catch((error) => console.log(error));
	}, []);

  const handleLogout = () => {
    Cookies.remove('token_user')
    Cookies.remove('user');
    navigate("/Login")
}

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
                        <Nav.Link href ='/HomeA' className="text-decoration-none text-black">
                            Dashboard
                        </Nav.Link>
                    </li>
                    <li className="list-group-item">
                       
                        <Nav.Link href="/" className="text-decoration-none text-black">
                          <div onClick={handleLogout}>
                           <FaSignOutAlt/>  Logout
                          </div>
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
                      <Nav.Link href ='/Tags' className="btn btn-primary text-white" style={{height:'40px',width:'150px'}}>See Category</Nav.Link>
                    </div>
                  </div>
                </div>
              </div><br/>
              <div className="d-flex flex-wrap">
					{products.map((product) => (
						<div className="col ps-md-2 pt-2">
                        <div className="card bg-black border-warning mb-4" style={{width: '22rem'}}>
                            <img src={product.image_url} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <button style={{borderTopRightRadius:"15px",borderBottomRightRadius:"15px"}} type="button" className="btn btn-primary">
                                        {product.tags?.name}
                                    </button><br/><br/>
                                            <h5 className="card-title text-white">{product.name}</h5>
                                            <h5 className="card-title text-muted">Harga : {product.price}</h5><br/>        
                                               
                                </div>
                        </div>
                    </div>
					))}
				</div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default HomeA