        // Header Scroll Effect
        window.addEventListener('scroll', function () {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Testimonial Slider
        document.addEventListener('DOMContentLoaded', function () {
            // Testimonial slider variables
            const testimonialContainer = document.querySelector('.testimonials-container');
            const testimonials = document.querySelectorAll('.testimonial');
            const dots = document.querySelectorAll('.slider-dot');
            let currentIndex = 0;
            let intervalId;

            // Function to go to specific slide
            function goToSlide(index) {
                currentIndex = index;
                testimonialContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

                // Update active dot
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === currentIndex);
                });
            }

            // Function for next slide
            function nextSlide() {
                const newIndex = (currentIndex + 1) % testimonials.length;
                goToSlide(newIndex);
            }

            // Dot navigation
            dots.forEach(dot => {
                dot.addEventListener('click', function () {
                    const index = parseInt(this.getAttribute('data-index'));
                    goToSlide(index);
                    resetInterval();
                });
            });

            // Auto-rotation functions
            function startInterval() {
                intervalId = setInterval(nextSlide, 5000);
            }

            function resetInterval() {
                clearInterval(intervalId);
                startInterval();
            }

            // Initialize slider
            goToSlide(0);
            startInterval();

            // Add to cart animations
            const addToCartButtons = document.querySelectorAll('.add-to-cart');
            addToCartButtons.forEach(button => {
                button.addEventListener('click', function () {
                    this.innerHTML = '<i class="fas fa-check"></i>';
                    setTimeout(() => {
                        this.innerHTML = '<i class="fas fa-plus"></i>';
                    }, 1000);

                    // Update cart count
                    const cartCount = document.querySelector('.cart-count');
                    let count = parseInt(cartCount.textContent);
                    cartCount.textContent = count + 1;

                    // Animation
                    cartCount.style.transform = 'scale(1.5)';
                    setTimeout(() => {
                        cartCount.style.transform = 'scale(1)';
                    }, 300);
                });
            });

            // Newsletter form submission
            const newsletterForm = document.querySelector('.newsletter-form');
            if (newsletterForm) {
                newsletterForm.addEventListener('submit', function (e) {
                    e.preventDefault();
                    const input = this.querySelector('input');
                    input.value = '';
                    input.placeholder = 'Thank you for subscribing!';
                    setTimeout(() => {
                        input.placeholder = 'Your email address';
                    }, 3000);
                });
            }
        });

        // Floating animation for decorative elements
        const floatingElements = document.querySelectorAll('.floating');
        floatingElements.forEach(el => {
            el.style.animationDelay = `${Math.random() * 2}s`;
        });