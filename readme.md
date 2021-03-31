# Tailwind JIT `calc()`

When using `calc()` within the new arbitrary value class syntax, classes are not generated when the body of the `calc` function contains spaces:

```html
<div class="h-[calc(100px + 50px * 2)]">This does not work</div>
<div class="h-[calc(100px+50px*2)]">This does work</div>
```

## Reproduction

1. `yarn && yarn dev`
2. Navigate to [localhost:3000](http://localhost:3000/)
3. Inspect the 2 elements on the page and observe that:
   - `h-[calc(100px + 50px * 2)]` does not work
   - `h-[calc(100px+50px*2)]` does work

## Solution

Remove whitespace from the contents of arbitrary class names.
