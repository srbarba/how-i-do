---
type: lesson
title: Code templates
template: vite-vue-template
focus: '/App.vue'
editor:
  fileTree:
    allowEdits: '/src/**'
---

# Code templates

A **code template** is a project that `TutorialKit` uses to display the code in the preview of a lesson. It can be anything from a simple HTML file to a full-fledged Vite application.

You can specify the `template` parameter at frontmatter of the lesson. If you don't specify the template parameter, it will use the default template in the `src/templates/default` directory.

You can add a new template in the `src/templates` directory.

> TutorialKit will use a template project and apply the content of the `\_files` (or `\_solution`) folder on top of it.

## Configure preview commands

To allow TutorialKit to start the template preview, we need to add, at least, the following parameters to the `src/tutorial/meta.md` file:

- `mainCommand`: Command or commands that start the server.
- `prepareCommands`: Commands that need to be executed before starting the server.

For example:

```md
---
type: tutorial
mainCommand: ['pnpm dev', 'Starting http server']
prepareCommands:
  - ['pnpm i', 'Installing dependencies']
---
```

If you have multiple templates and each one requires different commands to start the server, you can specify the commands in the lesson frontmatter file.
