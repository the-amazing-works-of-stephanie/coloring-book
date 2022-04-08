import React, {useState} from "react";

const CreativeResponse = () => {
    let sp = " ";
    return (
        <div className="CreativeResponse">
            <div className="header-container">
                <div className="Shire-header">Creative Response</div>
            </div>

            <div className="subheader2">
                This project was inspired by the idea of symbols and the structure of reality in the <i>Lord of the
                Rings</i> series. I decided to take some scenes from the series and turn them into black-and-white
                pictures, then I turned them into a coloring book so the user can impart their own design to the scene.
                <br/><br/>
                This is reminiscent of symbolism in books, where the reader interprets the meaning behind motifs and
                themes according to their own ideas and beliefs. With this application, the user can select a picture
                and decide how to interpret the colors. In the books, Gollum is kind of grayish with pale eyes. In his
                coloring book page, the user can decide to make him have hot pink skin and bright blue eyes if they wish
                to. Thus, Gollum's imagery changes from pallid to pretty.
                <br/><br/>
                If you are curious about the creation process of this application, I'll explain what I did! First, to
                preface: I cannot draw very well, so I took jpg images from the internet. I'm also a beginner with the
                Javascript language, so I <a href={'https://uxdesign.cc/5-steps-to-create-a-simple-digital-coloring-book-in-react-3d4f5b2af822'}>
                    found a tutorial on the internet</a> to help get me started.
                <br/><br/>
                The images from the internet were in JPG format, and in order for the tutorial to work, I needed them in
                Scalable Vector Graphics (SVG) format. After several days of research, the purchase of a cheap drawing pad,
                and several failed attempts to draw something myself, I finally found a tutorial to convert the images
                using a free program called Inkscape. It took several attempts but after a few days, I managed to
                create my first layered SVG image, which was a simple photo of Gollum. It took around two hours to finish
                converting the picture, put it into the program, and test it.
                <br/><br/>
                An SVG is essentially code that contains the line information for every single stroke in a picture.
                A layered SVG groups line information into sections that contain attributes such as fill. I manipulated
                these sections using a language called JavaScript: when a user clicks on one of the colors and then clicks
                on a section of the picture, the 'fill' attribute of the picture changes to the selected color.
                <br/><br/>
                In the future, I plan to make more pictures of an increasingly complicated photos. Check back occasionally
                if you're interested in coloring new scenes!
            </div>
        </div>
    )
}

export default CreativeResponse;