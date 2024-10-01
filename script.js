const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

document.getElementById('prevBtn').addEventListener('click', () => {
    testimonials[currentTestimonial].classList.add('hidden');
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    testimonials[currentTestimonial].classList.remove('hidden');
    testimonials[currentTestimonial].classList.add('active');
});

document.getElementById('nextBtn').addEventListener('click', () => {
    testimonials[currentTestimonial].classList.add('hidden');
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].classList.remove('hidden');
    testimonials[currentTestimonial].classList.add('active');
});



