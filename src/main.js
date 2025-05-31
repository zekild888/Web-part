$(document).ready(function () {
    let num = 0;

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
            list.push(num);
            console.log(list);
            num++;
        }
        $("#remove").click(function (){
            $("#note_block").remove();
        });
    });

});