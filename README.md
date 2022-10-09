https://commons.wikimedia.org/wiki/File:React-icon.svg

[dev gifs](https://giphy.com/devrock/)
[amazing abstract gifs](https://giphy.com/xponentialdesign)

# next image
Feels a bit fiddly but I've got it down now. The image itself is a black box a bit to me, it doesn't take some styles and does others. I understand it's because it's doing some trickery behind the scenes to optimize and whatnot, but the solution to get responsive images is to wrap it in an element and apply styling to that

```js
<div className={styles.nextImageContainer}>
    <Image src={imageURL/path} objectFit='contain' />
<div>
```

using object fit contain makes it fill the container, and then if any border radius is needed you can set overflow to hidden on the container.