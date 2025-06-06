$(document).ready(function () {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(note => addNoteToDOM(note.label, note.note, note.archived));

    $('#add').click(function () {
        let label = $('#Label').val();
        let note = $('#note').val();

        if (label === "") {
            alert("Введите что-нибудь в поле");
        } else {
            let newNote = { label: label, note: note, archived: false };
            notes.push(newNote);
            localStorage.setItem('notes', JSON.stringify(notes));
            addNoteToDOM(label, note, false);
            $('#Label').val('');
            $('#note').val('');
        }
    });

    function addNoteToDOM(label, note, archived) {
        let block = $(`<div class="note_block">
            <h1 class="note_label">${label}</h1>
            <p class="noted_text">${note}</p><br>
            <div class="buttons">
                <button class="archive">Архивировать</button>
                <button class="remove">Удалить</button>
            </div>
        </div>`);
        if (archived) {
            block.css('background-color', 'lightgray');
            block.find('.note_label, .noted_text').css('text-decoration', 'line-through');
            block.addClass('archived');
        }
        $('.Notes').append(block);
    }

    $('.Notes').on('click', '.remove', function () {
        let block = $(this).closest('.note_block');
        if (block.hasClass('archived')) {
            alert('Нельзя удалить заархивированную заметку!');
            return;
        }
        let label = block.find('.note_label').text();
        let note = block.find('.noted_text').text();
        notes = notes.filter(n => !(n.label === label && n.note === note));
        localStorage.setItem('notes', JSON.stringify(notes));
        block.remove();
    });

    $('.Notes').on('click', '.archive', function () {
        let block = $(this).closest('.note_block');
        let label = block.find('.note_label').text();
        let note = block.find('.noted_text').text();
        let noteObj = notes.find(n => n.label === label && n.note === note);
        if (noteObj) {
            noteObj.archived = !noteObj.archived;
            localStorage.setItem('notes', JSON.stringify(notes));
            if (noteObj.archived) {
                block.css('background-color', 'lightgray');
                block.find('.note_label, .noted_text').css('text-decoration', 'line-through');
                block.addClass('archived');
            } else {
                block.css('background-color', 'white');
                block.find('.note_label, .noted_text').css('text-decoration', 'none');
                block.removeClass('archived');
            }
        }
    });
});