import React, { useState } from "react";
// import { BeakerIcon } from "@heroicons/react/24/solid";
import { mealData } from "../data/data";

function Meal() {
	const [foods, setFoods] = useState(mealData);

	const filterCategory = (category) => {
		setFoods(
			mealData.filter((meal) => {
				return meal.category === category;
			})
		);
	};

	return (
		<div className="max-w-[1520px] m-auto px-4 py-12">
			<h1 className="text-orange-500 font-bold text-2xl text-center py-2">Our Meal</h1>
			<div className="flex flex-col lg:flex-row justify-center">
				<div className="flex justify-center md:justify-center">
					<button
						onClick={() => setFoods(mealData)}
						className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700">
						All
					</button>
					<button
						onClick={() => filterCategory("Khachapuri")}
						className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700">
						Khachapuri
					</button>
					<button
						onClick={() => filterCategory("Hot")}
						className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700">
						Hot & Meat
					</button>
					<button
						onClick={() => filterCategory("Salad")}
						className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700">
						Veggies
					</button>
				</div>
			</div>
			<div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6">
				{foods.map((item) => (
					<div className="border-none hover:scale-105 duration-300">
						<img
							src={item.image}
							alt="img"
							className="w-full h-[250px] object-cover rounded-3xl"
						/>
						<div className="flex justify-between py-4 px2">
							<p className="text-black font-bold">{item.name}</p>
							<p className="bg-orange-700 h-12 w-18 text-white rounded-3xl -mt-10 px-4 py-2 italic font-semibold border-4">{item.price}</p>
						</div>
						<div className="pl-2 -mt-2 pb-8">
							<p className="rounded-3xl w-full h-10 px-4 bg-orange-500  flex items-center border-4 border-grey">
								<span className="pr-2 text-[#000000] font-bold">See More</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="w-6 h-6">
									<path
										fillRule="evenodd"
										d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
										clipRule="evenodd"
									/>
								</svg>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Meal;
