$(document).ready(function () {

    $('#add').click(function () {
        let label = $('#Label').val();
        let note = $('#note').val();
        $('.Notes').append(`<h1 class="note_label">${label}</h1><br><p class="noted_text">${note}</p><br>`);
    })
});