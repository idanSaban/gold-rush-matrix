class Renderer {
    constructor() { }
    renderBoard(data) {
        console.log("rendering")
        console.log(data)
        $('#container').empty()
        const source = $('#board-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({ data });
        $('#container').append(newHTML);
    }

}
