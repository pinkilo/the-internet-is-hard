<div align="center">
  <h1 align="center">the internet is hard (working title)</h3>

  <p align="center">
    we get it, the internet can be hard
    <br />
    <a href="https://pinkilo.github.io/the-internet-is-hard/">live site</a>
  </p>
</div>

## Table of Contents

- [Project Description](#description)
- [Getting Started](#Getting-Started)
  - [Prerequisites](#Prerequisites)
  - [Installation](#Installation)
- [Technical Stuff](#technical-stuff)
  - [File Structure](#file-organization)
- [Roadmap](#Roadmap)
- [License](#License)
- [Acknowledgments](#Acknowledgments)

---

# Description

the best value on the internet since 2023.

# Getting Started

### Prerequisites

- go
- hugo
- pnpm
- node
- npm

### Installation

_This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/pinkilo/the-internet-is-hard.git
   cd the-internet-is-hard/
   ```
2. Install tailwind dependencies
   ```sh
    pnpm install
   ```
3. watch files and build css (in a separate terminal)
   ```sh
    pnpm watch-css
   ```
4. Start hugo server (see hugo docs for more options)
   ```sh
    pnpm hugo
   ```

# Technical Stuff

Built with <3, hugo, & tailwind.

#### File Organization

```text
/
│
├── archetypes/ *default front matter for new content
│
├── assets/ *css files, tailwind base imports.
│
├── content/ *content as md files
│   ├── _index.md *homepage content above sections grid
│   ├── sections/ *each section lives in it's own folder
│   │   ├── _index.md/ *section information (title, description, icon)
│   │   ├── article.md/ *pages are md files or bundles (see hugo docs)
│
├── layouts/ *html template files
│   ├── _default/ *default templates
│   │   ├── baseof.html/ *base template
│   │   ├── index.html/ *homepage template
│   │   ├── list.html/ *archive page template, not in use
│   │   ├── rss.xml/ *rss config, not in use
│   │   ├── single.html/ *single article page template
│
│
├── static/ *static files (imgs, etc)
│
├── LICENSE/ *??
├── CHANGELOG.md/ *CHANGELOG
└── README.md/   *README

```

# Roadmap

See `CHANGELONG.md` for changes.

- [x] init
- [x] basic structure
- [x] content rendering and basic styling
- [ ] better content styling
- [ ] section sidebar for articles
- [ ] backlinks
- [ ] better tailwind setup
- [ ] add Changlog, License, etc

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

- [tailwind & hugo setup](https://www.hugotutorial.com/posts/2022-01-03-hugo-and-tailwindcss-3.0/)
