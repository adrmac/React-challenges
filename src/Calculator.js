import React from "react";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="calculator">
                <div class="formulaScreen"></div>
                <div class="outputScreen" id="display">0</div>
                <div>
                    <button class="jumbo" id="clear" value="AC" style="background: rgb(172, 57, 57);">AC</button>
                    <button id="divide" value="/" style="background: rgb(102, 102, 102);">/</button>
                    <button id="multiply" value="x" style="background: rgb(102, 102, 102);">x</button>
                    <button id="seven" value="7">7</button>
                    <button id="eight" value="8">8</button>
                    <button id="nine" value="9">9</button>
                    <button id="subtract" value="-" style="background: rgb(102, 102, 102);">-</button>
                    <button id="four" value="4">4</button>
                    <button id="five" value="5">5</button>
                    <button id="six" value="6">6</button>
                    <button id="add" value="+" style="background: rgb(102, 102, 102);">+</button>
                    <button id="one" value="1">1</button>
                    <button id="two" value="2">2</button>
                    <button id="three" value="3">3</button>
                    <button class="jumbo" id="zero" value="0">0</button>
                    <button id="decimal" value=".">.</button>
                    <button id="equals" value="=" style="background: rgb(0, 68, 102); position: absolute; height: 130px; bottom: 5px;">=</button>
                </div>
            </div>
        )
    }
}

export default Calculator;

