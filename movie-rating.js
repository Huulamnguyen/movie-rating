$('#btn').on('click', function(){
    let input = $('#input').val();
    let score = $('#score').val();
    let removeBtn = $('<button type="submit">X</button>');    
    $('<div id="rated">').appendTo($('#movie')).append(`${input} `).append(`<span class=" badge badge-warning"> ${score}</span>`).attr('class','btn btn-primary btn-lg')    
    $('<button class="btn btn-danger" type="submit">X</button>').appendTo($('#movie'));
    $('#input').val('');
    $('#score').val('');
})

//! CA YOU HELP ME REVISE THIS CODE?
$('#movie').on('click',"button", function(e){
    $(e.target).prev('div').remove();
    $(e.target).remove();
})









