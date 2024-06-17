document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        validateForm();
    });

    const validateForm = () => {
        let valid = true;
        const inputs = form.querySelectorAll('input, textarea');

        inputs.forEach(input => {
            if (!input.checkValidity()) {
                valid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '';
            }
        });

        if (valid) {
            alert('Form submitted successfully!');
            form.reset();
        } else {
            alert('Please fill out all fields correctly.');
        }
    };

    // Social media icons click event
    const socialMediaLinks = {
        facebook: 'https://www.facebook.com',
        twitter: 'https://www.twitter.com',
        youtube: 'https://www.youtube.com',
        linkedin: 'https://www.linkedin.com'
    };

    Object.keys(socialMediaLinks).forEach(id => {
        const icon = document.getElementById(id);
        if (icon) {
            icon.addEventListener('click', () => {
                window.open(socialMediaLinks[id], '_blank');
            });
        }
    });
});