import Notiflix from 'notiflix';


const form = document.querySelector('.form')

form.addEventListener('submit', e => {
  e.preventDefault()

  let { delay, step, amount } = e.currentTarget

  delay = Number(delay.value)
  step = Number(step.value)
  amount = Number(amount.value)


  for (let i = 1; i <= amount; i += 1) {
   
    delay += step
    createPromise(i, delay).then(onSucsess).catch(onError)
  }

})

// =============================================
function onError({ position, delay }) {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
}

function onSucsess({ position, delay }) {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)

}
// ================================================
function createPromise(position, delay) {

  return new Promise((resolve, reject) => {

    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
    }, delay)
  })
}




