
const SearchBox = ({searchChange}) => {
    return (
        <div className="pa3">
            <input 
                className="pa2 ba b--green "
                type="search" 
                placeholder="搜尋表演者"
                onChange={searchChange}                
            />
        </div>
    )
}

export default SearchBox