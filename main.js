const renderer = new Renderer()
const game = new GoldRush()
game.load()
renderer.renderBoard(game.matrix)
renderer.renderScores(game.players)

$(document).on("keydown", function (e) {
    // p1
    if (e.which == 87)
    {
        game.move("p1", "up")
    }

    if (e.which == 83)
    {
        game.move("p1", "down")
    }

    if (e.which == 68)
    {
        game.move("p1", "right")
    }

    if (e.which == 65)
    {
        game.move("p1", "left")
    }

    // p2
    if (e.which == 38)
    {
        game.move("p2", "up")
    }
    if (e.which == 40)
    {
        game.move("p2", "down")
    }
    if (e.which == 39)
    {
        game.move("p2", "right")
    }
    if (e.which == 37)
    {
        game.move("p2", "left")
    }
    renderer.renderBoard(game.matrix)
    renderer.renderScores(game.players)

    setTimeout(() => {

        if (!game.isGameOver())
        {
            return
        }
        const winner = game.getWinner()
        if (winner === `e`)
        {
            alert("even score - no winner this time")
        }
        else if (winner === 1)
        {
            alert("RED ARE THE WINNERS")
        }
        else if (winner === 2)
        {
            alert("BLUE ARE THE WINNERS")
        }
        alert("get ready for another game!")
        game.load()
        renderer.renderBoard(game.matrix)
        renderer.renderScores(game.players)
    }, 1000)

})