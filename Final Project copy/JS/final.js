$(document).ready(function(){

    var selected; //variable selected can be accessed by other functions
    var card = '<div class="card"></div>';
    
    $('.dropdown-toggle').click(function(){
        $(this).next(".dropdown-menu").toggle();
    });

    var checkInputs = function(){


    }

    // $('input.cardSelect').change(checkInputs);

    $('input.cardSelect').change(function(){

        // console.log('hey this works');
        selected = $(this).val();  //this = whatever one you click on .val
        console.log(selected); //set up a coniditional for 1 3 and 3

        $('div#cardStage').html('');

        if (selected == 1){
             $('div#cardStage').append(card);
            alert ("hey that is 1");

        }
        else if (selected == 3){
            $('div#cardStage').append(card);
            $('div#cardStage').append(card);
            $('div#cardStage').append(card);
            alert ('hey that is 3');

        }
        else if (selected == 5){
            $('div#cardStage').append(card);
            $('div#cardStage').append(card);
            $('div#cardStage').append(card);
            $('div#cardStage').append(card);
            $('div#cardStage').append(card);
             alert ('hey that is 5');

        }


    });


    // function randomImg1(){
    //     var myImages1 = new Array ();
    //     myImages1[1] = "images/random-image-1.png";
    //     myImages1[2] = "images/random-image-2.png";
    //     myImages1[3] = "images/random-image-3.png";
    //     myImages1[4] = "images/random-image-4.png";
    //     myImages1[5] = "images/random-image-5.png";
    //     myImages1[6] = "images/random-image-6.png";
    //     myImages1[7] = "images/random-image-7.png";
    //     myImages1[8] = "images/random-image-8.png";
    //     myImages1[9] = "images/random-image-9.png";
    //     myImages1[10] = "images/random-image-10.png";
    //     var rnd = Math.floor(Math.random() * myImages1.length);
    //     if(rnd == 0{
    //         rnd = 1;
    //     }
     
        
    // })

    //         if($ "input:checkbox:checked" ).val() == "1 Card"{

    //         };

    //         if($ "input:checkbox:checked" ).val() == "3 Cards"{

    //         };

    //         else if{
    //         if($ "input:checkbox:checked" ).val() == "5 Cards";
                
    //         };
    // }

});

