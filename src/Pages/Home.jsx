import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from 'react-bootstrap/Carousel';
import ImageGrid from 'react-grid-carousel'
import { Link } from "react-router-dom";


function Home() {

	
	return(
		<div>
			<Navbar/>
				<div style={{backgroundColor:"black"}}>
						<div className="container">
						<div className="row">
							<div className="col-lg">
								<div className="card-bg-dark">
									<div className="body">
										<div className="title">
										<br/><br/>
											<h4 style={{marginLeft: '39px'}} className="fs-10 text-warning mb-4">Selamat datang di Fast Food </h4>
												<br/>
												<h1 style={{marginLeft: '39px'}} className="display-3 fw-bold text-white mb-4 "> Nikmati <br/> Makanan Sehat <br/> & Lezat Kamu <br/> Ada Disini </h1>
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
										<Carousel>
										<Carousel.Item>
											<img
											className="d-block w-100"
											src="https://www.piknikdong.com/wp-content/uploads/2021/11/Resep-Ayam-Geprek-Bensu-min.jpg"
											width="400" height="400"
											alt="First slide"
											/>
										</Carousel.Item>
										<Carousel.Item>
											<img
											className="d-block w-100"
											src="https://img-global.cpcdn.com/recipes/18e75e45937347db/1200x630cq70/photo.jpg"
											width="500" height="400"
											alt="Second slide"
											/>
										</Carousel.Item>
										<Carousel.Item>
											<img
											className="d-block w-100"
											src="https://img.okezone.com/content/2019/06/09/298/2064765/aroma-kopi-indonesia-semakin-harum-di-world-of-coffe-jerman-C8ygzWfm8s.jpg"
											width="400" height="400"
											alt="Third slide"
											/>
										</Carousel.Item>
										</Carousel>
										</div>
									</center>
								</div>
							</div>
					</div>
				</div>
				<br/><br/><br/><br/>

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

					</div>

				<br/><br/><br/>
					
					
					<div className="container">
						<div className="row">
							<div className="col-lg">
								<div className="card-bg-dark">
								<div>
									<img src="https://www.piknikdong.com/wp-content/uploads/2021/11/Resep-Ayam-Geprek-Bensu-min.jpg"
									className="card-img-top" alt="..." />
								</div>
								</div>
							</div>
							<div className="col-lg">
								<div className="card-bg-dark">
								<div>
									<div className="card-body">
									<h3 style={{marginLeft: '39px'}} className="display-6 fw-bold text-white mb-4">Menyajikan Makanan Terbaik adalah Prioritas Utama Kami</h3><br/>
									<h6 style={{marginLeft: '39px'}} className="fs-10 text-muted mb-4">Ciri khas ayam geprek ini adalah ayam bersalut tepung yang ditumbuk dengan bumbu pedasnya. Jadinya rasa pedas dari bumbu lebih menyerap sampai ke serat-serat dagingnya. Bisa dibilang ini merupakan perkawinan ayam ala amrik dengan bumbu nusantara yang khas. Nah, nampol pastinya buat penggemar ayam tepung yang rasanya crispy. </h6>
								</div>
								</div>
								</div>
							</div>
						</div>
					</div>
					<br/><br/><br/>
					<div className="container">
						<div className="row">
						<div className="col-lg">
								<div className="card-bg-dark">
								<h3 style={{marginLeft: '39px'}} className="display-6 fw-bold text-white mb-4">Kami juga Menyediakan <br/> Beberapa Jenis Makanan</h3><br/>
								</div>
							</div>
						</div>
					</div>
					
					
					<center>
					<div className="col-lg">
						<div className="card bg-black border-black mb-4" style={{width: '75rem'}}>
								<div>            
									<ImageGrid cols={3} rows={1} gap={10} loop>
										<ImageGrid.Item>
											<img style={{marginLeft: '1px'}}  width="400" height="200" src="https://www.piknikdong.com/wp-content/uploads/2021/11/Resep-Ayam-Geprek-Bensu-min.jpg" />
											<h3 className="text-white text-center">Ayam</h3><br/>
										</ImageGrid.Item>
										<ImageGrid.Item>
											<img style={{marginLeft: '1px'}}  width="400" height="200" src="https://www.astronauts.id/blog/wp-content/uploads/2022/11/Resep-Steak-Daging-Sapi-Untuk-Diet-yang-Tetap-Lezat-1200x900.jpg" />
											<h3 className="text-white text-center">Steak</h3><br/>
										</ImageGrid.Item>
										<ImageGrid.Item>
											<img style={{marginLeft: '1px'}}  width="400" height="200" src="https://asset-a.grid.id/crop/0x0:0x0/360x240/photo/2018/07/02/3102929907.jpg" />
											<h3 className="text-white text-center">Sup & Soto</h3><br/>
										</ImageGrid.Item>
										<ImageGrid.Item>
											<img style={{marginLeft: '1px'}}  width="400" height="200" src="https://img.okezone.com/content/2019/06/09/298/2064765/aroma-kopi-indonesia-semakin-harum-di-world-of-coffe-jerman-C8ygzWfm8s.jpg" />
											<h3 className="text-white text-center">Coffe</h3><br/>
										</ImageGrid.Item>
										<ImageGrid.Item>
											<img style={{marginLeft: '1px'}}  width="400" height="200" src="https://thegirlonbloor.com/wp-content/uploads/2021/08/Mango-Dragonfruit-Refresher-11.jpg" />
											<h3 className="text-white text-center">Cold Drinks</h3><br/>
										</ImageGrid.Item>
										</ImageGrid>
										</div>
								</div>
							</div>
					</center>
					<br/>
		
					<h1 className="fs-10 text-warning text-center mb-4">CUSTOMER'S REVIEW </h1><br/>
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
				</div>
			<Footer/>
		</div>
	)
}

export default Home;
