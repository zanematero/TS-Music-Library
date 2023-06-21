import { useState } from 'react'

interface SearchBarProps {
    handleSearch: any;
}
// return here
function SearchBar(props: SearchBarProps){
    let [searchTerm, setSearchTerm] = useState('')

    return (
            <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
                <input type="text" placeholder="Search Here" onChange={(e) => setSearchTerm(e.target.value)} />
                <input type="submit" />
            </form>
    )
}

export default SearchBar
