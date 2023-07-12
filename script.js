var women, input, men, children, basket, babies;

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}


women = ['shoes', 'handbag', 'dress', 'trousers', 'make-up'];
men = ['shoes', 'jacket', 'shirt', 'trousers', 'tie'];
children = ['toy', 'dress', 'shirt', 'hat', 'trousers'];
babies = ['toy', 'romper', 'shirt', 'hat', 'pyjamas'];
basket = [];


document.getElementById('women').addEventListener('click', (event) => {
  if (!!women.length) {
    let element_list_women = document.getElementById('list-women');
    while (!!women.length) {
      if(--window.LoopTrap <= 0) throw "Infinite loop.";
      let new_li = document.createElement('li');
      new_li.innerText = women.shift();

      element_list_women.appendChild(new_li);
    }
  }

});

document.getElementById('men').addEventListener('click', (event) => {
  if (!!men.length) {
    let element_list_men = document.getElementById('list-men');
    while (!!men.length) {
      if(--window.LoopTrap <= 0) throw "Infinite loop.";
      let new_li2 = document.createElement('li');
      new_li2.innerText = men.shift();

      element_list_men.appendChild(new_li2);
    }
  }

});

document.getElementById('children').addEventListener('click', (event) => {
  if (!!children.length) {
    let element_list_children = document.getElementById('list-children');
    while (!!children.length) {
      if(--window.LoopTrap <= 0) throw "Infinite loop.";
      let new_li3 = document.createElement('li');
      new_li3.innerText = children.shift();

      element_list_children.appendChild(new_li3);
    }
  }

});

document.getElementById('babies').addEventListener('click', (event) => {
  if (!!babies.length) {
    let element_list_babies = document.getElementById('list-babies');
    while (!!babies.length) {
      if(--window.LoopTrap <= 0) throw "Infinite loop.";
      let new_li4 = document.createElement('li');
      new_li4.innerText = babies.shift();

      element_list_babies.appendChild(new_li4);
    }
  }

});

document.getElementById('add').addEventListener('click', (event) => {
  input = document.getElementById('input').value;
  basket.push(input);
  let element_list_basket = document.getElementById('list-basket');
  let new_li5 = document.createElement('li');
  new_li5.innerText = input;
  let new_span = document.createElement('span');
  new_span.innerText = convertToNumber(document.getElementById('number').value);

  new_li5.appendChild(new_span);

  element_list_basket.appendChild(new_li5);

});

document.getElementById('button-comment').addEventListener('click', (event) => {
  let element_feedback = document.getElementById('feedback');
  element_feedback.innerText = document.getElementById('comment').value;
  let element_note = document.getElementById('note');
  element_note.innerText = 'Comment saved! Much appreciated 🙏';

});