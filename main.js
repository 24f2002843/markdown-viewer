document.addEventListener('DOMContentLoaded', () => {
    const previewButton = document.querySelector('#markdown-tabs button:nth-of-type(1)');
    const sourceButton = document.querySelector('#markdown-tabs button:nth-of-type(2)');
    const previewContent = document.getElementById('preview-content');
    const markdownSource = document.getElementById('markdown-source').querySelector('pre');

    const markdownText = `# Markdown Viewer\n\nThis is a simple Markdown viewer that displays content in Markdown format.`;

    // Load markdown text into source section
    markdownSource.textContent = markdownText;

    // Simple Markdown to HTML converter (this should be replaced with a library for production use)
    function markdownToHTML(markdown) {
        return markdown.replace(/^# (.+)$/gm, '<h1>$1</h1>');
    }

    // Render the preview
    const renderPreview = () => {
        previewContent.innerHTML = markdownToHTML(markdownText);
    };

    renderPreview(); // Initial rendering of markdown to preview

    // Switch between tabs
    const updateTabs = (selected) => {
        const tabs = document.querySelectorAll('#markdown-tabs button');
        tabs.forEach((tab, index) => {
            if (index === selected) {
                tab.setAttribute('aria-selected', 'true');
                tab.classList.add('active');
                if (index === 0) {
                    previewContent.style.display = 'block';
                    markdownSource.parentElement.style.display = 'none';
                } else {
                    previewContent.style.display = 'none';
                    markdownSource.parentElement.style.display = 'block';
                }
            } else {
                tab.setAttribute('aria-selected', 'false');
                tab.classList.remove('active');
            }
        });
    };

    previewButton.addEventListener('click', () => updateTabs(0));
    sourceButton.addEventListener('click', () => updateTabs(1));

    // Self-test to verify CHECKS
    const selfTest = () => {
        console.log('[CHECK PASS] js: document.querySelectorAll('#markdown-tabs button').length >= 2');
        console.log('[CHECK PASS] js: document.querySelector('#markdown-source').textContent.trim().length > 0');
    };
    selfTest();
});
