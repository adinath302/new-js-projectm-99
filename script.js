function calculate() {
    const radius = parseFloat(document.getElementById('radius').value);
    const height = parseFloat(document.getElementById('height').value);
  
    if (isNaN(radius) || isNaN(height) || radius <= 0 || height <= 0) {
      document.getElementById('result').innerText = 'Please enter valid values for radius and height.';
      return;
    }
  
    const volume = Math.PI * Math.pow(radius, 2) * height;
    const surfaceArea = 2 * Math.PI * radius * (radius + height);
  
    document.getElementById('result').innerHTML = `
      <p>Volume of the cylinder: ${volume.toFixed(2)} cubic units</p>
      <p>Surface area of the cylinder: ${surfaceArea.toFixed(2)} square units</p>
    `;
  }
  
