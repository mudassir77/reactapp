import React from "react";
import { ReactDOM } from "react";


class Counter extends React.Component {
    componentWillUnmount() {
        console.log("component umnounted")
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes
    }
    formatCount() {
        const { value } = this.props.counter;
        const x = <h4>"0"</h4>
        return value === 0 ? x : <h4>"{value}"</h4>;
    }

    render() {
        const { counter, onDelete, onSingleReset, onIncrement, onDecrement } = this.props

        return (
            <div className="row">
                <div className="col-1">
                    <span className={this.getBadgeClasses()}> {this.formatCount()}</span>

                </div>
                <div className="col">
                    <button
                        style={{ backgroundColor: 'grey' }}
                        onClick={() => onIncrement(counter)}
                        className="btn btn-secondry btn-sm"

                    >
                        +
                    </button>
                    <button onClick={() => this.props.onDecrement(counter)}
                        className="btn btn-secondry btn-sm m-2"
                        style={{ backgroundColor: 'grey' }}
                        disabled={counter.value === 0 ? "disabled" : ""}>
                        -
                    </button>
                    <button className="btn btn-danger btn-sm m-2" onClick={() => onDelete(counter.id)}>
                        delete
                    </button>
                    <button className="btn btn-danger btn-sm m-2" onClick={() => onSingleReset(counter.id)}>
                        Reset Counter
                    </button>
                </div>



            </div>
        );
    }

}

export default Counter;

















// class Counter extends React.Component {
//     state = {
//         value: 0,
//         tags: ['tag1', 'tag2', 'tag3']

//     }
//     handleIncrement(){
//         console.log("increment click")
//     }
//     renderTags(){
//         if(this.state.tags.length === 0 )
//         return <p>There are no tags</p>
//         return   <ul>
//         { this.state.tags.map(tag => <li key = {tag}>{ tag }</li>)}
//     </ul>

//     }
//     render() {

//         return (<div>
//              {this.state.tags.length === 0 && " please put the new tag"}
//       {this.renderTags()}
//               </div>)
//     }


//     formatCount(){
//         const { value } = this.state;

//     }
// }

// export default  Counter; 
