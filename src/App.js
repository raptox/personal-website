import React, { Component } from 'react';
import './App.css';
import me from './me.jpg'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clickingTooFast: false,
            titleClickedTooFast: "Are you in a rush? (¬_¬)",
            titleIndex: 0,
            titleLastClicked: Date.now(),
            titleArray: ["Hi, my name is Alexander Tornoreanu!",
                        "Thanks for stopping by! \\ (•◡•) /",
                        "Bored?",
                        "Want to see something cool?",
                        "Are you sure?",
                        "Really?",
                        "Ok if that is what you want ...",
                        "🔥 BOOM 🔥"],

        }
    }

    onClickTitle() {
        let titleIndex = this.state.titleIndex
        let lastClicked = this.state.titleLastClicked
        let secondsPassed = Math.round((Date.now() - lastClicked) / 1000)

        if (secondsPassed < 0.5) {
            this.setState({clickingTooFast: true, titleLastClicked: Date.now(), titleIndex: -1})
            return
        } else {
            this.setState({clickingTooFast: false})
        }

        if (titleIndex === this.state.titleArray.length-1) {
            this.setState({titleIndex: 0})
        } else {
            this.setState({titleIndex: titleIndex+1})
        }
        this.setState({titleLastClicked: Date.now()})
    }

    render() {
        let {state} = this
        return (
            <div className="App">
                <section className="topbar">
                    <div className="title noselect" onClick={() => this.onClickTitle()}>
                        {state.clickingTooFast ? state.titleClickedTooFast : state.titleArray[state.titleIndex]}
                    </div>
                </section>
                <section className="middle">
                    <div className="picture">
                        <img src={me} alt="me" />
                    </div>
                    <div className="buttons">
                        <button onClick={() => window.open('https://www.instagram.com/raptox/')}>Instagram</button>
                        <button onClick={() => window.open('https://www.linkedin.com/in/alexander-tornoreanu/')}>LinkedIn</button>
                        <button onClick={() => window.open('https://github.com/raptox')}>Code</button>
                        <button onClick={() => window.open('https://stackoverflow.com/users/5280107/raptox', '_blank')}>SO</button>
                    </div>
                </section>
                <section className="bottombar">
                    <div className="copyright">
                        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                            Made with Love in React
                        </a>️
                    </div>
                </section>
            </div>
        );
    }
}

export default App;
