
function showItem(i,task) {
    var dataItem = '<tr><td><b>'+task.name +'</b>'+task.date+'</td><td><b>'+task.assigned+'</b></td></tr>';
    $("table").prepend(dataItem);
}
function showItemTable(results) {
    $.each(results, showItem);
}
function showError(error) {
    window.alert("Error in finding data");
}

function saveItemTable(task) {
    var dataItem = '<tr><td><b>' + task.name + '</b>' + task.date + '</td><td><b>' + task.assigned + '</b></td></tr>';
    $("table").prepend(dataItem);
}
function saveError(error) {
    window.alert("Error in saving data");
}

var task = {};
$("form").submit(function (e) {
    e.preventDefault();
    task['name'] = $('#taskname').val();
    task['date'] = $('#date').val();
    task['assigned'] = $('#assigned').val();
    console.log(task);
    $.ajax({
        type : 'POST',
        dataType: 'json',
        url: "task.json",
        data : task,
        success: saveItemTable(task),
        error: saveError
    });
});


$.ajax({
    type : 'GET',
    dataType: 'json',
    url: "task.json",
    success: showItemTable,
    error: showError
});

