import React, { Component } from "react";
import  ReactDOM  from "react-dom";

class Counter extends Component {
    constructor(props) {
        super(props);
        console.log('constructor called')
        this.state = {
            view: false
        }
        this.countHandler = this.countHandler.bind(this)
    }

    countHandler() {
        ReactDOM.render(<React.StrictMode>
            <Counter num={this.props.num+1}/>
        </React.StrictMode>, document.getElementById("renderHere"))
         
    }
     /* mount methods */
     // @deprecated - 16.3, use componentDidMount or the constructor instead(API call); will stop working in react 17
     componentWillMount() {
        console.log('component will mount')
     }

     // static method - replacement of component willMount()
     static getDerivedStateFromProps(props, state) {
        // which receives the intial state and props in mount satge
        // receives new props and new state on each sub sequent update
        console.log('get derived state from props');
        console.log(`props =`, props)
        console.log(`state =`, state)
     }
     // called immediately after a component is mounted
     componentDidMount() {
        console.log('component did mount called')
     }

     /* update stage */
     shouldComponentUpdate(nP,nS) {
        console.log('should component update or not?')
        console.log('new Props =', nP)
        console.log('new Props =', nS)
        return true;
     }

    render() {
        console.log('component rendered ')
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-primary display-1">Counter = { this.props.num } </h1>
                </div>

                <div className="row">
                    <div className="col-md-12 text-center">
                        {
                            this.state.view ?
                         <h1 className="text-success">Welcome To LifeCycle</h1> :
                        <h1 className="text-secondary">Need More Counts</h1>
                        }
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <button onClick={() => this.countHandler()} className="btn btn-success">Add +1</button>
                    </div>
                </div>
            </div>
        )
    }

        componentDidUpdate(oP, oS) {
            console.log('component did update')
            console.log('old props =', oP)
            console.log('old state =', oS)
        }

        componentWillUnmount() {
            console.log('component successfully unmounted')
        }
    }

export default Counter