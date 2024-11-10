// Function to toggle the visibility of subfolders
function toggleFolder(folderId) {
    const folder = document.getElementById(folderId);
    if (folder.style.display === "none" || folder.style.display === "") {
        folder.style.display = "block";
    } else {
        folder.style.display = "none";
    }
}

// Function to load and display Markdown content
async function loadMarkdown(filePath) {
    const contentDisplay = document.getElementById("content-display");

    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error("Failed to load the Markdown file.");
        }

        const text = await response.text();

        // Render the Markdown as plain text (you could use a library like marked.js to convert it to HTML)
        contentDisplay.innerHTML = `<pre>${text}</pre>`;
    } catch (error) {
        contentDisplay.innerHTML = "<p>Failed to load content. Please check the file path.</p>";
        console.error(error);
    }
}
