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

but then I wanted to have this for another section, so I couldn't use the same position fixed technique.

I instead had to do a bit of trickery

```scss
#background {
    // used position sticky so that the background dissappears when the section scrolls away
    position: sticky;

    // this places the background at the bottom of the container, which is where the section I wanted it was
    top: 100%;



    max-width: 1500px;

    // had to place it above the other fixed background (which could also probably just use this method and this wouldn't be needed but not doing this also lets me reuse that background later)
    z-index: 1;

    //remove whitespace
    margin-bottom: -10px;
    margin: auto;

    //remove mobile
    @media(max-width: 700px) {
        display: none;
    }
}
```

then the really hacky method comes from this:

```scss
//container which I wanted the background for
@media(min-width: 700px) {

    // this negative and responsive margin top was needed because since the background image 
    // was just set to sticky, it still showed up in the document flow
    // the negative margin pulls up the section between the image and the container its meant for
    // so that the original image in the document flow is covered up by something of a higher z-index
    // the % makes it responsive, and 60% was just trial and error 
    // by making sure that at no breakpoint the original image would appear
    margin-top: -60%;
}
```

I don't really know if there was an easier way. The site performs way better now, **and** the background images looks great. 

The logos desk image background went from 2mb to 70kb, and the testimonials black white gold one went from 9mb to 900kb. The testimonials one is full screen so I'm comfortable with this resolution. I'm assuming I can cache this image somewhere and use a loader, but I'm not diving into those docs right now because it's 4am and i've been working since 9am.

# css box shadow

using insets to create more depth from the elements which are meant to look on top can be cool. the playlists section had an inset which mostly shows up on the bottom



# to do

maybe add something to the right side of about section for larger screens, looks a little funny

also render a version of the desk which better fits the dimensions required. right now the breakpoint is 1500 when it should be 2000 to match the rest of th website

probably optimize the playlists background or use something different, it's a portrait photo being used in landscape dimensions and doesn't need to be parralax either

also make sure the top section hack works on larger screen sizes, some funny business looks like. might have to do with max width and media query - look at how other sites resize like reddit and youtube. maybe the giant title is causing issues? i want it so that basically when i switch screens it looks the same, which is what happens with those other sites. 

good job today.