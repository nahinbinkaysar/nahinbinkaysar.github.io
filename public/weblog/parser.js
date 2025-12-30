// parser.js

// Function to escape HTML entities in code blocks
function escapeHtml(code) {
    return code.replace(/&/g, "&amp;")
               .replace(/</g, "&lt;")
               .replace(/>/g, "&gt;");
}

// Function to parse Markdown to HTML
function parseMarkdown(markdownText) {
    // Temporarily replace code blocks with placeholders
    const codeBlocks = [];
    markdownText = markdownText.replace(/```(.*?)```/gs, (match, code) => {
        const placeholder = `{{CODE_BLOCK_${codeBlocks.length}}}`;
        codeBlocks.push(`<pre><code>${escapeHtml(code)}</code></pre>`);
        return placeholder;
    });

    // Parse inline code (fenced with single backticks `)
    markdownText = markdownText.replace(/`(.*?)`/g, '<code>$1</code>');

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

    // Restore code blocks
    codeBlocks.forEach((code, index) => {
        const placeholder = `{{CODE_BLOCK_${index}}}`;
        markdownText = markdownText.replace(placeholder, code);
    });

    return markdownText;
}

// Export the function for use in other scripts
export { parseMarkdown };
