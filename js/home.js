$(document).ready(function () {
    //   alert("Ready to go!!!");
    loadAllDvd();
});

function loadAllDvd(){
    clearDvdTable();
    var contentRows = $('#contentRows');
    $.ajax({
        type: 'GET',
        url: 'http://dvd-library.us-east-1.elasticbeanstalk.com/dvds',
        success: function(contactArray) {
            $.each(contactArray, function(index, dvd){
                var row = '<tr>';
                row += '<td>' + dvd.id + '</td>';
                row += '<td>' + dvd.title + '</td>';
                row += '<td>' + dvd.releaseYear + '</td>';
                row += '<td>' + dvd.director + '</td>';
                row += '<td>' + dvd.rating + '</td>';
                row += '</tr>';
                contentRows.append(row);
            })

        },
        error: function() {
            $('#errorMessages')
                .append($('<li>')
                    .attr({class: 'list-group-item list-group-item-danger'})
                    .text('Error of loading from 3rd API. Try again later.'));
        }
    })
}

function clearDvdTable() {
    $('#contentRows').empty();
}










