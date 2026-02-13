import {useState} from 'react';

function SearchBar({onSearchMovie}) {
    const [term, setTerm] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state.term);

        onSearchMovie(term);
    }

    return (
            <form onSubmit={onFormSubmit} role="search">   
                <label >Search </label>
                <input className="m-2" type="text" value={term} onChange={ (e) => setTerm(e.target.value)}/>       
            </form>
        )
    
}

export default SearchBar;