import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom"
import Swal from 'sweetalert2'

export const UpdateCoffee = () => {
  const coffee = useLoaderData()
  const { _id, name, chef, supplier, taste, category, details, price, photo } = coffee;

  const handleUpdateCoffee = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const price = form.price.value;
    const photo = form.photo.value;
    const updatedCoffee = { name, chef, supplier, taste, category, details,price, photo };

    fetch(`https://coffe-store-server-liart.vercel.app/coffee/${_id}`,{
      method:'PUT',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if(data.modifiedCount > 0){
          Swal.fire({
            title: 'Success!',
            text: 'Coffee Updated successfully',
            icon: 'success',
            confirmButtonText: 'Done'
          })
        }
      });
  }

  return (
    <section className="p-4 my-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Espresso || UpdateCoffee</title>
      </Helmet>
    <form
      onSubmit={handleUpdateCoffee}
      className="container flex flex-col mx-auto space-y-12 bg-[#eee9da] rounded-md"
    >
      <fieldset className="p-6 rounded-md shadow-sm ">
        <div className="space-y-3 mb-10">
          <h1 className="text-center font-bold text-5xl font-rancho text-[#374151] mb-4">Update Existing Coffee Details</h1>
          <p className="md:w-3/5 mx-auto text-center">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The
            point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full md:col-span-3">
            <label htmlFor="Coffee-name" className="font-medium">
              Name
            </label>
            <input
              id="Coffee-name"
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Enter Coffee Name"
              className="w-full rounded-md py-2 px-3 bg-white"
            />
          </div>

          <div className="col-span-full md:col-span-3">
            <label htmlFor="Chef" className="font-medium">
              Chef
            </label>
            <input
              id="Chef"
              type="text"
              name="chef"
              defaultValue={chef}
              placeholder="Enter Coffee Chef"
              className="w-full rounded-md py-2 px-3 bg-white"
            />
          </div>

          <div className="col-span-full md:col-span-3">
            <label htmlFor="supplier" className="font-medium">
              Supplier
            </label>
            <input
              id="supplier"
              type="text"
              name="supplier"
              defaultValue={supplier}
              placeholder="Enter Coffee Supplier"
              className="w-full rounded-md py-2 px-3 bg-white"
            />
          </div>
          <div className="col-span-full md:col-span-3">
            <label htmlFor="taste" className="font-medium">
              Taste
            </label>
            <input
              id="taste"
              type="text"
              name="taste"
              defaultValue={taste}
              placeholder="Enter Coffee taste"
              className="w-full rounded-md py-2 px-3 bg-white"
            />
          </div>
          <div className="col-span-full md:col-span-3">
            <label htmlFor="category" className="font-medium">
              Category
            </label>
            <input
              id="category"
              type="text"
              name="category"
              defaultValue={category}
              placeholder="Enter Coffee Category"
              className="w-full rounded-md py-2 px-3 bg-white"
            />
          </div>
          <div className="col-span-full md:col-span-2">
            <label htmlFor="details" className="font-medium">
              Details
            </label>
            <input
              id="details"
              type="text"
              name="details"
              defaultValue={details}
              placeholder="Enter Coffee details "
              className="w-full rounded-md py-2 px-3 bg-white"
            />
          </div>
          <div className="col-span-full md:col-span-1">
            <label htmlFor="price" className="font-medium">
              Price
            </label>
            <input
              id="price"
              type="text"
              name="price"
              defaultValue={price}
              placeholder="Enter Coffee Price "
              className="w-full rounded-md py-2 px-3 bg-white"
            />
          </div>
          <div className="col-span-full">
            <label htmlFor="photo" className="font-medium">
              Photo
            </label>
            <input
              id="photo"
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Enter Photo URL"
              className="w-full rounded-md py-2 px-3 bg-white"
            />
          </div>
          <div className="col-span-full">
            <input
              type="submit"
              value="Update Coffee"
              className="w-full bg-[#D2B48C] border border-[#331A15] py-1 font-rancho"
            />
          </div>
        </div>
      </fieldset>
    </form>
  </section>
  )
}
