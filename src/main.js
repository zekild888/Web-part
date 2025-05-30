$(document).ready(function () {

    $('#add').click(function () {
        let label = $('#Label').val();
        let note = $('#note').val();
        $('.Notes').append(`<h1>${label}</h1><br><p>${note}</p><br>`);
    })
});