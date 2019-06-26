import GenerateTable from "./GenerateTable";
import React, {Component} from "react";
import nQueen from "./NQueenSolution"

class NQueens extends Component {
    constructor(props) {
        super(props);
        this.initialBoard = [[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];
    }

    placeQueen(board) {
        board.forEach((x, index) => {
            let position = x.indexOf(1)
            board[index][position] = "Q"
        })
        return board;
    }

    nQueen() {
        let initialBoard = this.initialBoard;
        nQueen(initialBoard, 0);  //manupulating inititalBoard need to refactor it
        return this.placeQueen(initialBoard)
    }

    render() {
        return (
            <div>
                <GenerateTable rawData={this.nQueen()}/>
            </div>
        )
    }
}

export default NQueens;