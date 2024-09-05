const offsetX = document.getElementById('offset-x');
const offsetY = document.getElementById('offset-y');
const blurRadius = document.getElementById('blur-radius');
const spreadRadius = document.getElementById('spread-radius');
const color = document.getElementById('color');
const borderRadiusInput = document.getElementById('border-radius'); 
const previewBox = document.getElementById('preview-box');
const cssCode = document.getElementById('css-code');
const copyBtn = document.getElementById('copy-btn');
const btnCopied = document.querySelector('button');

function updateShadow() {
    const offsetXValue = offsetX.value;
    const offsetYValue = offsetY.value;
    const blurRadiusValue = blurRadius.value;
    const spreadRadiusValue = spreadRadius.value;
    const colorValue = color.value;
    const borderRadiusValue = borderRadiusInput.value; 
  
    const boxShadow = `${offsetXValue}px ${offsetYValue}px ${blurRadiusValue}px ${spreadRadiusValue}px ${colorValue}`;
    previewBox.style.boxShadow = boxShadow;
    previewBox.style.borderRadius = `${borderRadiusValue}px`; 
    
    cssCode.value = `box-shadow: ${boxShadow};\nborder-radius: ${borderRadiusValue}px;`; 
}
offsetX.addEventListener('input', updateShadow);
offsetY.addEventListener('input', updateShadow);
blurRadius.addEventListener('input', updateShadow);
spreadRadius.addEventListener('input', updateShadow);
color.addEventListener('input', updateShadow);
borderRadiusInput.addEventListener('input', updateShadow);

// Add event listener to copy button
copyBtn.addEventListener('click', function() {
    // Copy the CSS code to clipboard
    navigator.clipboard.writeText(cssCode.value)
      .then(() => {
        // Show confirmation message
        
        btnCopied.textContent = 'Copied!'
        // Hide confirmation message after 2 seconds
        setTimeout(() => {
          btnCopied.textContent ='Copy'
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
});


updateShadow();

