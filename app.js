const form = document.querySelector('form')
const description = document.querySelector('.description-box')
const formBox = document.querySelector('.form-box')

const feedback = document.createElement('p')
feedback.classList.add('feedback')
const helpMessage = document.createElement('p')
helpMessage.classList.add('help-message')

const correctAnswers = ['1', '2', '1', '2']

const showFeedback = score =>{
  const feedbackMessages = {
    badScore: `${score}% de acerto, não foi desta vez. Mas não desista, tente de novo ;)`,
    weakScore: `${score}% de acerto... que tal tentar de novo? =)`,
    goodScore: `Você acertou ${score}%. Muito bom! =)`,
    excelentScore: `Uau, você acertou ${score}%. Parabéns! =D`
  }
  const {badScore, weakScore, goodScore, excelentScore} = feedbackMessages

  if(score === 0){
    feedback.textContent = badScore
  } else if(score === 25){
    feedback.textContent = weakScore
  } else if(score === 100){
    feedback.textContent = excelentScore
  } else {
    feedback.textContent = goodScore
  }

  formBox.remove()
  helpMessage.textContent = `Recarregue a página para tentar de novo`

  description.insertAdjacentElement('afterend', feedback)
  feedback.insertAdjacentElement('afterend', helpMessage)
}

const scoreProcessing = event => {
  event.preventDefault()
  let score = 0
  const userResponses = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value
  ]

  correctAnswers.forEach((correctAnswer, index) => {
    if (correctAnswer === userResponses[index]){
      score +=25
    }
  })
  
  showFeedback(score)
}

form.addEventListener('submit', scoreProcessing)

