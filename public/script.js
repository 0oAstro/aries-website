// Fade-in animation on scroll

function handleScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Newsletter subscription handler
function handleNewsletterSubscription() {
    const emailInput = document.getElementById('emailInput');
    const newsletterOptin = document.getElementById('newsletterOptin');
    const subscribeBtn = document.getElementById('subscribeBtn');
    
    function toggleSubscribeButton() {
        if (emailInput.value && newsletterOptin.checked) {
            subscribeBtn.style.display = 'block';
        } else {
            subscribeBtn.style.display = 'none';
        }
    }
    
    emailInput.addEventListener('input', toggleSubscribeButton);
    newsletterOptin.addEventListener('change', toggleSubscribeButton);
    
    subscribeBtn.addEventListener('click', function() {
        if (emailInput.value && newsletterOptin.checked) {
            alert('Thank you for subscribing to ARIES updates!');
            emailInput.value = '';
            newsletterOptin.checked = false;
            subscribeBtn.style.display = 'none';
        }
    });
}

// Smooth scroll for navigation links
function addSmoothScroll() {
    const navLinks = document.querySelectorAll('header nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Add loading animation for member cards
function addMemberCardAnimation() {
    const memberCards = document.querySelectorAll('.member-card');
    
    memberCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// Add interactivity to department columns
function addDepartmentInteractivity() {
    const departmentColumns = document.querySelectorAll('.department-column');
    
    departmentColumns.forEach(column => {
        column.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            console.log(`Clicked on ${title} department`);
            // You can add more functionality here like showing more details
            
            // Add a subtle feedback animation
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

// Add hover effect to member cards for better interaction
function addMemberCardHoverEffects() {
    const memberCards = document.querySelectorAll('.member-card');
    
    memberCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add a subtle rotation effect
            this.style.transform = 'translateY(-5px) rotate(1deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll animations
    handleScrollAnimation();
    
    // Initialize newsletter functionality
    handleNewsletterSubscription();
    
    // Initialize smooth scrolling
    addSmoothScroll();
    
    // Initialize member card animations
    addMemberCardAnimation();
    
    // Initialize department interactivity
    addDepartmentInteractivity();
    
    // Initialize member card hover effects
    addMemberCardHoverEffects();
    
    console.log('ARIES Team page loaded successfully!');
});

// Handle scroll events for fade-in animations
window.addEventListener('scroll', handleScrollAnimation);

// Add a simple loader effect (optional)
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    console.log('All resources loaded!');
});
function sendEmail() {
  const emailInput = document.getElementById('emailInput');
  const message = emailInput.value.trim();
  
  if (message === '') {
    alert('Please enter your message before sending!');
    return;
  }
  
  // Replace with your actual email address
  const recipientEmail = 'contact@ariesiitd.com';
  const subject = 'Message from Website Visitor';
  const body = encodeURIComponent(message);
  
  // Create mailto link
  const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;
  
  // Open default email client
  window.location.href = mailtoLink;
  
  // Clear the input after sending
  emailInput.value = '';
}

// Allow Enter key to send email
document.getElementById('emailInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    sendEmail();
  }
});