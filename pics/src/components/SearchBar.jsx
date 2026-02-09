import {useState} from 'react';

const SearchBar = (props) => {
  //  onInputChange(event){
  //      console.log(event.target.value);
  //  }

  const [term, setTerm] = useState('');

  /*
  onFormSubmit(event){
      event.preventDefault();  //forhindre automatisk submit og refresh af siden
      //Bemærk brug af this her vil resultere i en fejl, da this ikke er bundet til nogen funktion/objekt
      //løsning enten benytte bind: this.onFormSubmit = this.onFormSubmit.bind(this) i en constructor
      //Anden løsning er at lave onFormSubmit om til en Arrow-function, der automatisk binder this til koden i funktionen  
    }
*/
    const onFormSubmit = (event) =>{
        event.preventDefault();
        //console.log(term);
        props.onSubmit(term);
    }


    return (
        <div className="ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
        {/* <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">  // alternativ hvis onFormSubmit ikke var en Arrow-function*/}
                <div className="field">
                    <label>Image Search</label>
                {/* <input type="text" onChange={this.onInputChange}/>  */}
                    <input 
                        type="text" 
                        value={term}
                        onChange={(e)=>setTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
        );
    
}

export default SearchBar;