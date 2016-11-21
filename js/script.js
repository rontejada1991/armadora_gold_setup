$(document).ready(function() {
    // gold piles to be distributed to the gold pile cells
    var goldpiles = [3, 4, 4, 5, 5, 6, 6, 7];
    
    // Sets up the 8 by 5 gameboard
    for(var i = 0; i < 5; i++) {
        $("#gameboard").append("<div id='row_" + i + "' class='row'></div>");
        for (var j = 0; j < 8; j++) {
            $("#row_" + i).append("<span id='cell_" + i + j + "' class='cell column'></span>");
        }
    }
    
    // Assigns a gold cell class to the following 8 predetermined cells    
    $("#cell_03, #cell_11, #cell_15, #cell_17, #cell_30, #cell_34, #cell_42, #cell_46")
        .addClass("gold_cell");

    // Assigns a normal cell class to all other cells that are not gold cells
    $("[id*='cell']").not(".gold_cell").addClass("normal_cell");

    // Toggles animation on the about message when button is clicked
    $('#about_button').click(function() {
        $('#about_message').transition('slide down');
    });

    // Toggles animation when closed out within the about message
    $('.message .close').click(function() {
        $(this).closest('.message').transition('slide down');
      });

    // Starts/Resets the board with newly set gold piles
    $("#reset_button").click(function() {
        newGame(goldpiles);
    });
});

function newGame(goldpiles) {
    // Shuffles the goldpiles
    var shuffledGoldpiles = shuffle(goldpiles);
    
    // Assigns a span with class gold value to each gold cell using the shuffled gold pile array
    $(".gold_cell").each(function(index, element) {
        $(this).html("<span class='gold_value ui huge header'>" + shuffledGoldpiles[index] + "</span>");
    });
    
    $(".gold_value").fadeIn("slow");
}

// Randomizes and returns a given array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    
    return array;
}