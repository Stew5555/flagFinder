function SearchBar({onSearch}) {
    return (
        <form className=" input-group-lg" role="search">
            <input 
                className="form-control m-4"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={e => onSearch(e.target.value)}
            />
        </form>
    )
}

export default SearchBar;