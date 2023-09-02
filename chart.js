$(document).ready(function() {
    $('.chart').each(function() {
        var percent = $(this).data('percent');
        var circle = $(this).find('.chart-circle');

        // Calculate the dash offset based on the percentage
        var dashOffset = (100 - percent) / 100 * (Math.PI * 2 * (circle.attr('r')));

        // Set the stroke-dasharray attribute to create the progress effect
        circle.css('stroke-dasharray', dashOffset + ' ' + (Math.PI * 2 * (circle.attr('r'))));

        // Update the chart's percentage text
        $(this).find('.chart-percent').text(percent + '%');
    });
});
