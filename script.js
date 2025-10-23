'use strict';

const form = document.querySelector('#contactForm');
const successMsg = document.querySelector('#successMsg');

 document.querySelectorAll('.error').forEach(el => el.textContent = '')

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let valid = true;

  // console.log("Submitted");
  const name = form.name.value.toLowerCase();
  const email = form.email.value.toLowerCase();
  const subject = form.subject.value;
  const message = form.message.value;

  // console.log(form.name);

 
  

  if (name === '' && email === '' && subject === '' && message === '') {
    //   successMsg.hidden = false;
      alert( 'All the Input feilds Are Empty');
    valid = false;
  }

  if (valid && (!name || !email || !message)) {
    // console.log("An Input Feild is Empty");
    // successMsg.hidden = false;
    // successMsg.textContent = 'An Input Feild is Empty';
     alert( 'An Input feild is Empty')
    valid = false;
  }
  if (valid && !subject) {
    document.querySelector('#test-contact-error-subject').textContent =
      'The Subject Feild is Required';
    valid = false;
  }

  if (valid) {
    if (!name.includes(' ')) {
      document.querySelector('#test-contact-error-name').textContent =
        'Input your Fullname';
      valid = false;
    }
    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      document.querySelector('#test-contact-error-email').textContent =
        'Enter a Valid Email address';

      valid = false;
    }
    if (message.length < 10) {
      document.querySelector('#test-contact-error-message').textContent =
        "Message Character's must be greater than 10";
      valid = false;
    }
    
    
  }
 
//   valid = true

  if (valid) {
    successMsg.hidden = false;
    form.reset();
  } else {
    successMsg.hidden = true;
  }
});

const j = 'Emma';
j.toLowerCase;
