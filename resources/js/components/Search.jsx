import React from "react";
import { createRoot } from "react-dom/client";

export default function Search() {
    return (
        <>
            <header className="max-w-lg mx-auto">
                <h1 className="star-wars-title font-bold text-center">
                    SWStarter
                </h1>
            </header>

            <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <section>
                    <form className="flex flex-col" method="POST" action="search">
                        <p className="text-gray-600 pt-2">
                            What are you searching for?
                        </p>
                        <div className="search-type-wrapper">
                            <input type="radio" id="people" name="people" value="people" />
                            <label
                                className=""
                                htmlFor="people"
                            >
                            <b>People</b>
                            </label>
                            <input type="radio" id="movies" name="people" value="movies" />
                            <label
                                className=""
                                htmlFor="movies"
                            >
                            <b>Movies</b>
                            </label>              
                        </div>
                        <input
                            type="text"
                            id="search"
                            className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3"
                        />   
                        <button
                            className="bg-gray-200"
                            type="submit"
                        >
                            SEARCH
                        </button>
                    </form>                                   
                </section>
            </main>
        </>
    );
}

if (document.getElementById("root")) {
    const root = createRoot(document.getElementById("root"));
    root.render(<Search />);
}