const form = document.querySelector('form')
const formBox = document.querySelector('.form-box')
const feedbackBox = document.querySelector('.feedback-box') 

const correctAnswers = ['1', '2', '1', '2']

const getFeedbackMessage = score =>({ 
  
    0: `${score}% de acerto, não foi desta vez. Mas não desista, tente de novo ;)`,
    25: `${score}% de acerto... que tal tentar de novo? =)`,
    50: `Você acertou ${score}%, muito bom! =)`,
    75: `Você acertou ${score}%, muito bom! =)`
  })[score] || `Uau, você acertou ${score}%. Parabéns! =D`
  
const changeFeedbackDisplay = () => {
  formBox.classList.toggle('hidden')
  feedbackBox.classList.toggle('hidden')
}

const showFeedback = score => {
  const feedbackMessage = feedbackBox.querySelector('.feedback-message')
  feedbackMessage.textContent = getFeedbackMessage(score)
  changeFeedbackDisplay() 
}

const handleQuizSubmit = event => {
  event.preventDefault()
  let score = 0
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value
  ]

  correctAnswers.forEach((correctAnswer, index) => { 
    if (correctAnswer === userAnswers[index]){
      score +=25
    }
  })
  
  showFeedback(score)
}

form.addEventListener('submit', handleQuizSubmit)

const backButton = document.querySelector('.back-button')
backButton.addEventListener('click', changeFeedbackDisplay)
 
