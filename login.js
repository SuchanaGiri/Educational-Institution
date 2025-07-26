let currentCaptcha = '';

function generateCaptcha() {
  const canvas = document.getElementById("captchaCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789abcdefghijklmnopqrstuvwxyz";
  currentCaptcha = '';
  for (let i = 0; i < 6; i++) {
    currentCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  // Draw CAPTCHA
  ctx.font = "30px Arial";
  ctx.fillStyle = "#000";
  ctx.setTransform(1, 0, 0.2, 1, 10, 10);
  ctx.fillText(currentCaptcha, 10, 30);

  // Draw line
  ctx.beginPath();
  ctx.moveTo(0, Math.random() * 50);
  ctx.lineTo(200, Math.random() * 50);
  ctx.stroke();
}

function validateCaptcha() {
  const input = document.getElementById("captchaInput").value;
  if (input.toUpperCase() !== currentCaptcha.toUpperCase()) {
    alert("Invalid CAPTCHA. Please try again.");
    generateCaptcha();
    return false;
  }
  alert("Login successful!");
  return true;
}

// Generate on load
window.onload = generateCaptcha;


//Gsap code

var tl= gsap.timeline()

tl.from(".container",{
    y:350,
    duration:1,
    delay:0.1
})
