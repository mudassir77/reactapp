import React from "react";
import { ReactDOM } from "react";
import Counter from "./counter";
import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";




class Counters extends React.Component {

    render() {
        const { overallReset, onAddNewObject, onLastDelete, onDecrement, onReset, onIncrement, onDelete } = this.props
        return (
            <div>
                <button className="btn btn-primary btn-sm m-2" onClick={overallReset}>
                    RESET
                </button>
                <button className="btn btn-primary btn-sm m-2" onClick={onAddNewObject}>
                    ADD
                </button>
                <button className="btn btn-danger btn-sm m-2" onClick={onLastDelete}>
                    DELETE LAST
                </button>
                {this.props.counters.map(counter => {
                    return (
                        <Counter key={counter.id} counter={counter} onDecrement={onDecrement} value={counter.value} onIncrement={onIncrement} onDelete={onDelete} selected={true} onSingleReset={onReset} />
                    )
                }
                )}
            </div>);
    }
}


export default Counters;