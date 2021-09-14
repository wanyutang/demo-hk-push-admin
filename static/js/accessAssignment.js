// 全選api checkbox
function allCheck() {
    var el = document.getElementsByName("funcCheckBox");
    var len = el.length;
    for (var i = 0; i < len; i++) {
        $("input[name='funcCheckBox']").prop("checked", true);
    }
}
//取消全選api checkbox
function falseCheck() {
    var el = document.getElementsByName("funcCheckBox");
    var len = el.length;
    for (var i = 0; i < len; i++) {
        $("input[name='funcCheckBox']").prop("checked", false);
    }
}
// 顯示選擇checkbox
function showCheck() {
    if ($("#selectedItems").children() !== "") {
        $("#selectedItems").children().remove();
    }
    checklist = $("input:checkbox[name='funcCheckBox']:checked")
        .map(function () {
            return $(this).val();
        })
        .get()
        .join("<br>");
    $node = '<span class="functionName">' + checklist + "</span>";
    $("#selectedItems").append($node);
}

function displayModal(id,display){
    $(`#${id}`).modal(display);
}