function SearchTodo({handleSearchTodo}){
    return(
        <div className="search">
            <input
                type="text"
                placeholder="Search the title..."
                className="input-search"
                onChange={(event)=>{
                    handleSearchTodo(event.target.value)
                }}
            />
        </div>
    )
}
export default SearchTodo