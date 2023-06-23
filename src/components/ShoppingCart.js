import React, { useEffect, useState } from "react";
import "../style/shoppingCart.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Form } from "react-bootstrap";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Swal from "sweetalert2";


function convertToRupiah(angka)
    {
        var rupiah = '';		
        var angkarev = angka.toString().split('').reverse().join('');
        for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
        return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
    } 

	
function ShoppingCart({
	visibilty,
	products,
	onProductRemove,
	onClose,
	onQuantityChange,
}) {

	const navigate = useNavigate()

	const [user,setUser] = useState()

    useEffect(() => {
        if(Cookies.get('token_user') !==undefined){
            setUser(JSON.parse(Cookies.get('user')))
            }    

    },[])

	const defaultquantities = {}
	products?.map(product => defaultquantities[product._id] = 1)
	const [quantities,setQuantities] = useState(defaultquantities)

	let Total = 0
	products.map((product) => {
		Total += (quantities[product._id] * product.price)
	})

	const [bank,setBank] = useState(null)
	const [optionBankId,setOptionBankId] = useState("-1")

	const [display,setDisplay] = useState(false)
	const [fetchBankStatus,setFetchBankStatus] = useState(true)

	useEffect(()=>{

        let getBank = async () =>{

            let{data} = await axios.get(`https://service-example.sanbercloud.com/api/bank`)
            setBank(data)

        }

        if(fetchBankStatus){
            getBank()           
            setFetchBankStatus(false)
        }

    },[fetchBankStatus,Total])

    const handleOption = (event) => {
        setOptionBankId(event.target.value)
    }

    

	const [input,setInput] = useState(
        {
            name:"",
            kelurahan:"",
            kecamatan:"",
            kabupaten:"",
			provinsi:"",
			detail:""
        }
    )

    const handleChange = (e) => setInput({...input, [e.target.name] : e.target.value})
	

    const handleCheckOut = async (e) => {
        e.preventDefault()

        let {name,kelurahan,kabupaten,kecamatan,provinsi,detail} = input

     if(optionBankId == -1) {
			Swal.fire("pilih bank transaksi kamu!") 
        }else{
			try {
				const {data: delivery_address} = await axios.post(`http://localhost:3000/api/delivery-addresses`,{name,kelurahan,kabupaten,kecamatan,provinsi,detail,id_bank:optionBankId},
				{
					headers: { "Authorization" :' Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDhmZWJiODUzNjQ5MGRkNmY2NjRjYTciLCJmdWxsX25hbWUiOiJ1c2VyIiwiZW1haWwiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImNvc3R1bWVyX2lkIjoyLCJpYXQiOjE2ODcyNDE4MzB9.AqQ7s0XvzUmsbVkKhMpvpD2Wd-Z3aU4ooQjWAqXbToE'}
				})
				const items = products.map((p) => {
					return {
						"product": {
							"_id": p._id,
						},
						"qty": quantities[p._id]
					}
				}) 
				await axios.put(`http://localhost:3000/api/carts`, {items},
				{
					headers: { "Authorization" :' Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDhmZWJiODUzNjQ5MGRkNmY2NjRjYTciLCJmdWxsX25hbWUiOiJ1c2VyIiwiZW1haWwiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImNvc3R1bWVyX2lkIjoyLCJpYXQiOjE2ODcyNDE4MzB9.AqQ7s0XvzUmsbVkKhMpvpD2Wd-Z3aU4ooQjWAqXbToE'}
				})
				await axios.post(`http://localhost:3000/api/orders`, {delivery_address: delivery_address._id},
				{
					headers: { "Authorization" :' Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDhmZWJiODUzNjQ5MGRkNmY2NjRjYTciLCJmdWxsX25hbWUiOiJ1c2VyIiwiZW1haWwiOiJ1c2VyMUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImNvc3R1bWVyX2lkIjoyLCJpYXQiOjE2ODcyNDE4MzB9.AqQ7s0XvzUmsbVkKhMpvpD2Wd-Z3aU4ooQjWAqXbToE'}
				})

				localStorage.setItem(
					"shopping-cart", '[]'
				)
				navigate("/Order");
		  Swal.fire(
			'Transaksi Selesai!',
			'You clicked the button!',
			'success'
		  )
			} catch (err) {
				// Handle Error Here
				alert(err);
			}	 
		}
    }

	
	
	return (		
		<div
			className="modal"
			style={{
				display: visibilty
					? "block"
					: "none",
			}}>
			<div className="shoppingCart">
				<div className="header">
					<h2>Shopping cart</h2>
					<button
						className="btn close-btn"
						onClick={onClose}>
						<AiFillCloseCircle
							size={30}
						/>
					</button>
				</div>
				<div className="cart-products">
					{products.length === 0 && (
						<span className="empty-text">
							Your basket is
							currently empty
						</span>
					)}
					{
						!user &&
						<p style={{marginLeft:'40px'}}>Tidak ada checkout!</p>
					}
					{
						user &&
						<table className="table">
						<thead>
							<tr className="text-center">
								<th scope="col">No</th>
								<th scope="col">Name</th>
								<th scope="col">Price</th>
								<th scope="col">Qty</th>
								<th scope="col"></th>
							</tr>
						</thead>
						<tbody>
						{products.map((product,index) => {
								return (
									<Card product={product} index={index} onProductRemove={onProductRemove} quantities={quantities} setQuantities={setQuantities} key={index}/>
								)
							})
							}
					</tbody>
					</table>
					}
					<br/><br/><br/><br/>
					<div className="container">
						<div style={{width: '45rem',}} className="card "><br/>
						<span>
							<p style={{marginLeft:'20px'}}>Pilih bank transaksi anda:</p>
							<div className="container">
								<div style={{width: '42rem',height:'40px'}} className="card">
									<div className="input-group mb-3">
										<select className="form-select" id="inputGroupSelect01" onChange={handleOption} value={optionBankId}>
										<option  defaultValue={"-1"}>Choose a bank</option>
										{
											bank !== null &&
											bank.map((res) => {
												return  <option key={res.id} value={res.id}>{res.bank_name}</option>
											})
                                		}
										</select>
									</div>
								</div>
							</div><br/>
							
							<p style={{marginLeft:'20px'}}>Masukkan identitas anda : </p>
							<form onSubmit={handleCheckOut}>
								<div className="container">
									<div style={{width: '42rem',height:'40px'}} className="card">
										<div className="input-group mb-3">
										<input required  onChange={handleChange} name="name" value={input.name} type="text" className="form-control" placeholder="Nama..." aria-label="Username" aria-describedby="basic-addon1" />
										</div>
									</div>
								</div><br/>
								<div className="container">
									<div style={{width: '42rem',height:'40px'}} className="card">
										<div className="input-group mb-3">
										<input required  onChange={handleChange} name="kelurahan" value={input.kelurahan} type="text" className="form-control" placeholder="Kelurahan..." aria-label="Username" aria-describedby="basic-addon1" />
										</div>
									</div>
								</div><br/>
								<div className="container">
									<div style={{width: '42rem',height:'40px'}} className="card">
										<div className="input-group mb-3">
										<input required  onChange={handleChange} name="kecamatan" value={input.kecamatan} type="text" className="form-control" placeholder="Kecamatan..." aria-label="Username" aria-describedby="basic-addon1" />
										</div>
									</div>
								</div><br/>
								<div className="container">
									<div style={{width: '42rem',height:'40px'}} className="card">
										<div className="input-group mb-3">
										<input required  onChange={handleChange} name="kabupaten" value={input.kabupaten} type="text" className="form-control" placeholder="Kabupaten..." aria-label="Username" aria-describedby="basic-addon1" />
										</div>
									</div>
								</div><br/>
								<div className="container">
									<div style={{width: '42rem',height:'40px'}} className="card">
										<div className="input-group mb-3">
										<input required  onChange={handleChange} name="provinsi" value={input.provinsi} type="text" className="form-control" placeholder="Provinsi..." aria-label="Username" aria-describedby="basic-addon1" />
										</div>
									</div>
								</div><br/>
								<div className="container">
									<div style={{width: '42rem',height:'40px'}} className="card">
										<div className="input-group mb-3">
										<input required  onChange={handleChange} name="detail" value={input.detail} type="text" className="form-control" placeholder="Detail..." aria-label="Username" aria-describedby="basic-addon1" />
										</div>
									</div>
								</div><br/>
								<div className="container">
									<div style={{width: '15rem',}} className="card "><br/>
									<span>
									<table className="table">
									<tbody>
										{
											!user &&
											<p className="text-center">Total: Rp.0</p>
										}
									 	{
											user &&
											<p className="text-center">Total:	{convertToRupiah(Total)}</p>
										}
									</tbody>
									</table>
									
									</span>
								
										<button  type="submit" style={{width: '13rem',marginLeft:"10px"}} 	className="btn btn-dark text-white">
											Transaction
										</button>
									<br/>
									</div>
								</div>	
							</form>
								<br/>
						</span>
						</div>
					</div><br/>
					
				</div>
			</div>
		</div>
	);
}

export default ShoppingCart;
