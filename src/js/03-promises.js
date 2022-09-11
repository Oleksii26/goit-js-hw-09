import Notiflix from 'notiflix';


const form = document.querySelector('.form')

form.addEventListener('submit', e => {
  e.preventDefault()

  let { delay, step, amount } = e.currentTarget

  delay = Number(delay.value)
  step = Number(step.value)
  amount = Number(amount.value)

  for (let i = 0; i < amount; i += 1) {
    createPromise(i, delay).then(({ position, delay }) => {
      setTimeout(() => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
      }, delay)
    }).catch(({ position, delay }) => {
      setTimeout(() => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      }, delay)
    })
    delay = delay + step
  }

})

function createPromise(position, delay) {

  return new Promise((resolve, reject) => {

    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})
      }
    }, delay)
  })
}




