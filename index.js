const wp = require('wallpaper')
const fs = require('fs')
const imageDownload = require('image-download')
const imageType = require('image-type')
const getMeme = require('get-meme-urls')

getMeme('abstract').then(res => {
    let rnd = Math.floor(Math.random() * res.length)
    console.log(Math.floor(rnd))

    imageDownload(res[rnd]).then(buffer => {
    const type = imageType(buffer);
    fs.writeFile(__dirname+'/slika.' + type.ext, buffer, (err) => console.log(err ? err : 'done!'));
    wp.set(`${__dirname}/slika.jpg`).then(() => {
        console.log("DONE")
    }).catch(err => {
        console.log(err)
    });
});
})
