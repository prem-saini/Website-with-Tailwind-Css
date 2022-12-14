import React from "react"
function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar_item bg-[#6EC1E4] flex justify-between  md:justify-between  ">
                    <div className="flex justify-start items-center">
                        <span>US: +1-628-246-0018, INDIA: +91-7597333337</span></div>
                    <div className="flex relative mr-8 md:relative md:mr-40">
                        <img className="w-4 rounded-[12px] mx-2 my-4 md:rounded-[12px] md:mx-2 " src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Facebook%202x?scl=1" alt="logo" />
                        <img className="w-4 rounded-[12px] mx-2 my-4 md:rounded-[12px] md:mx-2" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Twitter%202x?scl=1" alt="logo" />
                        <img className="w-4 rounded-[12px] mx-1 mr-2 my-4 md:rounded-[12px] md:mx-2" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/YouTube%202x?scl=1" alt="logo" />
                    </div>



                </div>


                <div className="flex justify-between bg-white my-5 md:mr-40">
                    <div className="">
                        <img src="https://eplanetsoft.com/wp-content/uploads/2019/12/logo-2.png" alt="" />
                    </div>
                    <div className="hambegur inline-block p-2 mx-8 cursor-pointer md:hidden">
                        <div className="line h-0.5 w-6 my-1 bg-black "></div>
                        <div className="line h-0.5 w-6 my-1 bg-black "></div>
                        <div className="line h-0.5 w-6 my-1 bg-black "></div>

                    </div>
                    <div className="">
                        <ul className="hidden md:flex md:items-center md:space-x-6 md:my-3">
                            <li>Home</li>
                            <li>Web Service</li>
                            <li>SEO Service</li>
                            <li>Hire</li>
                            <li>Career</li>
                            <li>Blog</li>
                            <li>Contact</li>
                            <button className="w-20 bg-sky-600 text-white md:w-32 md:p-2">Let's Talk</button>
                        </ul>
                    </div>

                </div>
                <div className="bg-[#6EC1E4] flex flex-col my-5 md:flex-row">
                    <div className="md:my-40 md:w-112">
                        <span className="text-white text-4xl md:text-8xl ">We Create Websites & Apps that make you a brand.</span>
                        <hr className="w-[30%] bg-white mx-5 my-5 md:w-[10%]" />
                        <p className="text-white mx-2 my-2 md:font-medium">We help clients to get more than
                            what they need by making optimized & Fast websites and apps.</p>

                        <button className="w-36 bg-sky-800 mx-2 text-white h-8 md:w-42 md:h-12 md:mt-16">View Our Work</button>
                        <button className="w-36 bg-sky-800 mx-2 text-white h-8 md:w-42 md:h-12 md:mt-16">Request a Quote</button>
                    </div>
                    <div className="my-3 md:w-[100%] md:mt-32">
                        <img src="https://eplanetsoft.com/wp-content/uploads/2020/06/web_design.png" alt="" />
                    </div>
                </div>

                <div className="flex flex-col bg-blue-200 md:flex-row md:justify-between md:h-[200%]">
                    <div className=" flex flex-col justify-center items-center my-4 md:ml-24">
                        <p className="text-black-400">V E R Y  B E S T  O P I N I O N S</p>
                        <span className="font-bold text-3xl text-center">SOME OF OUR CLIENTS</span>
                    </div>
                    <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-16 md:mr-36 ">
                        <img src="https://eplanetsoft.com/wp-content/uploads/2022/11/client-logo-9.png" alt="" />
                        <img src="https://eplanetsoft.com/wp-content/uploads/2022/11/client-logo-8.png" alt="" />
                        <img src="https://eplanetsoft.com/wp-content/uploads/2022/11/client-logo-7.png" alt="" />
                    </div>
                </div>
                <div className=" my-5 md:mt-10 md:flex md:justify-center md:items-center md:flex-col">
                    <p className="text-sky-600 text-3xl text-center md:text-4xl">Fall In Love With Our Services</p>
                    <hr className="w-[30%]  bg-blue-1200 mx-32 my-5 md:w-[10%] " />
                </div>

                <div className="md:flex md:justify-around md:items-center md:ml-24">
                    <div className="">
                        <img src="https://eplanetsoft.com/wp-content/uploads/2020/03/intro-1-300x243.png" alt="" />
                    </div>
                    <div className="flex flex-col ">
                        <span className=" text-center text-2xl text-black font-bold md:mr-96 ">Web Development</span>
                        <p className="text-center md:w-[40%] md:ml-32">We are one the best<b> web development </b> companies providing services to customers worldwide. We use latest development tools to deliver a wide assortment of</p>
                    </div>

                </div>

                <div className="my-5 md:flex md:justify-around md:items-center">
                    <div className="">
                        <p className="text-center text-2xl text-black font-bold md:mr-64">MOBILE DEVELOPMENT</p>
                        <p className="text-center md:w-[40%] md:ml-72">We provide native as well Hybrid <b>Mobile app development </b> at very affordable prices with best results to the clients. We help clients to make their ideas a reality in front of this World.</p>
                    </div>
                    <div className="my-2 md:flex md:justify-center md:items-center md:mr-72">
                        <img src="https://eplanetsoft.com/wp-content/uploads/2020/03/contant-e1668766310737-350x229.png" alt="" />
                    </div>
                </div>

                <div className="my-5 md:flex md:justify-around md:items-center md:ml-24">
                    <div className="">
                        <img src="https://eplanetsoft.com/wp-content/uploads/2020/06/%E2%80%94Pngtree%E2%80%94flat-screen-computers-and-seo_967516-1-350x234.png" alt="" />
                    </div>
                    <div className="my-3">
                        <p className="text-center text-2xl text-black font-bold  md:mr-96">SEO Service</p>
                        <p className="text-center md:w-[40%] md:ml-72">We offer 100% quality<b> SEO services</b> all across the globe with operational excellence and customer satisfaction of highest degree. So, ready to partner with</p>
                    </div>
                </div>
                <div className="my-5  md:flex md:justify-around md:items-center">
                    <div className="">
                        <p className="text-center text-2xl text-black font-bold  md:mr-64">Consulting</p>
                        <p className="text-center md:w-[40%] md:ml-72">We provide global business <b>consulting service</b> which supports strategic consulting for every business existing on web world. It will not only give perfect shape to your business.</p>
                    </div>
                    <div className="my-2 md:flex md:justify-center md:items-center md:mr-72">
                        <img src="https://eplanetsoft.com/wp-content/uploads/2020/03/contant-e1668766310737-350x229.png" alt="" />
                    </div>
                </div>

                <div className="bg-[#0693e3]">
                    <div className="md:mt-16 md:flex md:flex-col md:items-center">
                        <p className="text-white text-4xl text-center md:text-6xl md:my-8">RECENT WORKS</p>
                        <p className="text-white  text-center md:text-2xl md:w-[40%] md:text-center">This is by no means a complete list, but just details of few clients for whom we have recently worked and satisfied them with our impeccable services.</p>

                    </div>
                    <div className="my-5 md:flex md:flex-row md:justify-evenly">
                        <div className="">
                            <img src="https://eplanetsoft.com/wp-content/uploads/2021/06/Ishiply.png" alt="" />



                            <p className=" w-[50%] mx-20 text-center text-white ">Ishiply- SAAS Based Transport Management System</p>
                            <p className="text-center text-white md:mr-48">ishiply.com</p>

                        </div>




                        <div className="">
                            <img src="https://eplanetsoft.com/wp-content/uploads/2021/06/washtrax.png" alt="" />

                            <p className=" w-[50%] mx-20 text-center text-white md:ml-48 ">Washtrax - Track Your Wash operations</p>
                            <p className="text-center text-white">Washtrax.com</p>

                        </div>
                    </div>



                    <div className="my-5 md:flex md:flex-row md:justify-evenly">
                        <div className="">
                            <img src="https://eplanetsoft.com/wp-content/uploads/2021/06/SammyOps.png" alt="" />

                            <p className=" w-[50%] mx-20 text-center text-white ">Sammyops - SAAS Based Fleet management system
                            </p>
                            <p className="text-center text-white md:mr-40">sammyops.com</p>

                        </div>


                        <div className="">
                            <img src="https://eplanetsoft.com/wp-content/uploads/2021/06/shb-screen.png" alt="" />

                            <p className=" w-[50%] mx-20 text-center text-white md:ml-48 ">SECONDHANDBAZAAR.IN - ONLINE CLASSIFIED PORTAL
                            </p>
                            <p className="text-center text-white md:ml-16">SECONDHANDBAZAAR.IN</p>

                        </div>

                    </div>


                </div>


                <div className="my-5">
                    <div className="md:mt-10">
                        <p className="text-center text-gray-400">Don’t take our word, hear it from our clients. Client happiness is our utmost priority.</p>
                        <p className="text-4xl text-center text-sky-900">What Our Clients Say</p>
                    </div>
                    <div className="md:flex">
                        <div className="my-3 flex flex-col items-center  ">
                            <div className="border md:w-[60%]">
                                <p className="text-center my-3 md:w-[90%]">
                                    Thanks to EplanetSoft, we have become more prevalent in our industry which has always been very competitive. Our rankings have gone from 9th or 10th page to 1st or 2nd position on every keyword we are targeting! Because of their ability in the SEO world, all of our employees will be enjoying a nice sized bonus this winter.</p>
                            </div>
                            <img className="w-[30%] my-2 md:w-[20%]" src="https://eplanetsoft.com/wp-content/uploads/2022/11/ava1.png" alt="" />
                            <span className="text-2xl mx-42 ">Eva Williams</span>
                            <span className="text-gray-500 ">CEO & FOUNDER CRIX</span>

                        </div>

                        <div className="my-3 flex flex-col items-center">
                            <div className="border md:w-[60%]">
                                <p className="text-center my-3 md:w-[90%]">
                                    Hello my name is George Barbas, CEO of Coaches Avenue. I highly recommend EplanetSoft as they designed and built our website and found them to be trusting, efficient and highly reliable. In fact, i was so impressed in that I flew to India and purchased a stake in the company, so we can support other young entrepreneurs.</p>
                            </div>
                            <img className="w-[30%] my-2 md:w-[20%]" src="https://eplanetsoft.com/wp-content/uploads/2022/11/y11.png" alt="" />
                            <span className="text-2xl mx-42 ">George Barbas</span>
                            <span className="text-gray-500 ">CEO & ACT Marketing</span>

                        </div>
                    </div>
                </div>


                <div className="bg-[#0693e3] flex flex-col justify-start items-center md:flex-row md:h-[100%] md:my-5">
                    <div className="">
                        <p className="text-center text-white text-2xl md:mb-[2rem]">Achievements</p>
                        <p className="text-white text-center md:mx-3">We take pride in every project we have done. We have grown a lot with our work years.</p>
                    </div>
                    <div className="text-center  my-3 md:flex md:space-x-4 flex-row">
                        <p className="text-white text-3xl md:my-20 ">1,500 +</p>
                        <p className="text-white text-3xl md:my-20">Happy Clients</p>

                        <p className="text-white text-3xl ">2,000 +</p>
                        <p className="text-white text-3xl">Project Completed</p>

                        <p className="text-white text-3xl md:my-20">150 +</p>
                        <p className="text-white text-3xl md:my-20">Worked Employed</p>
                    </div>
                </div>


                <div className="bg-[#081726] flex flex-col md:flex-row md:my-5 ">
                    <div className="my-3 md:mx-36">
                        <p className="text-blue-900 text-2xl">Eplanet Soft</p>
                        <p className="text-white my-2 md:w-[50%]">We strive to offer a wide range of customized and qualitative SEO outsourcing and web designing services to our clients worldwide to help them make critical strategic decisions in their growing business.</p>

                    </div>
                    <div className="my-3 md:ml-[-24rem]">
                        <p className="text-blue-900 text-2xl">Recents Blogs</p>
                        <ul className="my-2">
                            <li className="text-white my-3" >Eplanet Soft – EP Soft Pvt. Ltd. is a Game Changer in India’s Application Development Industry</li>
                            <li className="text-white  my-3">Eplanet Soft Leads All Stacks of Digital Era with Its Extraordinary Technology Solution: GoodFirms</li>
                            <li className="text-white  my-3">Step by Step Guide to Learn WordPress Development</li>
                        </ul>
                    </div>
                    <div className="my-3 md:ml-16">
                        <p className="text-blue-900 text-2xl">Contacts Information</p>
                        <ul className="my-2">
                            <li className="text-white">+91-7597333337</li>
                            <li className="text-white">info@eplanetsoft.com</li>
                            <li className="text-white"> 560-561 Symphony Pride, Kings Rd, Nirman Nagar, Jaipur, Rajasthan 302019</li>

                        </ul>
                    </div>

                    <div className="my-3 md:ml-8">
                        <p className="text-blue-900 text-2xl">Reviews &amp; Recognitions</p>

                        <img className="w-[50%]" src="https://eplanetsoft.com/wp-content/uploads/2022/11/Elpanet-Soft1.png" alt="" />
                        <img className="w-[50%]" src="https://assets.goodfirms.co/badges/color-badge/app-development.svg" alt="" />
                    </div>




                </div>
                <hr />
                <div className=" bg-[#081726] flex flex-col md:flex-row md:justify-between md:my-[-1.3rem] md:h-10">
                    <span className="text-white">2014-2022 @ EP Soft Pvt. Ltd. All Rights Reserved </span>
                    <span className="text-white">Privacy Policy</span>
                    <span className="text-white">Return & Refund Policy</span>
                </div>




            </div>

        </>
    )
}
export default Navbar