---
  title: Markdown Cheatsheet
---

[Blog](/blog/ "Blog") / February 27, 2019

# Markdown Cheatsheet

While putting together this portfolio, which uses a combination of Markdown
and Vue, I thought it would be useful to create a cheatsheet of sorts to 
help me remember the basic syntax. Below is the result of that work:

## Headers
```md
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
```

# Heading 1
## Heading 2
### Heading 3
#### Heading 4


## Text
```md
paragraph
*italic text*
**bold text**
~~strike through~~
```
paragraph\
*italic text*\
**bold text**\
~~strike through~~

## Lists
```md
1. Ordered
2. List
3. Item

- Unordered
- List
- Item
```
1. Ordered
2. List
3. Item
<br>
- Unordered
- List
- Item
  - Subitem


## Links
```md
[Normal Link](/about/)\
[Normal Link with Title](/about/ "About Me")
```
[Normal Link](/about/)\
[Normal Link with Title](/about/ "About Me")

## Images
```md
![Headshot of Nathan Magyar](https://pbs.twimg.com/profile_images/833060713287540736/9XL0Hnn-.jpg "Headshot of Nathan Magyar")
```
![Headshot of Nathan Magyar](https://pbs.twimg.com/profile_images/833060713287540736/9XL0Hnn-.jpg "Headshot of Nathan Magyar")

## Code
This is `inline code`.
You can also write language-specific blocks:
```html
  <p>This is an html code block.</p>
```
```css
  margin: 1rem;
```
```js{2}
  const increment = (n) => n++
  const highlighted = true;
```

## Tables
The first column is left-aligned, the second is centered, and the third is right-aligned. Use colons to set alignment. Column headers must have at least three dashes below them.
```md
| First Name | Last Name  | Age  |
| ---------- | :--------: | ---: |
| Nathan     | Magyar     | 29   |
| Emily      | Magyar     | 26   |
| Carl       | Haynes     | 29   |
```
| First Name | Last Name  | Age  |
| ---------- | :--------: | ---: |
| Nathan     | Magyar     | 29   |
| Emily      | Magyar     | 26   |
| Carl       | Haynes     | 29   |

## Block Quotes
```md
> Good for calling out text.
```
> Good for calling out text.

## Horizontal Rule
```md
---
```
---

## YouTube Video
```md
<a href="https://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE
" target="_blank"><img src="https://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg"
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>
```
Or in pure markdown, like so:
```md
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](https://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
```
[![#HereToLearn Promo Video](https://img.youtube.com/vi/j8prdhHDB4I/0.jpg)](https://www.youtube.com/watch?v=j8prdhHDB4I)
