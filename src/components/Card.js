import React, { useState } from "react";
import { useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Card = ({product,index,onProductRemove, quantities, setQuantities}) => {

    
    const [quantity,setQuantity] = useState(1)
	const handleQuantityPlus = () => {
        setQuantity(quantity + 1)
        setQuantities({...quantities, [product._id]: quantity})
    }
    const handleQuantityMin = () => quantity > 1 && setQuantity(quantity - 1)
    const handleC = e => {
        const {value} = e.target
        setQuantity(value)
        setQuantities({...quantities, [product._id]: value})
    }

    function convertToRupiah(angka)
    {
        var rupiah = '';		
        var angkarev = angka.toString().split('').reverse().join('');
        for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
        return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
    } 


    
    return (
            <tr>
				<th>
					{index+1}
				</th>
				<th key={product._id}>
					{product.name}
				</th>
				<th>
					Harga:  {convertToRupiah(product.price * quantity)}<br/>
				</th>
				<th>
					<div style={{marginLeft:'50px'}}>
						<input onChange={handleC} value={quantity} className="inline-block w-full h-full text-center focus:outline-none" placeholder="1" />
					</div>
				</th>
				<th>
					<button
						className="btn remove-btn"
						onClick={() =>
						onProductRemove(
						product
						)
						}>
						<RiDeleteBin6Line
							size={20}
						/>
					</button>
				</th>
			</tr>              
    )
}

export default Card