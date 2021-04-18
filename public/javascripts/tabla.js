/*var excel = require('excel4node');

exportTableToExcel();
//workbook.write('Excel.xlsx');
// Set value of cell B1 to 300 as a number type styled with paramaters of style
//worksheet.cell(1,2).number(200).style(style);
var workbook = new excel.Workbook();

// Add Worksheets to the workbook
var worksheet = workbook.addWorksheet('Sheet 1');
// Create a reusable style
var style = workbook.createStyle({
    font: {
        color: '#FF0800',
        size: 12
    },
    numberFormat: '$#,##0.00; ($#,##0.00); -'
});
// Set value of cell A1 to 100 as a number type styled with paramaters of style
worksheet.cell(1,3).number(10).style(style);*/
/*
function exportTableToExcel(tableID, filename = ''){
    // Create a new instance of a Workbook class

    var downloadLink;
    var dataType = 'application/application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

    // Specify file name
    filename = filename?filename+'.xls':'excel_data.xls';

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
    }
}
*/
$("#export_cost").click(function (){
    exportarExcelv2();
})
function exportarExcelv2(tableId) {
    var tab_text = "<table border='2px'><tr bgcolor='#87AFC6'>";
    var textRange;
    var j = 0;
    tab = document.getElementById(tableId);
    for (j = 0; j < tab.rows.length; j++) {
        tab_text = tab_text + tab.rows[j].innerHTML + "</tr>";
    }
    tab_text = tab_text + "</table>";
    tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, "");//remove if u want links in your table
    //tab_text = tab_text.replace(/<img[^>]*>/gi, ""); // remove if u want images in your table
    tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // remove input params
    sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));
    return (sa);
}
function exportarExcelv2() {


    /* creamos el nuevo workbook */
    var workbook = XLSX.utils.book_new();

    /* convertimos tabla 'tablaOriginal' a un  worksheet llamado "Flota Sana" */
    var ws1 = XLSX.utils.table_to_sheet(document.getElementById('tabla_sell'));
    XLSX.utils.book_append_sheet(workbook, ws1, "Sell");

    /* convertimos tabla 'tablaFlSaC' a un  worksheet llamado "Tipo de Contrato" */
    var ws2 = XLSX.utils.table_to_sheet(document.getElementById('tabla_cost'));
    XLSX.utils.book_append_sheet(workbook, ws2, "Cost");

    var ws3 = XLSX.utils.table_to_sheet(document.getElementById('tabla_eb1'));
    XLSX.utils.book_append_sheet(workbook, ws3, "EB1");

    var ws4 = XLSX.utils.table_to_sheet(document.getElementById('tabla_eb2'));
    XLSX.utils.book_append_sheet(workbook, ws4, "EB2");

    var ws5 = XLSX.utils.table_to_sheet(document.getElementById('tabla_eb3'));
    XLSX.utils.book_append_sheet(workbook, ws5, "EB3");



    /* exportamos en el libro con los worksheets */
    XLSX.writeFile(workbook, "Contratos.xlsx");
}
