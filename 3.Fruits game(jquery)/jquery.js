var playing = false;
var score;
var trialsleft;
var step;
var action;
var fruits = ['apple','watermelon','pineapple']
$(function(){
    
    //click on start reset button

$("#startreset").click(function(){
    
//    we are playing
    if(playing==true){
        
//        reload page
        location.reload();
        
    } else{
//        we are not playing
        playing = true;
//        set score to zero
        score = 0;
        $("#scorevalue").html(score);
        
//        show trails left
        $("#trialsleft").show();
        trialsleft = 3;
        addhearts();
        
//        hide gameover box
        $("#gameover").hide();
        
        
//        change button text to reset game
        $("#startreset").html("Reset game");
        
        //    start sending fruits
    startAction();
        
    }  
    
    

});  
    
    
});


//click on start reset button
//are we playing
//yes
//reload page
//no
//show trails left
//change button text to reset game
//create a random fruit
//define a random step
//move fruits down to every 30 sec
//is fruit is too low
//no-->repeat nb2
//yes-->any trail?
//yes:repeat nb1
//no:show game over,button text:start game

//slice a fruit
//play sound
//explode fruit

function addhearts(){
    $("#trailsleft").empty();
    for(i=0;  i< trialsleft;i++){
            $("#trialsleft").append('<img src="images/heart.png" class="life">');
        }
}

//start sending fruits

function startAction(){
   //generate a fruit
    $("#fruit1").show();
    chooseFruit(); //choose a random fruit
    $("#fruit1").css({'left' : Math.round(550*Math.random()), 'top' : -50}); //random position
    
    //generate a random step
    step = 1+ Math.round(5*Math.random()); // change step
    
    // Move fruit down by one step every 10ms
    action = setInterval(function(){
        
        //move fruit by one step
        $("#fruit1").css('top', $("#fruit1").position().top + step);                              
    
        //check if the fruit is too low
        if($("#fruit1").position().top > $("#fruitsContainer").height()){
            //check if we have trials left
            if(trialsLeft > 1 ){
                //generate a fruit
                $("#fruit1").show();
                chooseFruit(); //choose a random fruit
                $("#fruit1").css({'left' : Math.round(550*Math.random()), 'top' : -50}); //random position

                //generate a random step
                step = 1+ Math.round(5*Math.random()); // change step
                
                //reduce trials by one
                trialsLeft --;
                
                //populate trialsLeft box
                addHearts();
                
            }else{ // game over
                playing = false; //we are not playing anymore
                $("#startreset").html("Start Game"); // change button to Start Game
                $("#gameOver").show();
                $("#gameOver").html('<p>Game Over!</p><p>Your score is '+ score +'</p>');
                $("#trialsLeft").hide();
                stopAction();
            }
        }
    }, 10);
}



//generate a random fruit

function choseFruits(){
   $("#fruits1").attr('src' ,'images/' + fruits[Math.round(2*Math.random())] + '.png');
}

//stop droping fruits

function stopAction({
    clearIntervel(action);
    $("#fruits1").hide();
})