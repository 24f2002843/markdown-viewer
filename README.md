# Markdown Viewer

## How to run
1. Open `index.html` in a web browser.

## Features
- View Markdown formatted text.
- Tabbed interface to switch between preview and source.

## Accessibility
- Semantic HTML5 elements used.
- ARIA attributes for improved screen reader support.

## Design tokens (CSS variables/palette)
- Header background: `--header-bg`

## API endpoints used
- None

## Attachments used
- None

## Keyword coverage
| Keyword/Phrase                          | Implementation Location |
|-----------------------------------------|-------------------------|
| markdown viewer                         | Header of index.html    |
| #markdown-tabs                          | ID in index.html        |
| #markdown-source                        | ID in index.html        |
| document.querySelectorAll('#markdown-tabs button').length >= 2 | main.js self-test       |
| document.querySelector('#markdown-source').textContent.trim().length > 0 | main.js self-test       |

## Changelog: Round 1
- Created a Markdown Viewer app with a tabbed interface.
- Implemented functionality to toggle between Markdown preview and source view.
- Added a simple Markdown to HTML conversion for the preview.