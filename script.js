// landing page animation
const dot1 = document.getElementById('dot01');
const dot2 = document.getElementById('dot02');
const dot3 = document.getElementById('dot03');
const dot4 = document.getElementById('dot04');
const dot5 = document.getElementById('dot05');
const dot6 = document.getElementById('dot06');
const dot7 = document.getElementById('dot07');
const dot8 = document.getElementById('dot08');
const dot9 = document.getElementById('dot09');
const dot10 = document.getElementById('dot10');
const dot11 = document.getElementById('dot11');
const dot12 = document.getElementById('dot12');
const dot13 = document.getElementById('dot13');
const dot14 = document.getElementById('dot14');
const dot15 = document.getElementById('dot15');

let dots = [dot1, dot2, dot3, dot4, dot5, dot6, dot7, dot8, dot9, dot10, dot11, dot12, dot13, dot14, dot15];

for (let dot in dots) {
    let r = Math.round(Math.random()*150) + 50;
    dots[dot].style.width = `${r}px`;
    dots[dot].style.height = `${r}px`;

    let x = Math.round(Math.random()*100);
    dots[dot].style.top = `${x}vh`;
    let y = Math.round(Math.random()*100);
    dots[dot].style.left = `${y}vw`;
}

document.getElementById('dot-div').style.display = 'block';

let animationArgs = new Array(dots.length);
let speed, angle, vw, vh;
let counter = 0;

for (let dot in dots) {
    speed = Math.floor(Math.random()*10)-5;
    angle = Math.floor(Math.random()*360);
    animationArgs[dot] = [dots[dot], Math.floor(Math.cos(angle)*(speed)), Math.floor(Math.sin(angle)*(speed)), (speed), angle];
    if (animationArgs[dot][1] === 0) {animationArgs[dot][1] = -1;}
    if (animationArgs[dot][2] === 0) {animationArgs[dot][2] = 1;}
}

const newArgs = function() {
    for (let dot in dots) {
        animationArgs[dot][1] = animationArgs[dot][1]*-1;
        animationArgs[dot][2] = animationArgs[dot][2]*-1;
    }
};

const idle = function () {
    let transform = setInterval (function () {
        if (counter === 200) {clearInterval(transform);}
        vw = window.innerWidth;
        vh = window.innerHeight;
        for (let dot in animationArgs) {
            animationArgs[dot][0].style.left = `${animationArgs[dot][0].offsetLeft+animationArgs[dot][1]}px`;
            animationArgs[dot][0].style.top = `${animationArgs[dot][0].offsetTop+animationArgs[dot][2]}px`;
        }
        counter++;
    }, 20);
    newArgs();
}
setInterval(idle, 4000);

// SPA setup
// hero to quiz intro
const createButton1 = document.getElementById('create-guide1');
const createButton2 = document.getElementById('create-guide2');
const createButton3 = document.getElementById('create-guide3');

let quizIntro = () => {
    document.getElementById("quiz-intro").style.display = 'block';
    createButton1.style.display = 'none';
    createButton2.style.display = 'none';
    createButton3.style.display = 'none';
    document.getElementById('quiz-intro').scrollIntoView({behavior:'smooth'});
}

createButton1.onclick = quizIntro;
createButton2.onclick = quizIntro;
createButton3.onclick = quizIntro;

// quiz intro to quiz
const quizButton = document.getElementById('take-quiz');

quizButton.onclick = () => {
    document.getElementById("quiz-intro").style.display = 'none';
    document.getElementById("style-guide").style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('quiz-container').scrollIntoView({behavior:'smooth'});
    document.getElementById('quiz-feel').style.display = 'none';
    document.getElementById('quiz-basics').style.display = 'block';
    document.getElementById('quiz-heading').innerHTML = 'Want to Try Again?';
    document.getElementById('quiz-desc').innerHTML = 'Take a few more minutes to tell us about your site again and we’ll create a new and improved design for you.';
    quizButton.innerHTML = 'Retake the Quiz';
}

nextButton1 = document.getElementById('page1-next');
nextButton2 = document.getElementById('page2-next');
nextButton3 = document.getElementById('page3-next');

backButton2 = document.getElementById('page2-back');
backButton3 = document.getElementById('page3-back');
backButton4 = document.getElementById('page4-back');

nextButton1.onclick = () => {
    siteType = document.forms['site_quiz']['site_type'].value;
    siteSubject = document.forms['site_quiz']['site_subject'].value;

    if(siteType === '' || siteSubject === '') {
        if (siteType === '') {
            document.getElementById('site_type_error').style.visibility = 'visible';
        } else {document.getElementById('site_type_error').style.visibility = 'hidden';}
        if (siteSubject === '') {
            document.getElementById('site_subject_error').style.visibility = 'visible';
        } else {document.getElementById('site_subject_error').style.visibility = 'hidden';}
    } else {
        document.getElementById('site_type_error').style.visibility = 'hidden';
        document.getElementById('site_subject_error').style.visibility = 'hidden';
        document.getElementById('quiz-basics').style.display = 'none';
        document.getElementById('quiz-content').style.display = 'block';
    }
}
nextButton2.onclick = () => {
    contentAmount = document.forms['site_quiz']['content_amount'].value;
    contentType = document.forms['site_quiz']['content_type'].value;
    interactivity = document.forms['site_quiz']['interactivity'].value;

    if(contentAmount === '' || contentType === '' || interactivity === '') {
        if (contentAmount === '') {
            document.getElementById('content_amount_error').style.visibility = 'visible';
        } else {document.getElementById('content_amount_error').style.visibility = 'hidden';}
        if (contentType === '') {
            document.getElementById('content_type_error').style.visibility = 'visible';
        } else {document.getElementById('content_type_error').style.visibility = 'hidden';}
        if (interactivity === '') {
            document.getElementById('interactivity_error').style.visibility = 'visible';
        } else {document.getElementById('interactivity_error').style.visibility = 'hidden';}
    } else {
        document.getElementById('content_amount_error').style.visibility = 'hidden';
        document.getElementById('content_type_error').style.visibility = 'hidden';
        document.getElementById('interactivity_error').style.visibility = 'hidden';
        document.getElementById('quiz-content').style.display = 'none';
        document.getElementById('quiz-audience').style.display = 'block';
    }
}
nextButton3.onclick = () => {
    audienceAge = document.forms['site_quiz']['audience_age'].value;
    moodPrimary = document.forms['site_quiz']['mood_primary'].value;
    moodSecondary = document.forms['site_quiz']['mood_secondary'].value;

    if(audienceAge === '' || moodPrimary === '' || moodSecondary === '') {
        if (audienceAge === '') {
            document.getElementById('audience_age_error').style.visibility = 'visible';
        } else {document.getElementById('audience_age_error').style.visibility = 'hidden';}
        if (moodPrimary === '') {
            document.getElementById('mood_primary_error').style.visibility = 'visible';
        } else {document.getElementById('mood_primary_error').style.visibility = 'hidden';}
        if (moodSecondary === '') {
            document.getElementById('mood_secondary_error').style.visibility = 'visible';
        } else {document.getElementById('mood_secondary_error').style.visibility = 'hidden';}
    } else {
        document.getElementById('audience_age_error').style.visibility = 'hidden';
        document.getElementById('mood_primary_error').style.visibility = 'hidden';
        document.getElementById('mood_secondary_error').style.visibility = 'hidden';
        document.getElementById('quiz-audience').style.display = 'none';
    document.getElementById('quiz-feel').style.display = 'block';
    }
}

backButton2.onclick = () => {
    document.getElementById('quiz-content').style.display = 'none';
    document.getElementById('quiz-basics').style.display = 'block';
}
backButton3.onclick = () => {
    document.getElementById('quiz-audience').style.display = 'none';
    document.getElementById('quiz-content').style.display = 'block';
}
backButton4.onclick = () => {
    document.getElementById('quiz-feel').style.display = 'none';
    document.getElementById('quiz-audience').style.display = 'block';
}

// style guide generator
// DOM setup
    // color DOM
const colorBox1 = document.getElementById('color1');
const colorBox2 = document.getElementById('color2');
const colorBox3 = document.getElementById('color3');
const colorBox4 = document.getElementById('color4');
const colorBox5 = document.getElementById('color5');

const hex1 = document.getElementById('hex1');
const hex2 = document.getElementById('hex2');
const hex3 = document.getElementById('hex3');
const hex4 = document.getElementById('hex4');
const hex5 = document.getElementById('hex5');

    // font DOM
const h1 = document.getElementById('h1');
const h2 = document.getElementById('h2');
const h3 = document.getElementById('h3');
const h4 = document.getElementById('h4');
const h5 = document.getElementById('h5');
const h6 = document.getElementById('h6');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');

const h1Desc = document.getElementById('h1Desc');
const h2Desc = document.getElementById('h2Desc');
const h3Desc = document.getElementById('h3Desc');
const h4Desc = document.getElementById('h4Desc');
const h5Desc = document.getElementById('h5Desc');
const h6Desc = document.getElementById('h6Desc');
const p1Desc = document.getElementById('p1Desc');
const p2Desc = document.getElementById('p2Desc');
const p3Desc = document.getElementById('p3Desc');

    // button DOM
const buttonPrimary = document.getElementById('buttonPrimary');
const buttonSecondary = document.getElementById('buttonSecondary');
const buttonTertiary = document.getElementById('buttonTertiary');

const buttonDescPrimary = document.getElementById('buttonDescPrimary');
const buttonDescSecondary = document.getElementById('buttonDescSecondary');
const buttonDescTertiary = document.getElementById('buttonDescTertiary');

    // icon DOM
const iconExample1 = document.getElementById('iconExample1');
const iconExample2 = document.getElementById('iconExample2');
const iconExample3 = document.getElementById('iconExample3');
const iconExample4 = document.getElementById('iconExample4');

const iconDesc1 = document.getElementById('iconDesc1');
const iconDesc2 = document.getElementById('iconDesc2');
const iconDesc3 = document.getElementById('iconDesc3');
const iconDesc4 = document.getElementById('iconDesc4');

// variable setup
    // form variables
let siteType, siteSubject, contentAmount, contentType, interactivity, audienceAge, moodPrimary, moodSecondary, simple, complicated, bold, understated, modern, classic, fun, serious;

    // color variables
let primaryColor, lightMode, darkMode;
let palettePattern = 'monochromatic';
let color1, color2, color3, color4, color5 = [0, 0, 0];

    // font variables
let fontPairing, fontFamily, index, italics, underline;

    // button variables
let borderRadius, buttonFont;

    // icon variables
let iconFilled, iconOpen, iconRound, iconSharp;

// color generator
    // hsl to hex converter
const hslConvert = function (hsl) {
    const h = hsl[0];
    const s = hsl[1];
    const l = hsl[2];
    const c = (1 - Math.abs((2*(l/100))-1)) * (s/100);
    const x = c * (1-Math.abs(((h/60)%2)-1));
    const m = (l/100) - (c/2);

    var r, g, b;

    if (0<=h && h<60) {
        r = c;
        g = x;
        b = 0;
    } else if (60<=h && h<120) {
        r = x;
        g = c;
        b = 0;
    } else if (120<=h && h<180) {
        r = 0;
        g = c;
        b = x;
    } else if (180<=h && h<240) {
        r = 0;
        g = x;
        b = c;
    }  else if (240<=h && h<300) {
        r = x;
        g = 0;
        b = c;
    } else {
        r = c;
        g = 0;
        b = x;
    }

    r = (Math.round((r + m)*255)).toString(16);
    g = (Math.round((g + m)*255)).toString(16);
    b = (Math.round((b + m)*255)).toString(16);

    let hexFinal = "#"+r+g+b;
    return hexFinal.toUpperCase();
}

const colorGen = () => {
    // set color params
    if (siteSubject === 'tech' || siteSubject === 'entertainment') {
        darkMode = true;
        lightMode = false;
    } else if (audienceAge === 'young') {
        darkMode = true;
        lightMode = false;
    } else if (contentAmount === 'content_1' || contentAmount === 'content_2') {
        darkMode = true;
        lightMode = false;
    } else if (contentType === 'content_media') {
        darkMode = true;
        lightMode = false;
    } else {
        darkMode = false;
        lightMode = true;
    }

    // primary color
    if (moodPrimary === 'energetic_primary' || moodPrimary === 'trustworthy_primary' || moodPrimary === 'welcoming_primary') {
        if (moodSecondary === 'energized') {
            primaryColor = 'orange_secondary';
        } else if (moodSecondary === 'cheerful_secondary') {
            primaryColor = 'yellow';
        } else if (moodSecondary === 'calm_secondary' || moodSecondary === 'trustworthy_secondary') {
            primaryColor = 'brown';
        } else if (moodSecondary === 'welcoming_secondary') {
            primaryColor = 'pink';
        } else {primaryColor = 'red';}
    } else if (moodPrimary === 'calm_primary' || moodPrimary === 'cheerful_primary') {
        if (moodSecondary === 'energized_secondary' || moodSecondary === 'cheerful_secondary') {
            primaryColor = 'teal';
        } else if (moodSecondary === 'calm_secondary' || moodSecondary === 'trustworthy_secondary') {
            primaryColor = 'blue';
        } else if (moodSecondary === 'welcoming_secondary') {
            primaryColor = 'green';
        } else {primaryColor = 'blue';}
    } else {
        if (moodSecondary === 'energetic_secondary' || moodPrimary === 'trustworthy_secondary' || moodPrimary === 'welcoming_secondary') {primaryColor = 'red';}
        else {primaryColor = 'purple'}
    }

    // palette pattern
    if (moodPrimary === 'cheerful_primary' || moodPrimary === 'energetic_primary') {
        palettePattern = 'triadic';
    } else if (moodPrimary === 'calm_primary' || moodSecondary === 'calm_secondary') {
        palettePattern = 'analogous';
    } else if (moodSecondary === 'cheerful_secondary' || moodSecondary === 'energetic_secondary') {
        palettePattern = 'triadic';
    } else if (bold) {
        if (simple) {palettePattern = 'complementary';}
        else {palettePattern = 'split'}
    } else {
        if (moodPrimary === 'sophisticated_primary' || moodSecondary === 'sophisticated_secondary') {
            palettePattern = 'monochromatic';
        } else if (fun) {palettePattern = 'split';} 
        else {palettePattern = 'monochromatic'}
    }

    var primary, secondary, tertiary; 
    let satHigh = Math.floor(Math.random()*20)+65;
    let satLow = Math.floor(Math.random()*20)+15;
    let satMed = Math.floor(Math.random()*20)+40; 
    let lightHigh = Math.floor(Math.random()*20)+65;
    let lightLow = Math.floor(Math.random()*20)+15; 
    let lightMed = Math.floor(Math.random()*20)+40;

    if (primaryColor === 'red') {
        primary = Math.floor(Math.random()*20) + 360;
    } else if (primaryColor === 'orange') {
        primary = Math.floor(Math.random()*10) + 20;
    } else if (primaryColor === 'green') {
        primary = Math.floor(Math.random()*50) + 90;
    } else if (primaryColor === 'yellow') {
        primary = Math.floor(Math.random()*20) + 40;
    } else if (primaryColor === 'teal') {
        primary = Math.floor(Math.random()*20) + 150;
    } else if (primaryColor === 'blue') {
        primary = Math.floor(Math.random()*70) + 180;
    } else if (primaryColor === 'purple') {
        primary = Math.floor(Math.random()*30) + 270;
    } else if (primaryColor === 'pink') {
        primary = Math.floor(Math.random()*20) + 310;
    } else {
        primary = Math.floor(Math.random()*360);
    }

    // calculate palettes
    if(palettePattern === 'monochromatic') {

        if(lightMode) {
            color1 = hslConvert([primary, Math.floor(Math.random()*10), lightHigh]);
            color2 = hslConvert([primary, satMed, lightLow]);
            color3 = hslConvert([primary, satHigh, lightMed]);
            color4 = hslConvert([primary, satLow, lightMed]);
            color5 = hslConvert([primary, satLow, lightHigh]);
        }

        if(darkMode) {
            color1 = hslConvert([primary, Math.floor(Math.random()*10), lightLow]);
            color2 = hslConvert([primary, satLow, lightHigh]);
            color3 = hslConvert([primary, satMed, lightHigh]);
            color4 = hslConvert([primary, satMed, lightMed]);
            color5 = hslConvert([primary, satHigh, lightMed]);
        }
    } 
    
    else if(palettePattern === 'complementary') {
        secondary = primary+180
        if(lightMode) {
            color1 = hslConvert([primary, satLow, lightHigh]);
            color2 = hslConvert([primary, satMed, lightLow]);
            color3 = hslConvert([secondary, satMed, lightHigh]);
            color4 = hslConvert([secondary, satLow, lightMed]);
            color5 = hslConvert([primary, satLow, lightMed]);
        }

        if(darkMode) {
            color1 = hslConvert([primary, satLow, lightLow]);
            color2 = hslConvert([primary, satHigh, lightHigh]);
            color3 = hslConvert([secondary, satHigh, lightHigh]);
            color4 = hslConvert([secondary, satLow, lightMed]);
            color5 = hslConvert([primary, satLow, lightMed]);
        }
    } 
    
    else if(palettePattern === 'triadic') {
        secondary = (primary+120);
        tertiary = (secondary+120);

        if(lightMode) {
            color1 = hslConvert([primary, satLow, lightHigh]);
            color2 = hslConvert([primary, satMed, lightLow]);
            color3 = hslConvert([secondary, satMed, lightMed]);
            color4 = hslConvert([tertiary, satLow, lightLow]);
            color5 = hslConvert([tertiary, satLow, lightMed]);
        }

        if(darkMode) {
            color1 = hslConvert([primary, satLow, lightLow]);
            color2 = hslConvert([primary, satHigh, lightHigh]);
            color3 = hslConvert([secondary, satHigh, lightHigh]);
            color4 = hslConvert([tertiary, satLow, lightMed]);
            color5 = hslConvert([tertiary, satLow, lightHigh]);
        }
    } 
    
    else if(palettePattern === 'analogous') {
        secondary = (primary+30);
        tertiary = (primary-30);

        if(lightMode) {
            color1 = hslConvert([primary, Math.floor(Math.random()*10), lightHigh]);
            color2 = hslConvert([primary, satMed, lightLow]);
            color3 = hslConvert([secondary, satHigh, lightMed]);
            color4 = hslConvert([tertiary, satLow, lightLow]);
            color5 = hslConvert([tertiary, satLow, lightMed]);
        }

        if(darkMode) {
            color1 = hslConvert([primary, Math.floor(Math.random()*10), lightLow]);
            color2 = hslConvert([primary, satMed, lightHigh]);
            color3 = hslConvert([secondary, satHigh, lightHigh]);
            color4 = hslConvert([tertiary, satLow, lightMed]);
            color5 = hslConvert([tertiary, satLow, lightHigh]);
        }
    } 
    
    else if(palettePattern === 'split') {
        secondary = (primary+150);
        tertiary = (primary-150);

        if(lightMode) {
            color1 = hslConvert([primary, satLow, lightHigh]);
            color2 = hslConvert([primary, satMed, lightLow]);
            color3 = hslConvert([secondary, satHigh, lightMed]);
            color4 = hslConvert([tertiary, satMed, lightMed]);
            color5 = hslConvert([tertiary, satMed, lightHigh]);
        }

        if(darkMode) {
            color1 = hslConvert([primary, satMed, lightLow]);
            color2 = hslConvert([primary, satHigh, lightHigh]);
            color3 = hslConvert([secondary, satHigh, lightHigh]);
            color4 = hslConvert([tertiary, satLow, lightMed]);
            color5 = hslConvert([tertiary, satLow, lightHigh]);
        }
    } 
    
    else {
        color1 = `#fff`;
        document.getElementById('hex1').innerHTML = '#FFFFFF';
        color2 = `#fff`;
        document.getElementById('hex2').innerHTML = '#FFFFFF';
        color3 = `#fff`;
        document.getElementById('hex3').innerHTML = '#FFFFFF';
        color4 = `#fff`;
        document.getElementById('hex4').innerHTML = '#FFFFFF';
        color5 = `#fff`;
        document.getElementById('hex5').innerHTML = '#FFFFFF';
    }

    //display results
    colorBox1.style.backgroundColor = color1;
    colorBox2.style.backgroundColor = color2;
    colorBox3.style.backgroundColor = color3;
    colorBox4.style.backgroundColor = color4;
    colorBox5.style.backgroundColor = color5;

    document.getElementById('hex1').innerHTML = color1;
    document.getElementById('hex2').innerHTML = color2;
    document.getElementById('hex3').innerHTML = color3;
    document.getElementById('hex4').innerHTML = color4;
    document.getElementById('hex5').innerHTML = color5;
}

// font generator
const fontGen = () => {
    // set font params
    if (bold) {
        if (complicated) {
            fontPairing = 'serif_sans';
        } else {fontPairing = 'sans_contrast';}
    } else {
        if (complicated) {
            fontPairing = 'sans_harmony';
        } else {fontPairing = 'single_family';}
    }

    if (siteType === 'portfolio' || siteType === 'blog' || siteType === 'personal') {
        italics = true;
        underline = false;
    } else if (siteType === 'shop' || siteType === 'info' || siteType === 'school') {
        italics = false;
        underline = true;
    } else {
        if (Math.round(Math.random()) === 0) {
            italics = true;
            underline = false;
        } else {
            italics = false;
            underline = true;
        }
    }

    // select font
    const serif_sans = [['Forum', 'Avenir Light'], ['Cormorant Garamond Semi Bold', 'Avenir Light'], ['Futura', 'Cormorant Garamond Light'], ['Caudex', 'Avenir Light'], ['Corben', 'Avenir Light'], ['Fraunces', 'Lato Light']];
    const sans_harmony = [['Space Grotesk', 'Poppins Extra Light'], ['Avenir Light', 'Questrial'], ['Syne', 'Questrial']];
    const sans_contrast = [['Fahkwang', 'Helvetica Neue'], ['Oswald Medium', 'Futura'], ['Roboto Bold', 'Montserrat']];
    const single_font = [['Avenir', 'Avenir'], ['Helvetica Bold', 'Helvetica'], ['Quicksand', 'Quicksand']];

    if (fontPairing === 'serif_sans') {
        index = Math.floor(Math.random()*6);
        fontFamily = serif_sans[index];
    } else if (fontPairing === 'sans_contrast') {
        index = Math.floor(Math.random()*3);
        fontFamily = sans_contrast[index];
    } else if (fontPairing === 'single_family') {
        index = Math.floor(Math.random()*3);
        fontFamily = single_font[index];
    } else {
        index = Math.floor(Math.random()*3);
        fontFamily = sans_harmony[index];
    }

    // displayFont function
    h1.style.fontFamily = fontFamily[0];
    h1.style.fontSize = '64px';
    h1.style.fontWeight = 'bold';
    h2.style.fontFamily = fontFamily[0];
    h2.style.fontSize = '48px';
    h2.style.fontWeight = 'bold';
    h3.style.fontFamily = fontFamily[0];
    h3.style.fontSize = '48px';
    h4.style.fontFamily = fontFamily[0];
    h4.style.fontSize = '36px';
    h4.style.fontWeight = 'bold';
    h5.style.fontFamily = fontFamily[0];
    h5.style.fontSize = '36px';
    h5.style.fontWeight = 'bold';
    h6.style.fontFamily = fontFamily[0];
    h6.style.fontSize = '36px';

    p1.style.fontFamily = fontFamily[1];
    p1.style.fontSize = '24px';
    p2.style.fontFamily = fontFamily[1];
    p2.style.fontSize = '18px';
    p3.style.fontFamily = fontFamily[1];
    p3.style.fontSize = '18px';

    h1Desc.innerHTML = `64px ${fontFamily[0]}, bold, all caps`;
    h2Desc.innerHTML = `48px ${fontFamily[0]}, bold`;
    h3Desc.innerHTML = `36px ${fontFamily[0]}, bold`;
    h5Desc.innerHTML = `36px ${fontFamily[0]}, bold, all caps`;

    p1Desc.innerHTML = `24px ${fontFamily[1]}`;
    p2Desc.innerHTML = `18px ${fontFamily[1]}`;

    if (bold && italics) {
        p3.style.fontStyle = 'italic';
        h4.style.fontStyle = 'italic';

        p3Desc.innerHTML = `18px ${fontFamily[1]}, italic`;
        h4Desc.innerHTML = `48px ${fontFamily[0]}, italic`;
        h6Desc.innerHTML = `36px ${fontFamily[0]}`;
    } else if (bold && underline) {
        p3.style.textDecoration = 'underline';
        h4.style.textDecoration = 'underline';

        p3Desc.innerHTML = `18px ${fontFamily[1]}, underlined`;
        h4Desc.innerHTML = `48px ${fontFamily[0]}, underlined`;
        h6Desc.innerHTML = `36px ${fontFamily[0]}`;
    } else if (understated && italics) {
        p3.style.fontStyle = 'italic';
        h6.style.fontStyle = 'italic';

        p3Desc.innerHTML = `18px ${fontFamily[1]}, italic`;
        h4Desc.innerHTML = `48px ${fontFamily[0]}`;
        h6Desc.innerHTML = `36px ${fontFamily[0]}, italic`;
    } else {
        p3.style.textDecoration = 'underline';
        h6.style.textDecoration = 'underline';

        p3Desc.innerHTML = `18px ${fontFamily[1]}, underlined`;
        h4Desc.innerHTML = `48px ${fontFamily[0]}`;
        h6Desc.innerHTML = `36px ${fontFamily[0]}, underlined`;
    }
}

// button generator
const buttonGen = () => {
    // set button params
    if (bold) {buttonFont = fontFamily[0];} 
    else {buttonFont = fontFamily[1];}

    if (interactivity === 'lot_buttons' || classic) {
        borderRadius = '0px';
    } else if (serious) {
        borderRadius = '10px';
    } else {borderRadius = '30px';}

    // primary button
    buttonPrimary.style.borderRadius = borderRadius;
    buttonPrimary.style.backgroundColor = color3;
    buttonPrimary.style.border = 'none';
    buttonPrimary.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)';
    buttonPrimary.style.fontFamily = buttonFont;
    buttonDescPrimary.innerHTML = `Fill ${color3}, border-radius ${borderRadius}, drop shadow, 36px ${buttonFont} #FFFFFF `;

    // secondary button
    buttonSecondary.style.borderRadius = borderRadius;
    buttonSecondary.style.color = color3;
    buttonSecondary.style.border = `1px solid ${color3}`;
    buttonSecondary.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)';
    buttonSecondary.style.fontFamily = buttonFont;
    buttonDescSecondary.innerHTML = `No fill, 1px ${color3} border, border-radius ${borderRadius}, drop shadow, 36px ${buttonFont} ${color3}`

    // tertiary button
    buttonTertiary.style.color = color3;
    buttonDescTertiary.innerHTML = `No fill or border, drop shadow, 36px ${buttonFont} ${color3}, underlined`
    buttonTertiary.style.fontFamily = buttonFont;
}

// icon generator
/*const iconGen = () => {
    // set icon params
    if (bold) {
        iconFilled = true;
        iconOpen = false;
    } else {
        iconFilled = false;
        iconOpen = true;
    }

    if (borderRadius === '0px') {
        iconSharp = true;
        iconRound = false;
    } else {
        iconSharp = false;
        iconRound = true;
    }

    // displayIcon function
    if (iconFilled && iconSharp) {
        iconExample1.src = "./icons/filled_basket_icon.svg";
        iconExample2.src = "./icons/cart-plus-fill.svg";
        iconExample3.src = "./icons/house-door-fill.svg";
        iconExample4.src = "./icons/funnel-fill.svg";

        iconExample1.alt = "Filled-in shopping basket icon";
        iconExample2.alt = "Filled-in add to shopping cart icon";
        iconExample3.alt = "Filled-in house icon with open door"
        iconExample4.alt = "Filled-in funnel icon";

        iconDesc1.innerHTML = "Filled-in"
        iconDesc2.innerHTML = "Sharp corners"
        iconDesc3.innerHTML = "Minimalist";
        iconDesc4.innerHTML = "Neutral colors";
    } else if (iconFilled && iconRound) {
        iconExample1.src = "./icons/archive-fill.svg";
        iconExample2.src = "./icons/chat-fill.svg";
        iconExample3.src = "./icons/clipboard-fill.svg";
        iconExample4.src = "./icons/arrow-down-circle-fill.svg";

        iconExample1.alt = "Filled-in filebox icon";
        iconExample2.alt = "Filled-in chat bubble icon";
        iconExample3.alt = "Filled-in clipboard icon";
        iconExample4.alt = "Filled-in circle with a downwards pointing arrow";

        iconDesc1.innerHTML = "Filled-in"
        iconDesc2.innerHTML = "Round corners"
        iconDesc3.innerHTML = "Minimalist";
        iconDesc4.innerHTML = "Neutral color";

    } else if (iconOpen && iconSharp) {
        iconExample1.src = "./icons/basket3.svg";
        iconExample2.src = "./icons/cart2.svg";
        iconExample3.src = "./icons/folder2.svg";
        iconExample4.src = "./icons/funnel.svg";

        iconExample1.alt = "Shopping basket icon";
        iconExample2.alt = "Add to shopping cart icon";
        iconExample3.alt = "House icon with open door"
        iconExample4.alt = "Funnel icon";

        iconDesc1.innerHTML = "Outline only"
        iconDesc2.innerHTML = "Sharp corners"
        iconDesc3.innerHTML = "Minimalist";
        iconDesc4.innerHTML = "Neutral color";
    } else {
        iconExample1.src = "./icons/archive.svg";
        iconExample2.src = "./icons/chat.svg";
        iconExample3.src = "./icons/clipboard.svg";
        iconExample4.src = "./icons/arrow-down-circle.svg";

        iconExample1.alt = "Filebox icon";
        iconExample2.alt = "Chat bubble icon";
        iconExample3.alt = "Clipboard icon";
        iconExample4.alt = "Open circle with a downwards pointing arrow";

        iconDesc1.innerHTML = "Outline only"
        iconDesc2.innerHTML = "Round corners"
        iconDesc3.innerHTML = "Minimalist";
        iconDesc4.innerHTML = "Neutral color";
    }
}*/

// display results
const display = () => {
    // final form page validation
    let simpleComplicated = document.forms['site_quiz']['simple_complicated'].value;
    let boldUnderstated = document.forms['site_quiz']['bold_understated'].value;
    let modernClassic = document.forms['site_quiz']['modern_classic'].value;
    let funSerious = document.forms['site_quiz']['fun_serious'].value;

    if(simpleComplicated === '' || boldUnderstated === '' || modernClassic === '' || funSerious === '') {
        if (simpleComplicated === '') {
            document.getElementById('simple_complicated_error').style.visibility = 'visible';
        } else {document.getElementById('simple_complicated_error').style.visibility = 'hidden';}
        if (boldUnderstated === '') {
            document.getElementById('bold_understated_error').style.visibility = 'visible';
        } else {document.getElementById('bold_understated_error').style.visibility = 'hidden';}
        if (modernClassic === '') {
            document.getElementById('modern_classic_error').style.visibility = 'visible';
        } else {document.getElementById('modern_classic_error').style.visibility = 'hidden';}
        if (funSerious === '') {
            document.getElementById('fun_serious_error').style.visibility = 'visible';
        } else {document.getElementById('fun_serious_error').style.visibility = 'hidden';}

        
    } else {
        document.getElementById('simple_complicated_error').style.visibility = 'hidden';
        document.getElementById('bold_understated_error').style.visibility = 'hidden';
        document.getElementById('modern_classic_error').style.visibility = 'hidden';
        document.getElementById('fun_serious_error').style.visibility = 'hidden';

        if(document.forms['site_quiz']['simple_complicated'].value === "complicated") {
            complicated = true;
            simple = false;
        } else {
            complicated = false;
            simple = true;
        }
    
        if(document.forms['site_quiz']['bold_understated'].value === "bold") {
            bold = true;
            understated = false;
        } else {
            bold = false;
            understated = true;
        }
    
        if(document.forms['site_quiz']['modern_classic'].value === "classic") {
            classic = true;
            modern = false;
        } else {
            classic = false;
            modern = true;
        }
    
        if(document.forms['site_quiz']['fun_serious'].value === "fun") {
            fun = true;
            serious = false;
        } else {
            fun = false;
            serious = true;
        }
    
        // display results
        colorGen();
        fontGen();
        buttonGen();
        //iconGen();
        document.getElementById("style-guide").style.display = 'block';
        document.getElementById("quiz-intro").style.display = 'block';
        document.getElementById('style-guide-heading').scrollTop = document.getElementById('style-guide-heading').offsetTop;
        document.getElementById('quiz-container').style.display='none';
    }
}

const newPalette = document.getElementById('new-palette');
newPalette.onclick = () => {
    colorGen();
};
