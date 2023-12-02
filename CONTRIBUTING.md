<!-- omit in toc -->
# Contributing guidelines

**🇭🇺 [Kattints ide a magyar nyelvű változatért][hu-version].**

Table of contents:

- [Prerequisites](#prerequisites)
- [Setting up the project](#setting-up-the-project)
- [Adding new rules](#adding-new-rules)

## Prerequisites

Before contributing to the project, make sure you have the following tools installed on your system:

- [Node.js][nodejs-download-link] (we recommend the latest LTS version)
- [Git][git-download-link]
- [Yarn][yarn-download-link]

For an enhanced development experience, we recommend using [Visual Studio Code][vscode-download-link] as your code
editor. If you opt for VS Code, consider installing the [recommended extensions][recommended-vscode-extensions] of the
project.

## Setting up the project

1. Fork [`hufilter/hufilter-dev`][hufilter-dev-repo] repository on GitHub.
2. Clone your forked repository.
3. Install project dependencies using the `yarn` command.

## Adding new rules

> [!IMPORTANT]
> hufilter extends EasyList and EasyPrivacy lists. Ensure your rules are not already present in those lists.

1. Create a new branch for your changes, e.g., `git checkout -b example.com` or `git checkout -b fix/123` (for example
   if you fix an issue with ID `123`). It's crucial to separate changes by creating a new branch for each website/issue.
2. Make your changes by editing the section files in the [sections][sections-directory] directory, which contains the
   filtering rules. Refer to the [`sections/README.md`][sections-readme] file for information on the directory
   structure.
3. Commit your changes, then push them to your forked repository.
4. Create a pull request from your forked repository's corresponding branch to the `master` branch of the
   `hufilter/hufilter-dev` repository.
5. Wait for the review of your changes.

[git-download-link]: https://git-scm.com/downloads
[hu-version]: https://github.com/hufilter/hufilter-dev/blob/master/CONTRIBUTING.hu.md
[hufilter-dev-repo]: https://github.com/hufilter/hufilter-dev
[nodejs-download-link]: https://nodejs.org/en/download/
[recommended-vscode-extensions]: https://github.com/hufilter/hufilter-dev/blob/master/.vscode/extensions.json
[sections-directory]: https://github.com/hufilter/hufilter-dev/blob/master/sections/
[sections-readme]: https://github.com/hufilter/hufilter-dev/blob/master/sections/README.md
[vscode-download-link]: https://code.visualstudio.com/download
[yarn-download-link]: https://classic.yarnpkg.com/en/docs/install/
