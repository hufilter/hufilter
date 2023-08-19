# Contributing guidelines

## Table of contents

- [Contributing guidelines](#contributing-guidelines)
    - [Table of contents](#table-of-contents)
    - [Prerequisites](#prerequisites)
    - [Contributing to the project](#contributing-to-the-project)
        - [Important notes](#important-notes)

## Prerequisites

You'll need to install the following tools to your system in order to contribute to the project:

- [Node.js][nodejs-download-link] (we recommend the latest LTS version)
- [Git][git-download-link]
- [Visual Studio Code][vscode-download-link] (highly recommended)
    - Don't forget to install the [recommended extensions][recommended-vscode-extensions]

## Contributing to the project

Here is a general workflow for contributing to the project:

1. Install [prerequisites] to your system
1. Fork `hufilter/hufilter-dev` repository on GitHub
1. Clone your forked repository with `git clone`
1. Install dependencies with `yarn`. This will also initialize the Git hooks via the Husky package.
1. Create a new branch for your changes, e.g. `git checkout -b example.com`
1. Make your changes, typically by editing the section files in the [sections][sections-directory] directory, which
   contains the section files that are actually contains the filtering rules. You can find more information about the
   structure of this directory in the [`sections/README.md`][sections-readme] file.
1. Commit your changes, then push them to your forked repository. If Husky is configured correctly, the Git hooks will
   run automatically and will check your changes for errors and don't let you commit invalid changes.
1. Create a pull request from your forked repository's corresponding branch to the `master` branch of the
   `hufilter/hufilter-dev` repository
1. Wait for the CI to finish running in the pull request
1. If the CI fails, fix the issues and push your changes to your forked repository's corresponding branch (this will
   automatically update the pull request and the CI will run again)
1. If the CI succeeds, wait for the maintainers to review your changes
1. If your changes are accepted, they will be merged into the `master` branch, and they will be deployed to the
   [`hufilter/hufilter` repository][hufilter-dev-repo] automatically right after the merge. Please note that it may take
   some time while adblockers update their filter lists.

### Important notes

- If you are creating rules for multiple websites, please create a separate branch for each website and open a separate
  pull request for each website. This will make it easier to review your changes. If you are creating large, hard to
  review PRs, they will be rejected and you will be asked to split them into smaller PRs.

[git-download-link]: https://git-scm.com/downloads
[hufilter-dev-repo]: https://github.com/hufilter/hufilter-dev
[nodejs-download-link]: https://nodejs.org/en/download/
[prerequisites]: #prerequisites
[recommended-vscode-extensions]: https://github.com/hufilter/hufilter-dev/blob/master/.vscode/extensions.json
[sections-directory]: https://github.com/hufilter/hufilter-dev/blob/master/sections/
[sections-readme]: https://github.com/hufilter/hufilter-dev/blob/master/sections/README.md
[vscode-download-link]: https://code.visualstudio.com/download
