import React, {Component} from 'react';
import styles from './app.module.css';
import Stripes from "./components/stripes/Stripes";
import Header from "./components/header/Header";
import InputSearch from "./components/inputSearch/InputSearch";
import ArticleList from "./components/articleList/ArticleList";

class App extends Component {
    state = {
        isClicked: true,
    };

    clickHandler = () => {
        const temp = this.state.isClicked;
        this.setState({isClicked: !temp})
    };

    countLines = () => {
        const width = window.innerWidth;
        switch (true) {
            case(width <= 768):
                return 3;
            case (width <= 1366):
                return 5;
            case (width <= 1600):
                return 6;
            default:
                return 8;

        }

    };

    render() {
        const articleList = this.state.isClicked && <ArticleList/>;
        return (
            <div className="App">
                <Stripes places="top-left" count={this.countLines()}/>
                <div className={`${styles.centerDiv}${this.state.isClicked ? ' ' + styles.search : ''}`}>
                    <Header isClicked={this.state.isClicked}/>
                    <InputSearch isClicked={this.state.isClicked} click={this.clickHandler}/>
                </div>
                {articleList}
                <Stripes places="bottom-right" count={this.countLines()}/>
            </div>
        );
    }
}

export default App;
