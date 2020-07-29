$('#btn').on('click', function(){
    let input = $('#input').val();
    let score = $('#score').val();
    let removeBtn = $('<button type="submit">X</button>');    
    $('<div id="rated">').appendTo($('#movie')).append(`${input} ${score}`)    
    $('<button type="submit">X</button>').appendTo($('#movie'));
})

//! CA YOU HELP ME REVISE THIS CODE?
$('#movie').on('click',"button", function(){
    $('button').prev('div').remove();
    $('#movie button').remove();
})









