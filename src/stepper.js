let currentStep = 1; // Track the current step
const formData = {}; // Store selections here

function showStep(step) {
  const steps = document.querySelectorAll('.step');
  steps.forEach((stepElement, index) => {
    stepElement.classList.remove('active'); // Hide all steps
    if (index + 1 === step) {
      stepElement.classList.add('active'); // Show the current step
    }
  });
}

function nextStep() {
  if (currentStep < 4) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    showStep(currentStep);
  }
}

function selectOption(field, value) {
  formData[field] = value; // Store the selected option
  console.log(`Selected ${field}: ${value}`); // Display the choice in the console
}



function selectSquare(selectedElement) {
    // Remove 'selected' class from all squares
    const squares = document.querySelectorAll('.color-option');
    squares.forEach(square => square.classList.remove('selected'));

    // Add 'selected' class to the clicked square
    selectedElement.classList.add('selected');
}
