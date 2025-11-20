$(function () {
    // Initialize MixItUp for portfolio filtering
    var mixer = mixitup('.portfolio__list');

    // Typing animation for hero title
    const text = "Oleksandr Khyzhniak";
    const $typedText = $('#typed-text');
    let index = 0;
    
    function typeText() {
        if (index < text.length) {
            $typedText.text(text.substring(0, index + 1));
            index++;
            setTimeout(typeText, 150); // Adjust speed (lower = faster)
        }
    }
    
    // Start typing after a short delay
    setTimeout(typeText, 500);

    // Update aria-pressed when filter buttons are clicked
    $('.portfolio__btn').on('click', function() {
        $('.portfolio__btn').attr('aria-pressed', 'false');
        $(this).attr('aria-pressed', 'true');
    });
});
