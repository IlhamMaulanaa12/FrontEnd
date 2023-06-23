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

function Drink() {
	
	const [products, setProduct] = useState([]);
	const [search,setSearch] = useState("");
	const [user,setUser] = useState (undefined)
	const navigate = useNavigate()

    const handleLogout = () => {
        Cookies.remove('token_user')
        Cookies.remove('user');
        navigate("/Login")
    }


	useEffect(()=>{

        if(Cookies.get('token_user') !==undefined){
            setUser(JSON.parse(Cookies.get('user')))
        }
    },[])

  
	useEffect(() => {
		axios
		.get("http://localhost:3000/api/products")
		.then((result) => {
			setProduct(result.data.data);
		})
		.catch((error) => console.log(error));
	}, []);

	const [cartsVisibilty, setCartVisible] =
		useState(false);
	const [productsInCart, setProducts] =
		useState(
			JSON.parse(
				localStorage.getItem(
					"shopping-cart"
				)
			) || []
		);
	useEffect(() => {
		localStorage.setItem(
			"shopping-cart",
			JSON.stringify(productsInCart)
		);
	}, [productsInCart]);
	const addProductToCart = (product) => {
		if (!user) {
			navigate('/Login')
		}
			const newProduct = {
				...product,
				count: 1,
			};
			setProducts([
				...productsInCart,
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
					View Our Menu
				</h2><br/><br/>
				<div style={{marginLeft: '39px'}}>
				<form style={{width:"300px"}} className="d-flex form-inline my-5 my-lg-0">
					<input
					type="text"
					placeholder="Cari menu favorit anda"
					className="form-control"
					onChange={(e) => setSearch(e.target.value)}
					/> 
				</form><br/><br/>
				</div>
				<button type="button" style={{marginLeft: '39px'}} className="btn btn-primary">
                    <Nav.Link href="/Menu">
						All
					</Nav.Link>
				</button>
				<button type="button" style={{marginLeft: '39px'}} className="btn btn-primary">
					<Nav.Link href="/Food">
						Food
					</Nav.Link>
				</button>
				<button type="button" style={{marginLeft: '39px'}} className="btn btn-primary">
					    Drink
				</button>
                <br /><br/>
				

				<div className="d-flex flex-wrap">
					{products?.filter((data) => 
          			data.name.toLowerCase().includes(search)
        			).filter((res,index) => {
                            return index > 5
                        } 
                    ).map((product) => (
						<div className="col-lg">
                        <div className="card bg-black border-warning mb-4" style={{width: '18rem',marginLeft: '39px'}}>
                            <img src={product.image_url} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <button style={{borderTopRightRadius:"15px",borderBottomRightRadius:"15px"}} type="button" className="btn btn-primary">
                                        {product.tags?.name}
                                    </button><br/><br/>
                                            <h5 className="card-title text-white">{product.name}</h5>
                                            <h5 className="card-title text-muted">Harga : {convertToRupiah(product.price)}</h5><br/>        
                                    <button onClick={() =>
										addProductToCart(
											product
										)
									}  
									style={{width: '15rem'}} type="button" className="btn btn-warning text-white">
                                    	Add to Cart
                                    </button><br/><br/>               
                                </div>
                        </div>
                    </div>
					))}
				</div>
				
			</main>
		</div>
	);
}

export default Drink;
