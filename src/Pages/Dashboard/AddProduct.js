import React from 'react';

const AddProduct = () => {
     const handleSubmit = (event) => {
          event.preventDefault();
          const form = event.target;
          const name = form.serviceName.value;
          const price = form.servicePrice.value;
          const description = form.description.value;
          const logo = form.imageUrl.value;
          const rating = form.rating.value;

          const service = { name, price, description, logo, rating }
          console.log(service);


          // fetch('https://home-service-server-rosy.vercel.app/allService', {
          //      method: 'POST',
          //      headers: {
          //           'content-type': 'application/json'
          //      },
          //      body: JSON.stringify(service)

          // })
     }
     return (
          <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">

               <div className="w-full xl:w-3/4 shadow-2xl   lg:w-11/12 flex">

                    <div
                         className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                         style={{ backgroundImage: ` url('https://arscleanit.com.ng/wp-content/uploads/2017/12/house-maintenance-tips.jpg')` }}
                    ></div>

                    <div className="w-full lg:w-7/12  bg-white p-5  rounded-lg lg:rounded-l-none">
                         <h3 className="pt-4 text-3xl font-bold text-center">Add Your Service!</h3>
                         <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                              <div className="mb-4 md:flex md:justify-between">
                                   <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" for="Service Name">
                                             Service Name
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
                                        <label className="block mb-2 text-sm font-bold text-gray-700" for="servicePrice">
                                             Service Price
                                        </label>
                                        <input
                                             className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                             id="servicePrice"
                                             name='servicePrice'
                                             type="text"
                                             placeholder="$ Price.."
                                             required
                                        />
                                   </div>
                              </div>
                              <div className="mb-4">
                                   <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
                                        Service Description
                                   </label>
                                   <textarea
                                        className='w-full border shadow'
                                        name='description'
                                        placeholder='Type your description....'
                                        required
                                   />
                              </div>
                              <div className="mb-4 md:flex md:justify-between">
                                   <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" for="url">
                                             Image URL
                                        </label>
                                        <input
                                             className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                             id="url"
                                             name='imageUrl'
                                             type="url"
                                             placeholder="url......."
                                             required
                                        />

                                   </div>
                                   <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" for="rating">
                                             Rating
                                        </label>
                                        <input
                                             className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                             id="rating"
                                             name='rating'
                                             type="text"
                                             placeholder="Rating...."
                                             required
                                        />
                                   </div>
                              </div>
                              <div className="mb-6 text-center">
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