let btnChanges = function (change, saveOfcancel, save, cancel, input) {
    var OldValue;
    change.addEventListener('click', function () {
        this.setAttribute('style', 'display:none');
        saveOfcancel.setAttribute('style', 'display:block');
        if (input) {
            input.disabled = false;
            OldValue = input.value;
        }
    });
    cancel.addEventListener('click', function () {
        saveOfcancel.setAttribute('style', 'display:none');
        change.setAttribute('style', 'display:block');
        if (input) {
            input.disabled = true;
            input.value = OldValue;
        }
    });
};
btnChanges(
    $('#Setting-name .Setting_item-btnChange'),
    $('#Setting-name .Setting_item-btn'),
    $('#Setting-name .Setting_item-btnLuu'),
    $('#Setting-name .Setting_item-btnHuy'),
    $('#Setting-name input[name="full_name')
);
btnChanges(
    $('#Setting-avatar .Setting_item-btnChange'),
    $('#Setting-avatar .Setting_item-btn'),
    $('#Setting-avatar .Setting_item-btnLuu'),
    $('#Setting-avatar .Setting_item-btnHuy')
);
btnChanges(
    $('#Setting-email .Setting_item-btnChange'),
    $('#Setting-email .Setting_item-btn'),
    $('#Setting-email .Setting_item-btnLuu'),
    $('#Setting-email .Setting_item-btnHuy'),
    $('#Setting-email input[name="full_name')
);
btnChanges(
    $('#Setting-sdt .Setting_item-btnChange'),
    $('#Setting-sdt .Setting_item-btn'),
    $('#Setting-sdt .Setting_item-btnLuu'),
    $('#Setting-sdt .Setting_item-btnHuy'),
    $('#Setting-sdt input[name="full_name')
);
var imgOldImageUrl;
$('#Setting-avatar #getFile').addEventListener(
    'change',

    function (event) {
        imgOldImageUrl = $('.Setting_Img-avatar img').src;
        // Lấy thẻ <img> theo ID
        var imgElement = $('.Setting_Img-avatar img');
        console.log(this.files[0]);
        // Kiểm tra xem đã chọn file hình ảnh chưa
        if (event.target.files.length > 0) {
            // Lấy đối tượng File từ input file
            var newImageFile = event.target.files[0];

            // Tạo đường dẫn cho đối tượng File
            var newImageUrl = URL.createObjectURL(newImageFile);

            // Thay đổi giá trị của thuộc tính src
            imgElement.src = newImageUrl;
        }
    }
);
$('#Setting-avatar .Setting_item-btnHuy').addEventListener(
    'click',
    function (e) {
        var imgElement = $('.Setting_Img-avatar img');
        if (imgOldImageUrl) {
            imgElement.src = imgOldImageUrl;
            imgOldImageUrl = null;
        }
    }
);
