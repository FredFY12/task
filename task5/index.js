import './index.css';
import moment from 'moment';

class Donate {
  #inputHtml
  #donateForm
  #donatesContainer
  #totalAmount

  constructor(){
    this.#inputHtml = document.querySelector('.donate-form__donate-input');
    this.#donateForm = document.querySelector('.donate-form');
    this.#donatesContainer = document.querySelector('.donates-container__donates');
    this.#totalAmount = document.querySelector('#total-amount')
  }

  run(){
    this.#donateForm.addEventListener('submit',event => {
      event.preventDefault();
      const { target } = event;
      const amountInput = target.amount;
      const amountValue =  amountInput.value
      const donate = new Donate();
      donate.render(amountValue);
      this.#inputHtml.value = ""
    })
  }

  render(value){
    const date = moment().format('MMMM Do YYYY, h:mm:ss a');
    this.#donatesContainer.insertAdjacentHTML('beforeend',`<div class="donate-item"> ${date} - <b>${value} $</b></div>`)
    
    let totalAmount = Number(this.#totalAmount.textContent.replace('$',''))
    totalAmount +=Number(value);
    this.#totalAmount.textContent = `${totalAmount}$`
  }
}

const donate = new Donate();
donate.run();

