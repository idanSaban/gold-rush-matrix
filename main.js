const r = new Renderer()
const board = new GoldRush()
board.load()
r.renderBoard(board.matrix)


$(document).on("keydown", function (e) {
    console.log(e.which)
    // p1
    if (e.which == 87)
    {
        board.up("p1")
    }

    if (e.which == 83)
    {
        board.down("p1")
    }

    if (e.which == 68)
    {
        board.right("p1")
    }

    if (e.which == 65)
    {
        board.left("p1")
    }

    // p2
    if (e.which == 38)
    {
        console.log(38)
        board.up("p2")
    }

    if (e.which == 40)
    {
        board.down("p2")
    }
    if (e.which == 39)
    {
        board.right("p2")
    }
    if (e.which == 37)
    {
        board.left("p2")
    }
    r.renderBoard(board.matrix)
    setTimeout(() => {
        if (board.isGameOver())
        {
            r.renderBoard(board.matrix)
        }
    }, 1000)

})


