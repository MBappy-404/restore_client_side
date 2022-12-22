import React from 'react';
import Location from './Location';

const Contact = () => {
     return (
  
               
<div className="container my-10 px-6 mx-auto">
     <h1 className='text-2xl md:text-4xl text-center text-indigo-500 font-semibold mb-10'>Contact Us</h1>
  <section className="mb-20 text-gray-800">
    <div className="relative overflow-hidden bg-no-repeat bg-cover"
      style={{backgroundImage: `url(${'https://www.clemconsultingsrl.com/wp-content/uploads/2021/03/1575989448.jpg'})`,backgroundPosition: '50%',  height: '300px'}}>
    </div>
    <div  className="container text-gray-800 px-4 md:px-12">
      <div className="block rounded-lg shadow-lg py-10 md:py-12 px-2 md:px-6"
        style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <div className="flex flex-wrap">
          <div className="grow-0 shrink-0 basis-auto w-full xl:w-5/12 px-3 lg:px-6 mb-12 xl:mb-0">
            <form  data-aos="fade-up">
              <div className="form-group mb-6">
                <input type="text" className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:border-blue-600 focus:outline-none" id="exampleInput7"
                  placeholder="Name"/>
              </div>
              <div className="form-group mb-6">
                <input type="email" className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:border-blue-600 focus:outline-none" id="exampleInput8"
                  placeholder="Email address"/>
              </div>
              <div className="form-group mb-6">
                <textarea className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:border-blue-600 focus:outline-none
              " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="
              w-full
              px-6
              py-2.5
              bg-blue-600
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-blue-700 hover:shadow-lg
              focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-blue-800 active:shadow-lg
              transition
              duration-150
              ease-in-out">Send</button>
            </form>
          </div>
          <div   data-aos="zoom-out-up" className="grow-0 shrink-0 basis-auto w-full xl:w-7/12">
            <div className="flex flex-wrap">
              <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="headset" className="w-5 text-white"
                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor"
                          d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <div className="grow ml-6">
                    <p className="font-bold mb-1">Technical support</p>
                    <p className="text-gray-500">+1 234-567-89</p>
                  </div>
                </div>
              </div>
              <div   data-aos="zoom-out-up" className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dollar-sign"
                        className="w-3 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512">
                        <path fill="currentColor"
                          d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <div className="grow ml-6">
                    <p className="font-bold mb-1">Sales questions</p>
                    <p className="text-gray-500">re.sales@gmail.com</p>
                  </div>
                </div>
              </div>
              <div   data-aos="zoom-out-up" className="mb-12 md:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                <div className="flex align-start">
                  <div className="shrink-0">
                    <div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="newspaper"
                        className="w-5 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor"
                          d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <div className="grow ml-6">
                    <p className="font-bold mb-1">Press</p>
                    <p className="text-gray-500">re.press@gmail.com</p>
                  </div>
                </div>
              </div>
              <div   data-aos="zoom-out-up" className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                <div className="flex align-start">
                  <div className="shrink-0">
                    <div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bug" className="w-5 text-white"
                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor"
                          d="M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <div className="grow ml-6">
                    <p className="font-bold mb-1">Bug report</p>
                    <p className="text-gray-500">re.bugs@gmail.com</p>
                  </div>
                </div>
              </div>
              <div   data-aos="zoom-out-up" className=" mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                <div className="flex align-start">
                  <div className="shrink-0">
                    <div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bug" className="w-5 text-white"
                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <div className="grow ml-6">
                    <p className="font-bold mb-1">Country</p>
                    <p className="text-gray-500">Bangladesh</p>
                  </div>
                </div>
              </div>
              <div   data-aos="zoom-out-up" className="grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                <div className="flex align-start">
                  <div className="shrink-0">
                    <div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bug" className="w-5 text-white"
                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                       <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="grow ml-6">
                    <p className="font-bold mb-1">Place</p>
                    <p className="text-gray-500">Rajshahi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* location  */}
  <section>
     <Location></Location>
  </section>
  

</div>

          
     );
};

export default Contact;