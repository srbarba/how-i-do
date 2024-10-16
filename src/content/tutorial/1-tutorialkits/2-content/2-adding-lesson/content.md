---
type: lesson
title: Adding a lesson
template: empty
terminal: false
previews: false
focus: '/src/content/tutorial/1-tutorialkit/1-intro/1-welcome/content.md'
---

# Adding a lesson

To add our first lesson, we need to add a `part > chapter > lesson` structure.

1. Create a new part adding a folder inside the `tutorial` directory, for example `src/content/tutorial/1-tutorialkit` and add the part metadata in a `meta.md` file.
2. Create a new chapter inside the part folder, for example `1-intro`, and add a `meta.md` file.
3. Create a new lesson inside a the chapter folder, for example `1-welcome` and add a `content.md` file.
4. Add the lesson content to `content.md`!

## Metadata

The `meta.md` files contains the metadata of a part or chapter. You can also give a shared configuration to all lessons inside the part or chapter from this file.

You have, at least, to specify the `type` of the file, `part` or `chapter`, and the `title`.

## Lesson Content

The `content.md` is a Markdown file with a frontmatter block. The frontmatter block contains metadata about the lesson.

Again, you have to specify the `type` of the file, `lesson`, and the `title`.

Everything below the frontmatter block is the lesson content itself.

```md
---
type: lesson
title: Welcome to TutorialKit
# ...
---

# Kitchen Sink [Heading 1]

Lorem ipsum dolor

<!--  ... -->
```
