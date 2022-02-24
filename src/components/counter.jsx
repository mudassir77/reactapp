import React from "react";
import { ReactDOM } from "react";


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


class Counter extends React.Component {

    handleIncrement = () => {
        // EVENT trigger 
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes
    }


    formatCount() {
        const { value } = this.props.counter;
        console.log("🚀 ~ file: counter.jsx ~ line 58 ~ Counter ~ formatCount ~ value", value)
        const x = <h4>"0"</h4>
        return value === 0 ? x : <h4>"{value}"</h4>;
    }

    render() {

        return (
            <div>

                <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondry btn-sm"
                    z
                >
                    Increment
                </button>
                <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>
                    delete
                </button>
                <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onSingleReset(this.props.counter.id)}>
                    Reset Counter
                </button>
            </div>
        );
    }

}

export default Counter;



