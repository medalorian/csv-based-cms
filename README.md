# CSV-Based CMS

A lightweight and easy-to-use content management system (CMS) leveraging GitHub Pages and CSV files for data storage.

## Overview

This CMS is built using HTML, CSS, and TypeScript, and it stores content in CSV files. It is designed to work with GitHub Pages, allowing users to easily create and manage content without the need for a dedicated server or database.

## Features

- Simple content management using CSV files
- Optional admin page for managing content
- No server or database required

## Setup

1. Clone or fork this repository.
2. Enable GitHub Pages for your repository by going to "Settings" and selecting the "main" branch as the source.
3. Customize the content in the `data/content.csv` file.
4. Access your live site at `https://<username>.github.io/<repo-name>/`.

## Usage

### Managing content

Add, edit, or remove content by updating the `data/content.csv` file. Each row in the CSV file represents a content item.

### Admin page

The admin page is available at `https://<username>.github.io/<repo-name>/admin.html`. You can use this page to add new content to the CSV file. Note that you will need to manually update the `content.csv` file in your repository with the new content, as the admin page cannot save changes directly to the file.

## Customization

To customize the appearance of your CMS, edit the CSS styles in `css/styles.css`. You can also modify the HTML templates in `index.html` and `admin.html` to change the layout or add additional functionality.

## License

This project is released under the [MIT License](LICENSE).
