import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/Auth';

const AddProduct = () => {

     const { user } = useContext(AuthContext);
     const navigate = useNavigate();
     var now = new Date()
     var time = now.toLocaleTimeString();


     const handleSubmit = (event) => {
          event.preventDefault();
          const form = event.target;
          const name = form.serviceName.value;
          const description = form.description.value;
          const logo = form.imageUrl.value;
          const productCondition = form.productCondition.value;
          const number = form.Number.value;
          const sellerLocation = form.Location.value;
          const category = form.category.value;
          const resalePrice = form.resalePrice.value;
          const originalPrice = form.originalPrice.value;
          const usedTime = form.usedTime.value;


          // const product = { name,resalePrice,originalPrice,usedTime,  description, logo,category, productCondition,number, location}
          // console.log(product);

          const product = {
               Category_Name: category,
               description: description,
               location: sellerLocation,
               logo,
               name,
               original_price: originalPrice,
               resale_rice: resalePrice,
               seller_name: user?.displayName,
               used: usedTime,
               productCondition,
               number,
               email: user?.email,
               posted: time


          }

          console.log(product);


          fetch('http://localhost:5000/category', {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(product)
          })
               .then(res => res.json())
               .then(data => {
                    console.log(data);
                    navigate('/dashboard/myProducts')
               })
     }
     return (
          <div className="container mx-auto">
               <div className="flex justify-center px-6 my-10">

                    <div className="w-full xl:w-3/4 shadow-2xl   lg:w-11/12 flex">

                         <div
                              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-6/12 bg-cover rounded-l-lg"
                              style={{ backgroundImage: ` url('https://cdn.vox-cdn.com/thumbor/Nz6AVb_X0pCxrpNuseD0D4ouEWc=/0x0:8256x5504/1400x1400/filters:focal(4128x2752:4129x2753)/cdn.vox-cdn.com/uploads/chorus_asset/file/22151746/Razer_Blade_15_Base_Model___GTX_1660_Ti__Late_2020__Setup.png')`, backgroundPosition: 'center' }}
                         ></div>

                         <div className="w-full lg:w-8/12  bg-white p-5  rounded-lg lg:rounded-l-none">
                              <h3 className="pt-4 text-3xl font-bold text-center">Add Your Product!</h3>
                              <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8  bg-white rounded">

                                   <div className="mb-4 md:flex md:justify-between">
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                             <label className="block mb-2 text-sm font-bold text-gray-700" for="Service Name">
                                                  Product Name
                                             </label>
                                             <input
                                                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                  id="Service Name"
                                                  name='serviceName'
                                                  type="text"
                                                  placeholder="Service Name"
                                                  required
                                             />
                                        </div>
                                        <div className="md:ml-2">
                                             <label className="block mb-2 text-sm font-bold text-gray-700" for="usedTime">
                                                  Used Time
                                             </label>
                                             <input
                                                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                  id="ProductPrice"
                                                  name='usedTime'
                                                  type="text"
                                                  placeholder="Used time.."
                                                  required
                                             />
                                        </div>
                                   </div>
                                   <div className="mb-4 md:flex md:justify-between">
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                             <label className="block mb-2 text-sm font-bold text-gray-700" for="originalPrice">
                                                  Original Price
                                             </label>
                                             <input
                                                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                  id="Service Name"
                                                  name='originalPrice'
                                                  type="text"
                                                  placeholder="Original Price"
                                                  required
                                             />
                                        </div>
                                        <div className="md:ml-2">
                                             <label className="block mb-2 text-sm font-bold text-gray-700" for="Resale Price">
                                                  Resale Price
                                             </label>
                                             <input
                                                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                  id="Resale Price"
                                                  name='resalePrice'
                                                  type="text"
                                                  placeholder="Resale price.."
                                                  required
                                             />
                                        </div>
                                   </div>
                                   <div className="mb-4 md:flex md:justify-between">
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                             <label className="block mb-2 text-sm font-bold text-gray-700" for="Product Condition">
                                                  Product Condition
                                             </label>
                                             <input
                                                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                  id=" Product_Condition"
                                                  name='productCondition'
                                                  type="text"
                                                  placeholder="Type condition.."
                                                  required
                                             />

                                        </div>
                                        <div className="md:ml-2">
                                             <label className="block mb-2 text-sm font-bold text-gray-700" for="Number">
                                                  Mobile Number
                                             </label>
                                             <input
                                                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                  id="Number"
                                                  name='Number'
                                                  type="text"
                                                  placeholder="Number.."
                                                  required
                                             />
                                        </div>
                                   </div>


                                   <div className=" md:flex md:justify-between">
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                             <label className="block mb-2 text-sm font-bold text-gray-700" for="url">
                                                  Image URL
                                             </label>
                                             <input
                                                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                  id="url"
                                                  name='imageUrl'
                                                  type="url"
                                                  placeholder="Url......."
                                                  required
                                             />

                                        </div>
                                        <div className="md:ml-2">
                                             <label className="block mb-2 text-sm font-bold text-gray-700" for="rating">
                                                  Location
                                             </label>
                                             <input
                                                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                  id="Location"
                                                  name='Location'
                                                  type="text"
                                                  placeholder="Location...."
                                                  required
                                             />
                                        </div>

                                   </div>
                                   <div className="">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
                                             Product Category
                                        </label>
                                        <select className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                             id='category'
                                             name='category'
                                             required
                                        >
                                             <option disabled selected>Select your product category</option>
                                             <option>Chromebook</option>
                                             <option>Netbook</option>
                                             <option>Ultrabook</option>
                                             <option>Ultraportable</option>
                                             <option>MacBook</option>
                                        </select>
                                   </div>
                                   <div className="mb-5">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
                                             Product Description
                                        </label>
                                        <textarea
                                             className='w-full border shadow focus:outline-none focus:shadow-outline'
                                             name='description'
                                             placeholder='Type your description....'
                                             required
                                        />
                                   </div>

                                   <div className=" text-center">
                                        <button
                                             className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                             type="submit"
                                        >
                                             Add Service
                                        </button>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
          </div>

     );
};

export default AddProduct;