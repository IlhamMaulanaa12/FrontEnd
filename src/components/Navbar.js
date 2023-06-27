import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import ShoppingCart from "../components/ShoppingCart";
import Cookies from "js-cookie";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { FaBook } from "react-icons/fa";

const Header = () => {

    
        
    const navigate = useNavigate()

    const [user,setUser] = useState()

    useEffect(() => {
        if(Cookies.get('token_user') !==undefined){
            setUser(JSON.parse(Cookies.get('user')))
            }    

    },[])

    const handleLogout = () => {
        Cookies.remove('token_user')
        Cookies.remove('user');
        navigate("/Login");
        Swal.fire('Logout Succes')
    }
    
	const [cartsVisibilty, setCartVisible] = useState(false);
    const [productsInCart, setProducts] =
		useState(
			JSON.parse(
				localStorage.getItem(
					"shopping-cart"
				)
			) || []
		);
    
        const onProductRemove = (product) => {
            setProducts((oldState) => {
                const productsIndex =
                    oldState.findIndex(
                        (item) =>
                            item.id === product.id
                    );
                if (productsIndex !== -1) {
                    oldState.splice(productsIndex, 1);
                }
                return [...oldState];
            });
        };

        const onQuantityChange = (
            productId,
            count
        ) => {
            setProducts((oldState) => {
                const productsIndex =
                    oldState.findIndex(
                        (item) =>
                            item.id === productId
                    );
                if (productsIndex !== -1) {
                    oldState[productsIndex].count =
                        count;
                }
                return [...oldState];
            });
        };

    return(
        <div>
			<ShoppingCart
				visibilty={cartsVisibilty}
				products={productsInCart}
				onClose={() =>
					setCartVisible(false)
				}
				onQuantityChange={
					onQuantityChange
				}
				onProductRemove={onProductRemove}
			/>
            <Navbar bg="black" variant="black">
                <Container>
                        <Nav className="me-auto">
                            <Nav.Link href="/">
                                <div style={{marginLeft: '39px'}}  className="text-warning"><h1>Fast Food</h1></div>
                            </Nav.Link>
                        </Nav>
                            <ul className="navbar-nav ms-auto ">
                                <Nav.Link href="/">
                                    <div className="text-white"><h4>Home</h4></div>
                                </Nav.Link>
                                <Nav.Link href="/Menu">
                                    <div className="text-white"><h4>Menu</h4></div>
                                </Nav.Link>
                                {
									!user &&
										<button
											className="btn shopping-cart-btn"
											onClick={() => setCartVisible(true)}>
											<GiShoppingBag size={24} />
											{productsInCart.length > 0 &&
											(<span className="product-count">
												
											</span>
										)}
										</button>
								}
								{
									user &&
										<button
											className="btn shopping-cart-btn"
											onClick={() => setCartVisible(true)}>
											<GiShoppingBag size={24} />
											{productsInCart.length > 0 &&
											(<span className="product-count">
												{productsInCart.length}
											</span>
										)}
										</button>
								}
								<>
								{
									user &&
									<Nav.Link href="/Order">
                                    	<div className="text-white"><h4><FaBook size={24} /></h4></div>
                                	</Nav.Link>
									
								}
								</>
                                {
                                    !user &&
                                    <li>
                                        <Nav.Link href="/Register">
                                            <div className="text-white"><h4>Sign Up</h4></div>
                                        </Nav.Link>
                                    </li>
                                }
                                {
                                    user &&
                                    <li>
                                        <Nav.Link href="/">
                                            <div onClick={handleLogout} className="text-white">
                                                <h4>Logout</h4>
                                            </div>
                                        </Nav.Link>
                                    </li>
                                }
                            </ul>
                </Container>    
            </Navbar>
            <Outlet/>
        </div>
    )
}

export default Header;