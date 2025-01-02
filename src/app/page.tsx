import Link from "next/link"
export default function (){
  return(

    // this is NAVBAR
    <div className="bg-[#1D1E2C] min-h-screen flex flex-col items-center">
      <nav className="w-full py-6 flex justify-between items-center px-12">
<h1 className="text-white font-bold text-xl">BrandName</h1>
<div className="flex space-x-8 text-white ">
<Link href="/" className="hover:text-gray-400">Home</Link>
<Link href="/" className="hover:text-gray-400">product</Link>
<Link href="/" className="hover:text-gray-400">pricing</Link>
<Link href="/" className="hover:text-gray-400">contact</Link>
</div>
<div className="flex space-x-6">
<Link href="/" className="text-white py-2">login</Link>
<button className="bg-blue-500 text-white py-2 px-4 hover:bg-blue-600">JOIN US</button>
</div>
</nav>

{/* this is MAIN CONTENT */}

<div className="text-center mt-16">
<p className="text-blue-400 text-5m mb-4">welcome</p>
<h1 className="text-white text-5xl font-bold mb-6">selling on the <br/>internet like  a pro</h1>
<p className="text-gray-300 text text-lg mb-10">
we know how large objects will act, but things on a <br/>small scale just do not act that way.
</p>
<div className="flex justify-center space-x-4">
  <button className="bg-[#23A6f0] py-3 px-8 rounded-lg w-193">Get quote Now</button>
  <button className="border border-blue-500 text-blue-500 py-3 px-8 rounded-lg hover:bg-blue-600 hover:tex">Learn more</button>
</div>
</div>

{/*this is CARDS SECTION */}

{/* CARD 1 */}

<section className="flex flex-row justify-items-center gap-10 mt-20 mb-20">
<div className="bg-white  p-6 w-80">
  <div className="w-12 h-12 bg-red-200 mb-4 rounded"></div>
<h2 className="text-gray-800 font-bold text-xl mb-2">training courses</h2>
<div className="bg-[#E74040] w-14 h-1 rounded "></div>
<br/>
<p className="text-gray-600">The gradual accumulation of information about atomic and smal-scale behaviour...</p>
</div>

{/* CARD 2 */}

<div className="bg-white p-6 w-80">
  <div className="w-12 h-12 bg-green-200 mb-4 rounded"></div>
  <h2 className="text-gray-800 font-bold text-xl mb-2">2,769 online courses</h2>
<div className="bg-[#E74040] w-14 h-1 rounded"></div>
<br/>
  <p className="text-gray-600">The gradual accumulation of inforation about atomic and small-scale behaviour...</p>
</div>

{/* CARD 3 */}

<div className="bg-blue-500 p-6 rounded-lg shadow-lg w-80 text-white">
  <div className="w-12 h-12 bg-white rounded  mb-4"></div>
  <h2 className="font-bold text-xl mb-2">training courses</h2>
  <div className="bg-white w-14 h-1 rounded"></div>
  <p>The gradual accumulation of inforation about atomic and small-scale behavior...</p>
</div>
</section>
</div>
  );
}





  

