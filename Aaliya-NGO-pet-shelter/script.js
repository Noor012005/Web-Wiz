<script>
  // Dark Mode Toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  darkModeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark'); // Toggle dark mode on the root element
    const icon = darkModeToggle.querySelector('i');
    if (document.documentElement.classList.contains('dark')) {
      icon.classList.replace('fa-moon', 'fa-sun');
      darkModeToggle.querySelector('span').textContent = ' Light Mode'; // Update button text
    } else {
      icon.classList.replace('fa-sun', 'fa-moon');
      darkModeToggle.querySelector('span').textContent = ' Dark Mode'; // Update button text
    }
  });

  // Form Validation
  document.getElementById('adoptionForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const formStatus = document.getElementById('formStatus');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (name && email) {
      formStatus.textContent = `Thank you, ${name}! We'll contact you shortly.`;
      formStatus.style.color = "var(--secondary)"; // Use CSS variable for color
      e.target.reset(); // Reset the form
    } else {
      formStatus.textContent = "Please fill all required fields!";
      formStatus.style.color = "var(--accent)"; // Use CSS variable for color
    }
  });

  // Image Hover Effects
  document.querySelectorAll('.timeline-img img').forEach(img => {
    img.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.05)'; // Scale up on hover
      img.style.transition = 'transform 0.3s ease'; // Smooth transition
    });
    img.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)'; // Scale back to original size
    });
  });
</script>
