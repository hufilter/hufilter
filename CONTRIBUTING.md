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

For an enhanced development experience, we recommend using [Visual Studio Code][vscode-download-link] as your code
editor. If you opt for VS Code, consider installing the [recommended extensions][recommended-vscode-extensions] of the
project.

## Setting up the project

1. Fork [`hufilter/hufilter`][hufilter-repo] repository on GitHub.
2. Clone your forked repository.
3. Enable Corepack by running the `corepack enable` command. Corepack comes pre-installed with Node.js, so you don't
   need to install it separately.
4. Install project dependencies using the `pnpm install` command. If you don't have pnpm installed,
   Corepack will prompt you to install it if you run the `pnpm` command.

## Adding new rules

> [!IMPORTANT]
> hufilter extends EasyList and EasyPrivacy lists. Ensure your rules are not already present in those lists.

1. Create a new branch for your changes, e.g., `git checkout -b example.com` or `git checkout -b fix/123` (for example
   if you fix an issue with ID `123`). It's crucial to separate changes by creating a new branch for each
   website / issue.
2. Make your changes by editing the section files in the [sections][sections-directory] directory, which contains the
   filtering rules. Refer to the [`sections/README.md`][sections-readme] file for information on the directory
   structure.
3. Commit your changes, then push them to your forked repository.
4. Create a pull request from your forked repository's corresponding branch to the `master` branch of the
   `hufilter/hufilter` repository.
5. Wait for the review of your changes.

<!--markdownlint-disable MD013-->
> [!TIP]
> If you are not familiar with the syntax of the filtering rules, check the following documentations:
>
> - <img src="https://cdn.adguard.com/website/github.com/AGLint/abp_logo.svg" width="14px" alt="Adblock Plus logo"> [Adblock Plus: *How to write filters*][abp-filters]
> - <img src="https://cdn.adguard.com/website/github.com/AGLint/adg_logo.svg" width="14px" alt="AdGuard logo"> [AdGuard: *How to create your own ad filters*][adg-filters]
> - <img src="https://cdn.adguard.com/website/github.com/AGLint/ubo_logo.svg" width="14px" alt="uBlock Origin logo"> [uBlock Origin: *Static filter syntax*][ubo-filters]
>
> These documentations assumes that you are familiar with the basics of web technologies, such as HTML, CSS, and JavaScript.
<!--markdownlint-enable MD013-->

[abp-filters]: https://help.adblockplus.org/hc/en-us/articles/360062733293
[adg-filters]: https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters
[git-download-link]: https://git-scm.com/downloads
[hu-version]: https://github.com/hufilter/hufilter/blob/master/CONTRIBUTING.hu.md
[hufilter-repo]: https://github.com/hufilter/hufilter
[nodejs-download-link]: https://nodejs.org/en/download/
[recommended-vscode-extensions]: https://github.com/hufilter/hufilter/blob/master/.vscode/extensions.json
[sections-directory]: https://github.com/hufilter/hufilter/blob/master/sections/
[sections-readme]: https://github.com/hufilter/hufilter/blob/master/sections/README.md
[ubo-filters]: https://github.com/gorhill/uBlock/wiki/Static-filter-syntax
[vscode-download-link]: https://code.visualstudio.com/download
