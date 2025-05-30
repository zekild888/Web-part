$(document).ready(function() {
    let label = $('#Label').val();
    let note = $('#note').val();
    $('#add').click(function() {
        $('.Notes').append(`
<h1>${label}</h1><br>
<p>${note}</p><br>
    

`);

    })});