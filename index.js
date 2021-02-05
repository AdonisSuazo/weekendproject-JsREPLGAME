let  readlineSync  =  require('readline-sync');
console.log( "Welcome to JavaScript POPQUIZ" );
console.log( "Instructions : This is a multiple choice game,each question has a group of possible answers, from that group you have to choose the correct one" );
let option = readlineSync.question( "Do you want to play? Y/N : ");

switch(option) {
    case "Y":
        let score = 0;
    let questioncont= 0;
        const myQuestions = [
            {
            question: "Who invented JavaScript?",
            answers: {
                a: "Douglas Crockford",
                b: "Sheryl Sandberg",
                c: "Brendan Eich"
            },
            correctAnswer: "c"
            },
            {
            question: "Which one of these is a JavaScript package manager?",
            answers: {
                a: "Node.js",
                b: "TypeScript",
                c: "npm"
            },
            correctAnswer: "c"
            },
            {
                question: "Which tool can you use to ensure code quality?",
                answers: {
                a: "Angular",
                b: "jQuery",
                c: "RequireJS",
                d: "ESLint"
                },
                correctAnswer: "d"
            }
        ];
        function quizMcq(listOfAnswers,question,answer){
            console.log(myQuestions[questioncont].question);
            console.log(myQuestions[questioncont].answers);
            let userAnswer = readlineSync.question("Choose your Answer :");
            console.log('\n');
            if(userAnswer == myQuestions[questioncont].correctAnswer){
              console.log('You are Right.');
              score++;
              questioncont++;
            } else{
              console.log('You are Wrong.');
              console.log('The Correct Answer is: ',myQuestions[questioncont].correctAnswer);
              score--;
              questioncont++;
            }
          
            if(score < 0){
              score = 0;
            }
            console.log('Score is: ',score);
          }
          for(var i = 0;i < myQuestions.length; i++){
            console.log('\n');
            quizMcq(myQuestions[i].answers,myQuestions[i].question,myQuestions[i].answer);
            console.log('*******************************');
          }
          
        
          console.log('\n');
          console.log('Your Final Score is: ',score);                    
           break;
        
                default: 
                    console.log( "Thanks for check this game out,see you next time" );
                    console.log( );
          


}

