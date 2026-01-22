 let score = JSON.parse(localStorage.getItem('score')) || {
          wins : 0,
          loses : 0,
          tie  : 0
        }

     updateScore()

    function playgame(playersmove) {
      const computer=pickComputermove();
      
      let result='';

      if (playersmove === 'scissor') {
        if (computer === 'rock') {
          result='you win';
        } else if (computer === 'paper') {
          result ='tie';
        }else if (computer === 'scissor'){
          result ='you lose';
        }
      }

      else if (playersmove === 'paper') {
        if (computer === 'rock') {
          result='you win';
        } else if (computer === 'paper') {
          result ='tie';
        }else if (computer === 'scissor'){
          result ='you lose';
        }
      }

      else if (playersmove === 'rock') {
        if (computer === 'rock') {
          result='tie';
        } else if (computer === 'paper') {
          result ='you lose';
        }else if (computer === 'scissor'){
          result ='you win';
        }
      }
    
      if (result === 'you win') {
         score.wins += 1;
      } else if (result=== 'you lose') {
        score.loses +=1;
      } else if (result==='tie') {
        score.tie +=1;
      }

      updateScore()

      document.querySelector('.js-result')
        .innerHTML = result;

      document.querySelector('.js-moves')
        .innerHTML =`you picked
        <img src="Rock Paper Scissors_files/${playersmove}-emoji.png" class="move-icon">
        computer <img src="Rock Paper Scissors_files/${computer}-emoji.png" class="move-icon">`   
      }

 

    function pickComputermove() {


      const rNum = Math.random();

        let computer = '';
        
        if (rNum >=0 && rNum < 1/3) {
          computer='rock';
        } else if (rNum >= 1/3  && rNum < 2/3 ) {
          computer='paper';
        }
        else if (rNum >= 2/3  && rNum < 1) {
          computer ='scissor';

        }

        return computer;
 
     } 

    function updateScore(){
        
      document.querySelector('.js-score')
        .innerHTML = `wins : ${score.wins},loses : ${score.loses},tie :${score.tie}`
     
    }

     
