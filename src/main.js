$(document).ready(function () {
    let archive = false;

    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(note => addNoteToDOM(note.label, note.note));

    $('#add').click(function () {
        let label = $('#Label').val().trim();
        let note = $('#note').val().trim();

        if (label === "") {
            alert("Enter something in field");
        } else {
            notes.push({ label: label, note: note });
            localStorage.setItem('notes', JSON.stringify(notes));
            addNoteToDOM(label, note);
            $('#Label').val('');
            $('#note').val('');
        }
    });

    function addNoteToDOM(label, note) {
        $('.Notes').append(`<div class="note_block">
            <h1 class="note_label">${label}</h1>
            <p class="noted_text">${note}</p><br>
            <div class="buttons">
                <button class="archive">Archive</button>
                <button class="remove">Remove</button>
            </div>
        </div>`);
    }


    $('.Notes').on('click', '.remove', function () {
        if (archive == false){
            let block = $(this).closest('.note_block');
            let label = block.find('.note_label').text();
            let note = block.find('.noted_text').text();
            notes = notes.filter(n => !(n.label === label && n.note === note));
            localStorage.setItem('notes', JSON.stringify(notes));
            block.remove();
        }

    });

    $('.Notes').on('click', '.archive', function () {
        let block = $(this).closest('.note_block');
        archive = !archive;
        block.css('background-color', archive ? 'lightgray' : 'white');
        block.find('.note_label, .noted_text').css('text-decoration', archive ? 'line-through' : 'none');
    });
});
