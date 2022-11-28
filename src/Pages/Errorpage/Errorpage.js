import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
     return (
          <div>
               <div className='flex justify-center'>
                    <img src="https://i.pinimg.com/originals/a8/12/1a/a8121abee959e18cbad25ad4046f76d8.gif" alt="" className='' />
               </div>
               <div className='flex justify-center p-10'>
                         <Link to='/'><button className='btn glass bg-indigo-600 hover:bg-indigo-800'>Go back home</button></Link>
                    </div>


          </div>
     );
};

export default Errorpage;