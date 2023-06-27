import Footer from "../components/Footer";
import React, {
	useState,
	useEffect,
} from "react";
import "../style/main.css";
import { GiShoppingBag } from "react-icons/gi";
//import RatingStars from "./components/RatingStars";
import ShoppingCart from "../components/ShoppingCart";
import axios from "axios";
import { Container,Col, Nav, Navbar } from "react-bootstrap";
import { Outlet, useNavigate,Link } from "react-router-dom";
import Cookies from "js-cookie";
import { FaBook } from "react-icons/fa";
import Order from "./Order";
import Swal from "sweetalert2";
import heroImg from "../../src/assets/Image/logo.webp";



function Home() {

	const [products, setProduct] = useState([]);
	const [search,setSearch] = useState("");
	const [user,setUser] = useState (undefined)
	const navigate = useNavigate()

    const handleLogout = () => {
        Cookies.remove('token_user')
        Cookies.remove('user');
        navigate("/Login");
		Swal.fire('Logout Succes')
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
			console.log(result.data.data);
			setProduct(result.data.data);
		})
		.catch((error) => console.log(error));
	}, []);

	const [cartsVisibilty, setCartVisible] = useState(false);

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

	
	return(
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
				<div style={{backgroundColor:"black"}}>
						<div className="container">
						<div className="row">
							<div className="col-lg">
								<div className="card-bg-dark">
									<div className="body">
										<div className="title">
										<br/><br/>
											<br/>
												<h1 style={{marginLeft: '39px'}} className="display-4 fw-bold text-white mb-4 "> Nikmati <br/> Makanan Sehat <br/> & Lezat Kamu <br/> Ada Disini </h1>
												<h6 style={{marginLeft: '39px'}} className="fs-10 text-muted mb-4">Makanan biasanya berasal dari tumbuhan ,<br/> hewan atau jamur ,dan  mengandung nutrisi penting,<br/>seperti karbohidrat,lemak,protein,vitamin atau mineral </h6>
												<button style={{marginLeft: '39px'}}  type="button" className="btn btn-outline-warning">
												<Link className="link-warning" to="/Menu" > <div className="text-warning">View Menu</div></Link>
												</button>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg">
								<div className="card-bg-dark">
									<center>
										<div>
											<br/><br/><br/><br/><br/>
											<Col lg="6" md="6">
												<div>
													<img src={heroImg} alt="hero-img" width="500" height="300" />
												</div>
											</Col>
										</div>
									</center>
								</div>
							</div>
					</div>
				</div>
				<br/><br/><br/><br/><br/><br/><br/>

				<div lg="12" className="text-center">
					<h3 className="display-6 fw-bold text-warning mb-4"> POPULAR FOODS </h3><br/><br/>
            	</div>

				<center>
				<div className="card bg-black" style={{width: '1200px',height:'90px'}}>
					
				<br/>
				<ul className="nav justify-content-center">
				<Nav className="me-auto">
				<form style={{width:"300px",marginLeft:"10px"}} className="d-flex form-inline my-5 my-lg-0">
					<input
					type="text"
					placeholder="Cari menu favorit anda"
					className="form-control"
					onChange={(e) => setSearch(e.target.value)}
					/> 
				</form>
                </Nav>
				<Nav.Link>
						<div className="text-white"><h4>All</h4></div>
				</Nav.Link>
				<Nav.Link href="/Food">
					<div className="text-white"><h4>Food</h4></div>
				</Nav.Link>
				<Nav.Link href="/Drink">
					<div className="text-white"><h4>Drink</h4></div>
				</Nav.Link>
			</ul>
								
					
				</div>				
				</center>
		
				

				<div className="d-flex text-left flex-wrap">
					{products?.filter((data) => 
          			data.name.toLowerCase().includes(search)
        			).map((product,index) => (
						<div className="col-lg" key={index}><br/><br/>
                        <div className="card bg-black border-black mb-4" style={{width: '18rem',marginLeft: '130px'}}>
                            <img src={product.image} className="card-img-top" alt="" width="100" height="200" />
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
				</div><br/><br/><br/><br/><br/><br/><br/><br/>
				
				<h3 className="display-6 fw-bold text-warning text-center mb-4">OUR SERVICE</h3><br/><br/>
				
				<div className="container">
						<div className="row">
							<div className="col-lg">
								<div className="card bg-dark border-white mb-4">
								<div>
									<img src="https://png.pngtree.com/png-vector/20220612/ourmid/pngtree-buy-pizza-online-icon-png-image_5037671.png"
									width="100" height="200"
									className="card-img-top" alt="..." />
									<div className="card-body">
									<h3 className="text-white"><center>Beli Makan Online</center></h3><br/>
									</div>
								</div>
								</div>
							</div>
							<div className="col-lg">
								<div className="card bg-dark border-white mb-4">
								<div>
								<div>
									<img src="https://png.pngtree.com/png-clipart/20201208/original/pngtree-free-delivery-label-with-the-truck-icon-png-image_5511438.jpg"
									width="100" height="200"
									className="card-img-top" alt="..." />
									<div className="card-body">
									<h3 className="text-white"><center>Melayani Delivery</center></h3><br/>
								</div>
								</div>
								</div>
								</div>
							</div>

							<div className="col-lg">
								<div className="card bg-dark border-white mb-4">
								<div>
									<img src="https://media.istockphoto.com/id/1155908527/id/vektor/melayani.jpg?s=612x612&w=0&k=20&c=6KDfrFmZTUAP_PkS1sO-SAhszNDoyVD9jGmIYwRVP2k="
									width="100" height="200"
									className="card-img-top" alt="..." />
									<div className="card-body">
									<h3 className="text-white"><center>Melayani Catering</center></h3><br/>
								</div>
								</div>
								</div>
							</div>
							
						</div>

					</div><br/><br/><br/><br/><br/><br/><br/><br/>

		
					<h1 className="fs-10 text-warning text-center mb-4">CUSTOMER'S REVIEW </h1><br/><br/>
					<div className="container">
						<div className="row">
						<div className="col-lg">
								<div className="card bg-black border-warning mb-4">
								<div>
									<div className="card-body">
									<h1  className="display-4 fw-bold text-warning text-center mb-4">''</h1>
									<h6  className=" fw-bold text-muted text-center mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."</h6><br/>
									<center><img style={{height:"200px",width:"200px", borderTopRightRadius:"500px",borderTopLeftRadius:"500px",borderBottomLeftRadius:"500px",borderBottomRightRadius:"500px"}} src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon.png"
									className="card-img-top" alt="..." /><br/><br/></center>
									<h4 className="fw-bold text-white text-center mb-4">John Deo</h4>
										<center>
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>  
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>  
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>  
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="yellow" className="bi bi-star-half" viewBox="0 0 16 16">
												<path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
											</svg>  
										</center>
										
								</div>
								</div>
								</div>
							</div>
							<div className="col-lg">
								<div className="card bg-black border-warning mb-4">
								<div>
									<div className="card-body">
									<h1  className="display-4 fw-bold text-warning text-center mb-4">''</h1>
									<h6  className=" fw-bold text-muted text-center mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."</h6><br/>
									<center><img style={{height:"200px",width:"200px", borderTopRightRadius:"500px",borderTopLeftRadius:"500px",borderBottomLeftRadius:"500px",borderBottomRightRadius:"500px"}} src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon.png"
									className="card-img-top" alt="..." /><br/><br/></center>
									<h4 className="fw-bold text-white text-center mb-4">John Deo</h4>
										<center>
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>  
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>  
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>  
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="yellow" className="bi bi-star-half" viewBox="0 0 16 16">
												<path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
											</svg>  
										</center>
										
								</div>
								</div>
								</div>
							</div>
							<div className="col-lg">
								<div className="card bg-black border-warning mb-4">
								<div>
									<div className="card-body">
									<h1  className="display-4 fw-bold text-warning text-center mb-4">''</h1>
									<h6  className=" fw-bold text-muted text-center mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."</h6><br/>
									<center><img style={{height:"200px",width:"200px", borderTopRightRadius:"500px",borderTopLeftRadius:"500px",borderBottomLeftRadius:"500px",borderBottomRightRadius:"500px"}} src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon.png"
									className="card-img-top" alt="..." /><br/><br/></center>
									<h4 className="fw-bold text-white text-center mb-4">John Deo</h4>
										<center>
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>  
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>  
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>  
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="yellow" className="bi bi-star-half" viewBox="0 0 16 16">
												<path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
											</svg>  
										</center>
										
								</div>
								</div>
								</div>
							</div>
							
						</div>

					</div>
				</div><br/><br/><br/><br/>
			<Footer/>
		</div>
	)
}

export default Home;
