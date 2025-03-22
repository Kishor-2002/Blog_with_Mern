import React from 'react' 

const Search = ({showSearch,setShowSearch}) =>{
    return (
        <div className="searchBar">
            <div className="container">
                <form action="/search" className="search__form" role="search" method="POST">
                    <input
                        type="search"
                        aria-label="Search"
                        id="searchInput"
                        name="searchTerm"
                        placeholder="Search the site..." /> 
                </form>
                <div id="searchClose">Close</div>
            </div>
        </div>
    )
}
export default Search;
