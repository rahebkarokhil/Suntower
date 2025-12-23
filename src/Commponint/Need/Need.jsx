import React from 'react'
import { FaCheck } from 'react-icons/fa';

function Need() {
  return (
    <div>
      <div>
        <div className="   px-8 grid grid-cols-1 lg:grid-cols-2 justify-center  items-center gap-32 md:px-28 ">
          <div className=" flex flex-col gap-9">
            <div className="w-[400px] px-7 md:w-[600px] py-10  h-32 flex flex-col  md:pl-6 justify-center  hover:shadow-md duration-1000">
              <h1 className="text-lg font-bold">
                Why Choose Us for Your House Needs?
              </h1>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                nam reprehenderit inventore facere non totam, suscipit, eius
                omnis eveniet, mollitia unde
              </p>
            </div>
            <div className=" px-4 w-[400px] md:w-[600px] h-32 flex flex-col  md:pl-6 justify-center  shadow-md">
              <div className="flex items-center gap-2 ">
                <FaCheck className="px-2 py-2 bg-black text-white rounded-full text-3xl" />
                <h1 className="text-2xl font-bold">Comporteble Home Design</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                dicta, sed debitis corporis quo hic quos architecto labore
                minima aliquid
              </p>
            </div>

            <div className=" px-4 w-[400px] md:w-[600px] h-32 flex flex-col   md:pl-6 justify-center hover:shadow-md duration-1000 ">
              <div className="flex items-center gap-2 ">
                <FaCheck className="px-2 py-2 bg-black text-white rounded-full text-3xl" />
                <h1 className="text-2xl font-bold">Comporteble Home Design</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                dicta, sed debitis corporis quo hic quos architecto labore
                minima aliquid
              </p>
            </div>

            <div className="   px-4 w-[400px] md:w-[600px] h-32 flex flex-col   md:pl-6 justify-center hover:shadow-md duration-1000  ">
              <div className="flex items-center gap-2 ">
                <FaCheck className="px-2 py-2 bg-black text-white rounded-full text-3xl" />
                <h1 className="text-2xl font-bold">Comporteble Home Design</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                dicta, sed debitis corporis quo hic quos architecto labore
                minima aliquid
              </p>
            </div>
          </div>

          <div className="p ">
            <img
              className="w-[100%] h-[auto] rounded-lg"
              src="./public/about/habout sun.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex gap-5 justify-center mt-32 px-20" >
        <div className='w-[700px] h-[600px] overflow-hidden object-cover rounded-md'>
          <img
            className="w-[100%] h-auto"
            src="./public/about/houseWithAPool-BPZ8KaHT.jpg"
            alt= ""
          />
        </div>
        <div className="w-[500px]" >
          <h1 className='text-4xl w-[600px] py-9 font-semibold'>Let's Move to Your Dream Family Home</h1>
          <p className='text-slate-700 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis necessitatibus id error repellat, reprehenderit quia
            quae quas vitae quisquam
          </p>
          <button> Contact</button>

          <div className="flex gap-5  ">
            <img
              className="w-[200px] h-auto"
              src="./public/about/about.jpg"
              alt=""
            />
            <img
              className="w-[200px] h-auto"
              src="./public/about/home2-BTyQHItn.jpg"
              alt=""
            />
            <img
              className="w-[200px] h-auto"
              src="./public/about/home2-BTyQHItn.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Need
