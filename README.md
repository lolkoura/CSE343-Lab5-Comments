# CSE343 - Lab 5, Task 2: Comments

React comments application for CSE343 Lab 5.

Implementation of the comments example on page 40 of Lab 5.

## Run
Requires Node.js 22 or newer and npm.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Build with `npm run build`.

## Features
- Four initial comments matching the lab reference.
- Post a trimmed, nonempty comment using Post or Enter.
- Update the comment count and reset the input after posting.
- Increment only the selected comment's likes.
- Responsive layout and keyboard-accessible controls.

App owns comments in React useState. CommentForm owns the controlled input and calls onPost. Comment receives data and an onLike callback through props. Stable IDs are used as list keys; updates are immutable.

State is held in memory and resets on refresh. There is no backend or deployment.

