const ratingPart = document.querySelector('#submit')
const completedPart = document.querySelector('#completed')
const submitBtn = document.querySelector('#btn')
const rating = document.querySelectorAll('#rating')
const voteResult = document.querySelector('#value')

submitBtn.addEventListener('click', () =>{
  ratingPart.classList.add('hidden');
  completedPart.classList.remove('hidden');
});

rating.forEach(function(rate){
  rate.addEventListener('click', () =>{
    rate.classList.add('active')
    voteResult.innerHTML = rate.innerHTML
  })
})
voteResult.innerHTML = `${ratingValue}`;

