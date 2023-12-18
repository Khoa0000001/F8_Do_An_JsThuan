$$('.btn-detail-course').forEach((element) => {
    element.addEventListener('click', (e) => {
        $('.overlay').setAttribute('style', 'display:block;');
        $('.lesson_wrapper').setAttribute('style', 'display:block;');
    });
});

$('.btn-exit-form').addEventListener('click', () => {
    $('.overlay').setAttribute('style', 'display:none;');
    $('.lesson_wrapper').setAttribute('style', 'display:none;');
});
