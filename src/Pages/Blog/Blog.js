import React from 'react';

const Blog = () => {
     return (
          <div className='container m-auto my-10'>

               <div>
                    <img className='' src="https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg?w=2000"  alt="" />
               </div>
               <p className='text-3xl font-bold text-center '>BLOG POST</p>
               <div className="flex flex-col m-3 ">

                    {/* QUESTION NO 1 */}
                    <div className="grid card bg-slate-700 text-white shadow-2xl rounded-box p-10">
                         <h2 className='text-2xl text-white font-semibold'>1.What are the different ways to manage a state in a React application?</h2> <br />
                         <p className='text-lg'>
                              <strong>Local (UI) state –</strong> Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs. <br />  <br />

                              <strong> Global (UI) state – </strong> Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application <br /><br />


                              <strong>Server state –</strong> Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.Fortunately there are tools such as SWR and React Query that make managing server state much easier. <br /> <br />


                              <strong> URL state – </strong> Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one.In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.


                         </p>
                    </div>
                    <div className="divider"></div>
                    {/* QUESTION NO 2 */}
                    <div className="grid card bg-slate-700 text-white shadow-2xl rounded-box p-10">
                         <h2 className='text-2xl text-white'>2. How does prototypical inheritance work?</h2> <br />
                         <p className='text-lg'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                    </div>
                    <div className="divider"></div>
                    {/* QUESTION NO 3 */}
                    <div className="grid card bg-slate-700 text-white shadow-2xl rounded-box p-10">
                         <h2 className='text-2xl text-white'>3. What is a unit test? Why should we write unit tests?</h2> <br />
                         <p className='text-lg'>
                              <strong>What is Unit Testing?</strong> <br />
                              Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class.Generally, smaller tests are better as they give a more granular view of your code’s performance. Also, when you test very small units, your tests can run fast, like a thousand tests in a second fast. <br /> <br />

                              <strong>  Why Do We Need Unit Testing?</strong> <br />
                              To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests... <br /> Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.
                              Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.
                              It simplifies the debugging process.
                              Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.
                              Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.

                         </p>
                    </div>
                    <div className="divider"></div>
                    {/* QUESTION NO 4 */}
                    <div className="grid card bg-slate-700 text-white shadow-2xl rounded-box p-10">
                         <h2 className='text-2xl text-white'>4. React vs. Angular vs. Vue?</h2> <br />
                         <p className='text-lg'>
                              <strong>Angular -</strong> developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name – AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular. <br />

                              <strong>Vue -</strong> also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.Further reading: Vue.js Tutorial for Beginner Developers. <br />

                               <strong>React -</strong> developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website.

                         </p>
                    </div>
               </div>
          </div>
     );
};

export default Blog;