// Function to toggle the visibility of subfolders
function toggleFolder(folderId) {
    const folder = document.getElementById(folderId);
    if (folder.style.display === "none" || folder.style.display === "") {
        folder.style.display = "block";
    } else {
        folder.style.display = "none";
    }
}

// Function to load and display Markdown content with Markdown formatting
async function loadMarkdown(filePath) {
    const contentDisplay = document.getElementById("content-display");

    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error("Failed to load the Markdown file.");
        }

        const text = await response.text();

        // Use marked.js to convert Markdown to HTML
        contentDisplay.innerHTML = marked(text);
    } catch (error) {
        contentDisplay.innerHTML = "<p>Failed to load content. Please check the file path.</p>";
        console.error(error);
    }
}
