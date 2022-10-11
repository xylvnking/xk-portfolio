https://commons.wikimedia.org/wiki/File:React-icon.svg

[dev gifs](https://giphy.com/devrock/)
[amazing abstract gifs](https://giphy.com/xponentialdesign)

# next image
Feels a bit fiddly but I've got it down now. The image itself is a black box a bit to me, it doesn't take some styles and does others. I understand it's because it's doing some trickery behind the scenes to optimize and whatnot, but the solution to get responsive images is to wrap it in an element and apply styling to that

```js
<div className={styles.nextImageContainer}>
    <Image src={imageURL/path} objectFit='contain' height={200} />
<div>
```

using object fit contain makes it fill the container, and then if any border radius is needed you can set overflow to hidden on the container.

setting the height is a bit weird too. it's not pixels, and if I set the with of the wrapper to something specific like 50px, the height parameter then acts as a scale almost.

the firebase logo is always too tallso I have to shrink it, and i did that in this project using a height of 200, where 300 is very close to the default. I don't need to deep dive it right now but keep that in mind especially if you have trouble. set the width on the container, then height directly on the image style.


[next js image props](https://refine.dev/blog/using-next-image/)
[convert mov to gif](https://www.adobe.com/express/feature/video/convert/mov-to-gif)