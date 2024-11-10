// Toggle folder visibility
function toggleFolder(folderId) {
    const folder = document.getElementById(folderId);
    folder.style.display = (folder.style.display === 'none') ? 'block' : 'none';
}

// Load Markdown into zero-md component
function loadMarkdown(url) {
    const contentDisplay = document.getElementById("content-display");
    contentDisplay.setAttribute("src", url);  // Set the URL of the selected markdown file
}
