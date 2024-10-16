---
type: lesson
title: Lesson code
template: empty
terminal: false
previews: false
focus: '/sum.js'
---

# Lesson code

Beside the `content.md` file in a lesson’s directory, you will find two folders:

- `\_files`
- `\_solution`

The `\_files` folder contains any code files that are part of the lesson. You can place any number of files in this folder.

The `\_solution` folder contains the code for the lesson in its solved state.

## Example

We added a `sum.js` file to this lesson to show you the result.

The lesson files looks like:

- `content.md`
- `\_files/sum.js`
- `\_solution/sum.js`

And the lesson content is like:

```md
---
type: lesson
title: Lesson code
focus: '/sum.js'
# ...
---

# Lesson code

<!--  ... -->
```
