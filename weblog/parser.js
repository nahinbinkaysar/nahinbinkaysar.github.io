// parser.js

// Function to parse Markdown to HTML
function parseMarkdown(markdownText) {
    // Parse headings
    markdownText = markdownText.replace(/^(#{1,6})\s*(.*)/gm, (match, hashes, content) => {
        const level = hashes.length;
        return `<h${level}>${content}</h${level}>`;
    });

    // Convert new lines into <br> tags
    markdownText = markdownText.replace(/\n/g, '<br>');
    
    // Parse bold text
    markdownText = markdownText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Parse italic text
    markdownText = markdownText.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Parse links
    markdownText = markdownText.replace(/\[([^\[]+)\]\(([^\)]+)\)/g, '<a href="$2">$1</a>');

    return markdownText;
}

// Export the function for use in other scripts
export { parseMarkdown };
