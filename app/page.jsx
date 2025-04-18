import Image from "next/image"; 
import logo from "../images/logo.png";
import skuter from "../images/image.png";
import scooter2 from "../images/scooter2.png"
import mator from "../images/mator.png"
import golf2 from "../images/golf2.png"
import back from "../images/back.png"
import korzina from "../images/korzina.png"
import colors from "../images/colors.png"




export default function Home() {
  return (
    <section className="">
      <div className="mx-auto px-4 bg-gray-100">
        <header className="flex flex-col sm:flex-row items-center justify-between py-5 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <Image className="ml-4" src={logo} alt="logo" width={50} height={40} />
          </div>

          <nav className="flex-1 flex justify-center space-x-4 sm:space-x-6 flex-wrap text-center">
            <button className="text-md transition duration-300 cursor-pointer font-bold">PRODUCTS</button>
            <button className="text-md transition duration-300 cursor-pointer font-bold">GALLERY</button>
            <button className="text-md transition duration-300 cursor-pointer font-bold">CONTACT</button>
          </nav>

          <div className="flex space-x-4 sm:space-x-6">
            <button className="text-sm sm:text-lg rounded-sm w-20 h-10 shadow-2xl bg-gray-700 text-white hover:text-yellow-500 transition duration-300 cursor-pointer">Sign In</button>
            <button className="text-sm sm:text-lg rounded-sm w-20 h-10 shadow-2xl bg-gray-700 text-white hover:text-yellow-500 transition duration-300 cursor-pointer">Log In</button>
          </div>
        </header>
      </div>

      <hr className="border-t-2 border-gray-300"/>

      <section>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left px-4 md:px-20">
          <h1 className="text-4xl md:text-7xl font-bold mt-6 md:mt-0">
            LET'S RIDE <br /> THE FUTURE.
          </h1>
          <div className="bg-gray-300 w-full md:w-[803px] mt-4 rounded-s-full flex justify-center">
            <Image
              className="w-[300px] md:w-[600px]"
              src={skuter}
              alt="skuter"
            />
          </div>

        </div>
        <hr className="border-t-4 border-gray-500 w-96"/>
        <div>
          <h1 className="pl-2 font-bold">Simple and sleek design with users <br /> in mind.</h1>
        </div>
        <div className="">
          <button className=" bg-gray-900 ml-2 mt-4 shadow-black-2shadow-2xl font-bold w-20 cursor-pointer text-white rounded-xl h-10 "> 
            <a target="blank" href="https://carolinarides.com/product/kaaspeed-electric-moped-black-flat-tires/ ">buy now</a>
          </button>
          <button className="ml-10 text-white  w-32  h-10 rounded-xl bg-gray-900 "><a target="blank" href="https://youtu.be/08EndER3pKo?si=NC-FJPkFWOrihs-j"> watch our video</a></button>
        </div>
      </section>
      <div className="p-6 md:p-14 flex flex-col md:flex-row justify-center md:space-x-14 space-y-6 md:space-y-0">
  <div className="bg-gray-300 w-full md:w-26 h-16 rounded-xl text-center shadow-2xl">
    <h1 className="font-extrabold">105 lbs</h1>
    <p>Net Weight</p>
  </div>
  <div className="w-full md:w-26 bg-gray-300 text-center h-16 rounded-xl shadow-2xl">
    <h1 className="font-extrabold">26 mph</h1>
    <p>Top Speed</p>
  </div>
  <div className="bg-gray-300 w-full md:w-26 text-center h-16 rounded-xl shadow-2xl">
    <h1 className="font-extrabold">38 miles</h1>
    <p>Max Range</p>
  </div>
  <div className="bg-gray-300 w-full md:w-26 text-center h-16 rounded-xl shadow-2xl">
    <h1 className="font-extrabold">89 nm</h1>
    <p>Max-torques</p>
  </div>
  <div className="bg-gray-300 w-full md:w-26 text-center h-16 rounded-xl shadow-2xl">
    <h1 className="font-extrabold">22% slope</h1>
    <p>Hill Climbing</p>
  </div>
  <div className="bg-gray-300 w-full md:w-26 text-center h-16 text-sm rounded-xl shadow-2xl">
    <h1 className="font-extrabold">2X</h1>
    <p>Hydracic Disc Brakes</p>
  </div>
</div>
<section className="px-4 py-8">
  <div>
    <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-800">
      Product information
    </h1>
    <p className="text-center text-lg md:text-xl pt-6 md:pt-10">
      Our Scooter has following unique design and technology features:
    </p>
  </div>

  <div className="flex flex-col md:flex-row gap-6 items-start p-4">
    <div className="flex flex-col gap-4 items-center md:items-start">
      <Image
        className="w-full md:w-[750px] h-auto"
        src={scooter2}
        alt="scooter"
      />
    </div>

    <div className="space-y-6 md:space-y-10 font-bold pt-10 md:pt-20 md:pl-20 text-lg md:text-2xl">
      <p>1. Lightweight aircraft grade aluminium frame</p>
      <p>2. Car grade lithium battery</p>
      <p>3. Self-balanced</p>
      <p>4. Plug n play</p>
      <p>5. Quick release adapter</p>
      <p>6. RFID key card</p>
    </div>
  </div>
</section>
<section>
  <div>
    <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-800">
    High Efficiency Motor
    </h1>
    <p className="text-center text-lg md:text-xl pt-6 md:pt-10">More torque for powerful riding with 22% maximum hill climbing capability.</p>
    <Image className="w-[820px]  justify-self-center" src={mator} alt="mator"/>
  </div>
</section>
<section>
  <div>
    <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-800">
    Multiple Accessories
    </h1>
    <p className="text-center text-lg md:text-xl pt-6 md:pt-10">There are multiple modes for the scooter for your multiple needs.</p>
  </div>
  <div>
  <div className="flex flex-col md:flex-row gap-6 items-start p-4">

    <div className="space-y-6 md:space-y-10 font-bold pt-10 md:pt-20 md:pl-20 text-lg md:text-2xl">
      <h1 className="font-bold text-5xl">Golf Bag Rock</h1>
      <p>1. Material : Aluminium alloy</p>
      <p>2. Color : Black</p>
      <p>3. Capacity : 45lbs</p>
      <p>4. Ease : Steady & adjustable</p>
    </div>
    <div className="flex flex-col gap-4 items-center md:items-start">
        <Image
        className="w-full md:w-[500px] h-auto"
        src={golf2}
        alt="golf2"
      />
    </div>
  </div>
  </div>
</section>
<section>
<div className="space-y-6 md:space-y-10 font-bold pt-10 md:pt-5  text-lg md:text-2xl">
    <div className="flex  gap-4 items-center md:items-start">
        <Image
        className="w-full md:w-[450px] h-auto"
        src={back}
        alt="back"
      />
       <Image
        className="w-full md:w-[210px] h-auto mt-50"
        src={korzina}
        alt="korzina"
      />
    </div> 
    </div>
  </section>
  <section>
    <div className="border-2 justify-self-center w-96 text-2xl text-center mt-16">
      <h1>
      More Accessories Coming Soon
      </h1>
    </div>
    <div className="pt-20" >
      <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-800"> Colors</h1>
      <p className="text-center text-lg md:text-xl pt-6 md:pt-10">View gallery of our products and make yourself satisfied with our creation.</p>
    </div>
    <div className="bg-yellow-100 h-[700px]">
      <Image className="justify-self-center w-[600px] pt-20"  src={skuter} alt="skuter"/>
    <Image className="justify-self-center w-[900px] pt-7"  src={colors} alt="colors"/>
    </div>
  </section>
     <section className="p-6 md:p-14 mt-20">
        <h2 className="text-2xl font-bold text-center mb-4">Complete Your Purchase</h2>
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row justify-between space-x-2">
            <div className="w-full md:w-1/2 ">
              <label className="block text-lg font-medium">Full Name</label>
              <input type="text" className="w-full p-2 mt-2 border border-gray-300 rounded-md" placeholder="First and Last Name" required />
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0">
              <label className="block text-lg font-medium">Email Address</label>
              <input type="email" className="w-full p-2 mt-2 border border-gray-300 rounded-md" placeholder="your.email@example.com" required />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-lg font-medium">Shipping Address</label>
            <textarea className="w-full p-2 mt-2 border border-gray-300 rounded-md" placeholder="Street, City, State, Zip Code" required></textarea>
          </div>

          <div className="mt-4">
            <label className="block text-lg font-medium">Credit Card Information</label>
            <div className="flex space-x-4">
              <input type="text" className="w-full p-2 mt-2 border border-gray-300 rounded-md" placeholder="Card Number" required />
              <input type="text" className="w-full p-2 mt-2 border border-gray-300 rounded-md" placeholder="MM/YY" required />
              <input type="text" className="w-full p-2 mt-2 border border-gray-300 rounded-md" placeholder="CVV" required />
            </div>
          </div>

          <div className="mt-6 text-center">
            <button type="submit" className="px-6 py-2 bg-yellow-500 text-white rounded-xl font-bold cursor-pointer">Order now</button>
          </div>
        </form>
      </section>
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Image className="ml-4" src={logo} alt="logo" width={50} height={40} />
            <h1 className="text-xl font-bold text-white"></h1>
          </div>
          <div className="text-center text-sm text-gray-400">
            <p>&copy; 2025 Your Brand. All Rights Reserved.</p>
            <p>
              <a href="/privacy-policy" className="hover:text-yellow-500">Privacy Policy</a> | 
              <a href="/terms-of-service" className="hover:text-yellow-500"> Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
