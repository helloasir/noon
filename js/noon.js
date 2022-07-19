function format_link(link) {
    if (link)
        return "<a href='" + link + "' target='_blank'>" + link + "</a>";
    else return "";
}

CsvToHtmlTable.init({
    csv_path: "data/noontop.csv",
    element: "table",
    allow_download: false,
    csv_options: {
        separator: ",",
        delimiter: '"'
    },
    datatables_options: {
        paging: false
    },
    custom_formatting: [
        [1, format_link]
    ]
});