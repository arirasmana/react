import React from 'react';

class SearchBar extends React.Component {
    state={ term: '' };

    Changebut = (event) => {
        this.setState({ term: event.target.value });
    }
    onFormSubmit=(event)=> {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
        console.log(this.state.term);
    } 

    render() {
        return (
              <div className="search-bar ui segment">
                <form
                    onSubmit={this.onFormSubmit}
                    className="ui form">
                    <div className="field">
                        <label>Ari custom video search test :</label>
                        <input type="text"
                            value={this.state.term}
                            onChange={this.Changebut}/>
                    </div>
                  </form>

              </div>
   
        );

    }

}

export default SearchBar;