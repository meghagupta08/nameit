import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';

const name = require('@rstacruz/startup-name-generator');
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            headerText: 'Name-it!',
            headerExpanded: true,
            suggestedNames: [],
        };
    }

    onSearchInputChange = (inputText) => {
        this.setState({
            headerExpanded: !inputText,
            suggestedNames:
                inputText !== '' && inputText.length > 0 ? name(inputText) : [],
        });
    };
    render() {
        return (
            <div>
                <Header
                    headTitle={this.state.headerText}
                    headerExpanded={this.state.headerExpanded}
                />
                <SearchBox handleInputChange={this.onSearchInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        );
    }
}

export default App;
