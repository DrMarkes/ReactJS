function* generateQuestionnaire() {
  const questions = {
  	age: {
      question: 'Возраст ?',
    },
    sex: {
      question: 'Пол ?',
    },
    profession: {
  	  question: 'Профессия ?',
    }
  };
  
  for (let name of Object.keys(questions)) {
  	questions[name].answer = yield questions[name].question;
  } 
  
  return questions;
}

let generator = generateQuestionnaire();

console.log(generator.next().value);
console.log(generator.next('29 лет').value);
console.log(generator.next('мужской').value);
console.log(generator.next('программист').value);
