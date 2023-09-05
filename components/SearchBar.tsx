"use client";
import React, { useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";
const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
	return (
		<button className={`-ml-3 z-10 ${otherClasses}`} type="submit">
			<Image
				src="/magnifying-glass.svg"
				alt="maginifying glass"
				width={40}
				height={40}
				className="object-contain"
			/>
		</button>
	);
};

const SearchBar = ({
	setManufacturer,
	setModel,
}: {
	setManufacturer: any;
	setModel: any;
}) => {
	const [searchManufacturer, setSearchManufacturer] = useState("");
	const [searchModel, setSearchModel] = useState("");
	const router = useRouter();
	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (searchManufacturer === "" && searchModel === "") {
			return alert("Please fill in the search bar");
		}
		setModel(searchModel);
		setManufacturer(searchManufacturer);
	};
	return (
		<form className="searchbar" onSubmit={handleSearch}>
			<div className="searchbar__item">
				<SearchManufacturer
					selected={searchManufacturer}
					setSelected={setSearchManufacturer}
				/>
				<SearchButton otherClasses="sm:hidden" />
			</div>
			<div className="searchbar__item">
				<Image
					src="/model-icon.png"
					width={25}
					height={25}
					className="absolute w-[20px] h-[20px] ml-4"
					alt="car searchModel"
				/>
				<input
					type="text"
					onChange={(e) => setSearchModel(e.target.value)}
					placeholder="Tiguan"
					className="searchbar__input"
					name="searchModel"
					value={searchModel}
				/>
				<SearchButton otherClasses="sm:hidden" />
			</div>
			<SearchButton otherClasses="max-sm:hidden" />
		</form>
	);
};

export default SearchBar;
