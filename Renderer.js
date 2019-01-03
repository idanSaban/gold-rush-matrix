class Renderer {
    constructor() { }
    renderBoard(data) {

        $('#game').empty()
        const source = $('#board-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({ data });
        $('#game').append(newHTML);
    }
    renderScores(data) {
        $("#score-a").empty()
        $("#score-a").append(data[0].coins)
        $("#score-b").empty()
        $("#score-b").append(data[1].coins)

    }

}
