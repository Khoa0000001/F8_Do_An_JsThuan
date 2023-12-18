let showIcon = true;

$('.footer-toggle-wrap').addEventListener('click', function (e) {
    if (showIcon) {
        $('.footer-toggle-wrap .fa-bars').setAttribute(
            'style',
            'display: block'
        );
        $('.footer-toggle-wrap .fa-arrow-right').setAttribute(
            'style',
            'display: none'
        );
        $('.body-right').setAttribute('style', 'width:0%');
        $('.body-left').setAttribute('style', 'width:100%');
    } else {
        $('.footer-toggle-wrap .fa-arrow-right').setAttribute(
            'style',
            'display: block'
        );
        $('.footer-toggle-wrap .fa-bars').setAttribute(
            'style',
            'display: none'
        );
        $('.body-right').setAttribute('style', 'width:23%');
        $('.body-left').setAttribute('style', 'width:77%');
    }
    showIcon = !showIcon;
});
