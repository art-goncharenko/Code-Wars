// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.
// Examples(Input1, Input2 --> Output):

const rps = (p1, p2) => {
    if (p1 === p2) {
        return "Draw!";
    } else if (
        (p1 === "Rock" && p2 === "Scissors") ||
        (p1 === "Scissors" && p2 === "Paper") ||
        (p1 === "Paper" && p2 === "Rock")
    ) {
        return "Player 1 wins!";
    } else {
        return "Player 2 wins!";
    }
};

console.log(rps("Paper", "Rock"))