// const Matrix = require("./Matrix")

class GoldRush extends Matrix {
    constructor(rows = 10, cols = 10) {
        super(rows, cols)
        this.players = []
        this.rows = rows
        this.cols = cols
        this.coins

    }
    load() {
        console.log("loading")
        this.players = [
            { row: 0, col: 0, coins: 0 },
            { row: this.rows - 1, col: this.cols - 1, coins: 0 }
        ]
        this.clear()
        console.log(this.players)
        this.alter(this.players[0].row, this.players[0].col, "p1")
        this.alter(this.players[1].row, this.players[1].col, "p2")
        this.generateCoins()
        this.generateBlocks()

    }

    clear() {
        const m = []
        for (let i = 0; i < this.matrix.length; i++)
        {
            m.push([])
            for (let j = 0; j < this.matrix[0].length; j++)
            {
                m[i].push("e")
            }
        }
        this.matrix = m

    }

    generateBlocks(num = 10) {
        let count = 0
        while (0 < num)
        {
            let x = Math.floor(Math.random() * this.matrix.length)
            let y = Math.floor(Math.random() * this.matrix[0].length)
            if (this.isValidPosition(x, y) && !this.isCoin(x, y))
            {
                this.alter(x, y, "b")
                num--
            }
        }

    }

    generateCoins(num = 10) {
        this.coins = num
        while (0 < num)
        {
            let x = Math.floor(Math.random() * this.matrix.length)
            let y = Math.floor(Math.random() * this.matrix[0].length)
            if (this.isValidPosition(x, y) && !this.isCoin(x, y))
            {
                this.alter(x, y, "c")
                num--
            }
        }
    }
    isCoin(row, col) {
        return this.get(row, col) === "c" ? true : false
    }
    isValidPosition(row, col) {
        if (row >= this.matrix.length || col >= this.matrix[0].length)
        {
            return false
        }
        if (row < 0 || col < 0)
        {
            return false
        }
        if (this.get(row, col) === "e" || this.get(row, col) === "c")
        {
            return true
        }
        return false
    }
    move(player, direction) {

        const p = player === "p1" ? this.players[0] : this.players[1]
        const nextPoint = { row: p.row, col: p.col }
        if (direction === "up")
        {
            nextPoint.row--
        }
        else if (direction === "down")
        {
            nextPoint.row++
        }
        else if (direction === "left")
        {
            nextPoint.col--
        }
        else if (direction === "right")
        {
            nextPoint.col++
        }
        if (this.isValidPosition(nextPoint.row, nextPoint.col))
        {
            this.alter(p.row, p.col, "e")
            p.row = nextPoint.row
            p.col = nextPoint.col
            if (this.isCoin(p.row, p.col))
            {
                p.coins++
                this.coins--
                console.log(`${player} coins: ${p.coins}`)
            }
            this.alter(nextPoint.row, nextPoint.col, player)
        } else
        {
            console.log("thats outside of the game board")
        }
    }

    isGameOver() {
        if (this.coins === 0)
        {
            if (this.players[0].coins === this.players[1].coins)
            {
                alert("even score - no winner this time")
            }
            else
            {
                let winner = this.players[0].coins > this.players[1].coins ? "Player 1" : "Player 2"
                alert(`the winner is ${winner}`)

            }
            alert("get ready for another game!")
            this.load()
            return true
        }
        return false
    }
}

// console.log(g)
// const g = new GoldRush()
// g.load()
// g.print()
// g.down("p1")
// g.down("p1")
// g.down("p1")
// g.down("p1")
// g.print()
// g.down("p1")
// g.down("p1")
// g.down("p1")
// g.down("p1")
// g.down("p1")
// g.down("p1")
// g.print()

// g.print()