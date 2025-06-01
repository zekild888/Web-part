$(document).ready(function () {
    let archive = false;
    $('#add').click(function () {
        let label = $('#Label').val();
        let note = $('#note').val();
        if(label == ""){
            alert("Enter something in field");
        }
        else {
            $('.Notes').append(`<div id="note_block">
            <h1 class="note_label">${label}</h1>
            <p class="noted_text">${note}</p><br>
            <div class="buttons">
            <button id="archive">Archive</button>
            <button id="remove">Remove</button>
            </div>
            </div>`);

        }

        $('.Notes').on('click', '#remove', function () {
            if(archive == false) {
                $(this).closest('#note_block').remove();
            }
        });
        $('.Notes').on('click', '#archive', function () {
            if(archive == false) {
                archive = true;
                $(this).closest('#note_block').css('background-color', 'lightgray');
                $(this).closest('#note_block').find('.note_label').css('text-decoration', 'line-through');
                $(this).closest('#note_block').find('.noted_text').css('text-decoration', 'line-through');
            }
            else {
                archive = false;
                $(this).closest('#note_block').css('background-color', 'white');
                $(this).closest('#note_block').find('.note_label').css('text-decoration', 'none');
                $(this).closest('#note_block').find('.noted_text').css('text-decoration', 'none');
            }})
    });

});


