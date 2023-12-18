let ischeck = false;
$('.header_actions-avatar').addEventListener('click', (e) => {
    if (ischeck) {
        $('.header_userMenu').setAttribute('style', 'display:none;');
    } else {
        $('.header_userMenu').setAttribute('style', 'display:block;');
    }
    ischeck = !ischeck;
});
