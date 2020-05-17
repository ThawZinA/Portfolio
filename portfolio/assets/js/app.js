$('.hamburger').click(()=> {
    $('.menu').toggleClass('show');
    $('.hamburger').toggleClass('rotate');
});   

$('.link').click(()=> {
    $('.menu').removeClass('show');
    $('.hamburger').removeClass('rotate');
} );

var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 500}});
new ScrollMagic.Scene({triggerElement: '.check'})
                    .setClassToggle('.progress-bar', 'show')
                    // .reverse(false)
                    .addTo(controller);


new ScrollMagic.Scene({triggerElement: ".banner"})
                    .setClassToggle(".link-one", "indicator")
                    .addTo(controller);                   
new ScrollMagic.Scene({triggerElement: "#about"})
					.setClassToggle(".link-two", "indicator")
					.addTo(controller);
new ScrollMagic.Scene({triggerElement: "#services"})
                .setClassToggle(".link-three", "indicator") // add class toggle
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#portfolio"})
                .setClassToggle(".link-four", "indicator") // add class toggle
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#testimonial"})
                .setClassToggle(".link-five", "indicator") // add class toggle
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#blogs"})
                .setClassToggle(".link-six", "indicator") // add class toggle
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#contact"})
                .setClassToggle(".link-seven", "indicator") // add class toggle
                .addTo(controller);