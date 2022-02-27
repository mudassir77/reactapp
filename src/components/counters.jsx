import React from "react";
import { ReactDOM } from "react";
import Counter from "./counter";
import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";




class Counters extends React.Component {

    render() {
        return (
            <div>
                <button className="btn btn-primary btn-sm m-2" onClick={this.props.overallReset}>
                    RESET
                </button>
                <button className="btn btn-primary btn-sm m-2" onClick={this.props.onAddNewObject}>
                    ADD
                </button>
                <button className="btn btn-danger btn-sm m-2" onClick={this.props.onLastDelete}>
                    DELETE LAST
                </button>
                {this.props.counters.map(counter => {
                    return (
                        <Counter key={counter.id} counter={counter} value={counter.value} onIncrement={this.props.onIncrement} onDelete={this.props.onDelete} selected={true} onSingleReset={this.props.onReset} />
                    )
                }
                )}
            </div>);
    }
}


export default Counters;