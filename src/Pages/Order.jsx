import React, {
	useState,
	useEffect,
} from "react";
import "../style/main.css";
import { GiShoppingBag } from "react-icons/gi";
//import RatingStars from "./components/RatingStars";
import ShoppingCart from "../components/ShoppingCart";
import axios from "axios";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { FaBook } from "react-icons/fa";
import Footer from "../components/Footer";
import Swal from "sweetalert2";

function Order() {
	
	const [products, setProducts] = useState(
			JSON.parse(
				localStorage.getItem(
					"shopping-cart"
				)
			) || []
		);
	const [search,setSearch] = useState("");
	const [user,setUser] = useState (undefined)
	const navigate = useNavigate()

    const handleLogout = () => {
        Cookies.remove('token_user')
        Cookies.remove('user');
        navigate("/Login")
		Swal.fire('Logout Succes')
    }

	const [Order, setOrder] = useState([]);

	useEffect(() => {
		axios
		.get(`http://localhost:3000/api/orders`,
			{
				headers : { "Authorization" :' Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDhmZWJiODUzNjQ5MGRkNmY2NjRjYTciLCJmdWxsX25hbWUiOiJ1c2VyIiwiZW1haWwiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImNvc3R1bWVyX2lkIjoyLCJpYXQiOjE2ODcyNDE4MzB9.AqQ7s0XvzUmsbVkKhMpvpD2Wd-Z3aU4ooQjWAqXbToE'  }
			}
		)
		.then((result) => {
			console.log(result.data.data);
			setOrder(result.data.data);
		})
		.catch((error) => console.log(error));
	}, []);

	useEffect(() => {
		localStorage.setItem(
			"shopping-cart",
			JSON.stringify(products)
		);
	}, [products]);

	const addProductToCart = (product) => {
		if (!user) {
			navigate('/Login')
		}
			const newProduct = {
				...product,
				count: 1,
			};
			setProducts([
				...products,
				newProduct,
			]);
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


    const defaultquantities = {}
	products?.map(product => defaultquantities[product._id] = 1)
	const [quantities,setQuantities] = useState(defaultquantities)


	useEffect(()=>{

        if(Cookies.get('token_user') !==undefined){
            setUser(JSON.parse(Cookies.get('user')))
        }
    },[])

  
	

	const [cartsVisibilty, setCartVisible] = useState(false)

	function convertToRupiah(angka)
    {
        var rupiah = '';		
        var angkarev = angka.toString().split('').reverse().join('');
        for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
        return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
    } 

	return (
		<div style={{backgroundColor:"black"}}>
			<div>
			<ShoppingCart
				visibilty={cartsVisibilty}
				products={products}
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
											{products.length > 0 &&
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
											{products.length > 0 &&
											(<span className="product-count">
												{products.length}
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
            <div style={{flex: 1, height: '2px', backgroundColor: '#ffc107'}} />
        </div>
			<main><br/><br/>
				<h2 className="text-center text-white">
					Order History
				</h2><br/><br/>	
					  {Order.map((orders,index) => {
                        return (
							<div className="card" style={{marginLeft:"30px", width: '38rem'}} key={index}>
								<div className="card-body">
								<h5 style={{marginLeft:"3px"}} className="card-title">
										Informasi Product:
								</h5><br/>
								<h5 style={{marginLeft:"18px"}} className="card-title">Order Number:{orders.order_number}</h5>								
								<h5 style={{marginLeft:"18px"}} className="card-title">Order Item: {orders.order_items?.map((item) => `${item.qty} ${item.name}`).join(', ')}</h5>
								<h5 style={{marginLeft:"18px"}} className="card-title">Total: {orders.order_items?.map((item) => item.price*item.qty).reduce((a, b) => a + b, 0)}</h5>
								<div style={{flex: 1, height: '2px', backgroundColor: 'black'}} /><br/>
								<br/>
								<h5 style={{marginLeft:"3px"}} className="card-title">
										<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
											<path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
										</svg>
										Alamat Pengiriman:
								</h5><br/>
								<h5 style={{marginLeft:"18px"}} className="card-title">Kelurahan:{orders.delivery_address?.kelurahan}</h5>
								<h5 style={{marginLeft:"18px"}} className="card-title">Kecamatan:{orders.delivery_address?.kecamatan}</h5>
								<h5 style={{marginLeft:"18px"}} className="card-title">Kabupaten:{orders.delivery_address?.kabupaten}</h5>
								<h5 style={{marginLeft:"18px"}} className="card-title">Provinsi:{orders.delivery_address?.provinsi}</h5>
								<h5 style={{marginLeft:"18px"}} className="card-title">Detail:{orders.delivery_address?.detail}</h5>
								</div>								
							</div>
                          )
                        })
                      }
			</main>
			<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
			<Footer/>
		</div>
	);
}

export default Order;
