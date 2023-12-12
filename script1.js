let currentInput = '';

function handleButtonClick(event) {
  const buttonValue = event.target.innerText;

  if (buttonValue === '=') {
    try {
      const result = eval(currentInput);
      document.getElementById('display').value = result;
      currentInput = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
      currentInput = '';
    }
  } else if (buttonValue === 'C') {
    document.getElementById('display').value = '';
    currentInput = '';
  } else if (buttonValue === 'Undo') {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('display').value = currentInput;
  } else if (buttonValue === '%') {
    const percentage = eval(currentInput) / 100;
    document.getElementById('display').value = percentage;
    currentInput = percentage;
  } else {
    currentInput += buttonValue;
    document.getElementById('display').value = currentInput;
  }
}
