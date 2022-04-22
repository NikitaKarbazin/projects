const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleEvent(e) {
  // console.log(lastChecked);
  // console.log(e.shiftKey);
  // console.log(this.checked);

  let inBetween = false;

  if(e.shiftKey && this.checked){
    checkboxes.forEach(checkbox => {
      console.log(checkbox);

      if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween;
        console.log('------------');
      }

      if(inBetween){
        checkbox.checked = true;
      }
    })
  }
  lastChecked = this;
}

checkboxes.forEach(input => {
  input.addEventListener('click', handleEvent);
})