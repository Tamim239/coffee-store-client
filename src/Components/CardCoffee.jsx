import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import PropTypes from 'prop-types';

export const CardCoffee = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, price, photo } = coffee


const handleDelete = _id =>{
    // console.log(_id)
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://coffe-store-server-liart.vercel.app/coffee/${_id}`,{
            method: 'DELETE',
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
           if(data.deletedCount > 0){
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remaining = coffees.filter(cof => cof._id !== _id);
              setCoffees(remaining)
           }
          })
        }
      });
}

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="coffee" />
      </figure>
      <div className="w-full flex items-center justify-between px-4">
        <div className="space-y-3">
          <h2 className="card-title">Name : {name}</h2>
          <p>Chef : {chef}</p>
          <p>Price : {price} Taka</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-2">
           <Link to={`/coffeeDetails/${_id}`}>
           <button className="btn join-item text-2xl bg-[#D2B48C] text-white"><FaEye /></button>
           </Link>
            <Link to={`/updateCoffee/${_id}`}>
            <button className="btn join-item text-2xl bg-[#3C393B] text-white"><MdEdit /></button>
            </Link>
            <button onClick={()=>handleDelete(_id)} className="btn join-item text-2xl bg-[#f20202] text-white"><MdDelete /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

CardCoffee.propTypes ={
  coffee: PropTypes.object,
  coffees: PropTypes.array,
  setCoffees: PropTypes.func
}