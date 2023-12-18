function show(){
  const contactList = document.getElementById('contact-list')
  console.log(contactList);

  const listElements = document.getElementsByTagName('li')
  console.log(listElements);

  const contactInput = document.getElementsByClassName('contact-input')
  console.log(contactInput);

  const contacts = document.querySelectorAll('contact-list > li > label')
  console.log(contacts);

  const contactOne = document.getElementsByName('contact-one')
  console.log(contactOne);

  const first = document.querySelector('#contact-list > li > label')
  console.log(first);
}