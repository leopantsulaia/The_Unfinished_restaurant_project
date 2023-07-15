import React from "react";

const Delivery = () => {
	return (
		<div className="w-full bg-white py-16 px-4">
			<h3 className="text-orange-500 font-bold text-2xl text-center">LP Delivery App</h3>
			<div className="w-[1200px] mx-auto grid md:grid-cols-2">
				<img
					src="https://www.blinkco.io/wp-content/uploads/2021/08/food-ordering-systems-for-restaurants.jpg"
					alt="LP delivery app"
					className="w-[550px] mx-auto my-4"
				/>
        <div className="flex flex-col justify-center">
          <p className="text-[#228a2b] font-bold">Get The LP Delivery App Now</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Soon in US & Canada</h1>
        <p className=" bg-orange-300">
        <span className="font-bold">FREE DELIVERY</span> in all EU countries, UK, Switzerland, Georgia, Armenia, Turkey, Azerbaijan
        </p>
        <button className="bg-black text-[#4edf00] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 p-3">Get Started</button>
        </div>
			</div>
		</div>
	);
};

export default Delivery;
