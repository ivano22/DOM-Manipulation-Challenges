/**
 * Create a search bar to ﬁlter rows in a table based on user input.
 * 
 * 
 */
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const table = document.getElementById('dataTable');
    const rows = table.getElementsByTagName('tr');

    // Add input event listener
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        let hasVisibleRows = false;

        // Start from index 1 to skip the header row
        for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            const cells = row.getElementsByTagName('td');
            let rowText = '';

            // Concatenate all cell text in the row
            for (let cell of cells) {
                rowText += cell.textContent.toLowerCase() + ' ';
            }

            // Show/hide row based on search term
            if (rowText.includes(searchTerm)) {
                row.style.display = '';
                hasVisibleRows = true;
            } else {
                row.style.display = 'none';
            }
        }

        // Show "No results" message if no matching rows
        let noResults = document.querySelector('.no-results');
        if (!hasVisibleRows) {
            if (!noResults) {
                noResults = document.createElement('tr');
                noResults.className = 'no-results';
                const td = document.createElement('td');
                td.colSpan = 4;
                td.textContent = 'No matching results found';
                noResults.appendChild(td);
                table.querySelector('tbody').appendChild(noResults);
            }
        } else if (noResults) {
            noResults.remove();
        }
    });
});