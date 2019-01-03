const r = new Renderer()
const board = new GoldRush()
board.load()
r.renderBoard(board.matrix)
r.renderScores(board.players)

$(document).on("keydown", function (e) {
    // p1
    if (e.which == 87)
    {
        board.move("p1", "up")
    }

    if (e.which == 83)
    {
        board.move("p1", "down")
    }

    if (e.which == 68)
    {
        board.move("p1", "right")
    }

    if (e.which == 65)
    {
        board.move("p1", "left")
    }

    // p2
    if (e.which == 38)
    {
        board.move("p2", "up")
    }

    if (e.which == 40)
    {
        board.move("p2", "down")
    }
    if (e.which == 39)
    {
        board.move("p2", "right")
    }
    if (e.which == 37)
    {
        board.move("p2", "left")
    }
    r.renderBoard(board.matrix)
    r.renderScores(board.players)

    setTimeout(() => {
        if (board.isGameOver())
        {
            r.renderBoard(board.matrix)
            r.renderScores(board.players)
        }
    }, 1000)

})

