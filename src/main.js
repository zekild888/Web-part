$(document).ready(function () {
    let list = [];

    $('#add').click(function () {
        let label = $('#Label').val();
        let note = $('#note').val();
        if(label == ""){
            alert("Enter something in field");
        }
        else {
            $('.Notes').append(`<div class="note"><h1 class="note_label">${label}</h1><br><p class="noted_text">${note}</p><br></div>`);
            list.push(0);
        }
    })
});