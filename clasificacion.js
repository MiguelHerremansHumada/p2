$(document).ready(function() {
    $("#clasificacion thead th").on("click", function() {
        var column = $(this).index();
        var table = $(this).parents("table");
        var rows = table.find("tbody > tr").get();

        rows.sort(function(a, b) {
            var A = $(a).children("td").eq(column).text();
            var B = $(b).children("td").eq(column).text();

            return $.isNumeric(A) && $.isNumeric(B) ? A - B : A.localeCompare(B);
        });

        $.each(rows, function(index, row) {
            table.children("tbody").append(row);
        });
    });
});
