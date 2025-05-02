$(document).ready(function() {
    $('.slider-wrapper').each(function() {
        const wrapper = $(this);
        const slider = wrapper.find('.splide-slider');
        const prevBtn = wrapper.find('.slider-prev')[0];
        const nextBtn = wrapper.find('.slider-next')[0]; 

        const options = {
            type: 'loop',
            // gap: '1rem',
            autoplay: true,
        };

        let extraOptions = {};

        if (slider.hasClass('production')) {
            extraOptions = {
                focus: 0,
                interval: 4000,
                pagination: false,
                arrows: false,
                perPage: 3,
                breakpoints: {
                    1200: {
                        perPage: 2,
                    },
                    768: {
                        perPage: 1.2,
                    },
                    480: {
                        perPage: 1,
                    },
                },
            };
        } else if (slider.hasClass('watch-more')) {
            extraOptions = {
                focus: 0,
                interval: 4000,
                pagination: false,
                arrows: false,
                perPage: 3, 
                breakpoints: {
                    990: {
                        perPage: 2.3,
                    },
                    582: {
                        perPage: 1.5,
                    },
                    480: {
                        perPage: 1,
                    },
                },
            };
        }else if (slider.hasClass('reviews')) {
            extraOptions = {
                focus: 0,
                interval: 4000,
                pagination: false,
                arrows: false,
                perPage: 3, 
                breakpoints: {
                    1600: {
                        perPage: 2.5,
                    },
                    990: {
                        perPage: 2,
                    },
                    768: {
                        perPage: 1.5,
                    },
                    480: {
                        perPage: 1,
                    },
                },
            };
        }
        const finalOptions = {...options, ...extraOptions };
        const splide = new Splide(slider[0], finalOptions);

        if (prevBtn) prevBtn.addEventListener('click', () => splide.go('-1'));
        if (nextBtn) nextBtn.addEventListener('click', () => splide.go('+1'));

        splide.mount();
    });
});