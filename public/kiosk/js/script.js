$(document).ready(function() {
    
    const defaultPage = "info.html";
    const $iframe = $("#info-frame");

    // 1. When hovering over a number
    $(document).on('mouseenter', 'area', function() {
        var targetPage = $(this).attr('href');
        
        // Update source immediately
        if ($iframe.attr("src") !== targetPage) {
            $iframe.attr("src", targetPage);
        }
    });

    // 2. When leaving the MAP AREA entirely (Reset to Welcome)
    // We use the container to detect if the mouse has left the interactive area
    $(".contain-map").on('mouseleave', function() {
        $iframe.attr("src", defaultPage);
    });

    // Support for clicks
    $(document).on('click', 'area', function(e) {
        e.preventDefault();
        $iframe.attr("src", $(this).attr('href'));
    });
});