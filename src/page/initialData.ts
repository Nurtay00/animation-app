import img from '../assets/img.png'
export const initialData = {
    button: {
        width: 146,
        height: 51,
        fill: '#3E87F8',
        id: 'rect2',
        fontWeight: 800,
        text: 'Button',
        fontSize: 43,
        animation: {
            x: 154,
            y: 367,
            opacity: 1,
            scale: 0,
            blur: 0,
            speed: 0,
            delay: 0
        }
    },
    text: {
        width: 370,
        height: 100,
        fill: 'black',
        id: 'text1',
        text: 'Animation Settings',
        fontSize: 43,
        fontWeight: 800,
        animation: {
            x: 70,
            y: 91,
            opacity: 1,
            scale: 0,
            blur: 0,
            speed: 0,
            delay: 0
        }
    },
    subText: {
        width: 374,
        height: 176,
        fill: 'black',
        id: 'text2',
        text: 'The user should have the option to select any element on the page and set up its animation using the controls in the right panel. A dotted line will show the element\'s position and state before the animation begins, giving the user a clear idea of how the animation will appear. The preview button on the top panel will open the result in a new tab.\n',
        fontSize: 15,
        fontWeight: 500,
        animation: {
            x: 70,
            y: 163,
            opacity: 1,
            scale: 0,
            blur: 0,
            speed: 0,
            delay: 0
        }
    },
    img: {
        width: 300,
        height: 300,
        fill: 'black',
        id: 'img',
        img: img,
        text:'',
        fontSize: 15,
        fontWeight: 800,
        animation: {
            x: 500,
            y: 73,
            opacity: 1,
            scale: 0,
            blur: 0,
            speed: 0,
            delay: 0
        }

    }

}