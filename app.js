$(document).ready(function () {
    // Smooth scroll to section when navigation link is clicked
    $("nav a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800, // Animation duration in milliseconds
                function () {
                    window.location.hash = hash;
                }
            );
        }
    });
});
