$(document).ready(function () {

    $('#add').click(function () {
        let label = $('#Label').val();
        let note = $('#note').val();
        if(label == ""){
            alert("bububu");
        }
        else {
            $('.Notes').append(`<div class="note"><h1 class="note_label">${label}</h1><br><p class="noted_text">${note}</p><br></div>`);
        }
    })
});