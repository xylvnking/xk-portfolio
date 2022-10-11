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
[centering a position fixed element](https://stackoverflow.com/a/2006008/19101255)


# fixed and sticky backgrounds to utilize nextjs image optimization

I got kind of goofy about this.

I realized my image backgrounds looked amazing, but wouldn't be optimized since they were being loaded in the  scss and not by ?react? the way normal next images are when using the <Image /> tag.

I ran a test and nextjs image optimization was totally worth the trouble - a 10mb photo was down to 900kb with very little noticeable difference in quality, especially when they aren't the focus.

It was easy enough to do for one section - throw the background into an <Image /> tag anywhere in the component like so:

```js
<div id={styles["background"]}>
    <Image src={importedImage} objectFit='contain'  />
</div>
```

then within the scss

```scss
#background {
    position: fixed;
    top: 0px;
    z-index: 0;

    // mostly just for this site, and centering
    max-width: 2000px;
    left: 0;
    right: 0; 
    margin-left: auto; 
    margin-right: auto;

    // don't bother with background image for mobile - since it's where poor connections are more likely
    @media(max-width: 700px) {
        display: none;
    }
}
```