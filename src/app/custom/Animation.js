import config from '../../config'
import {gsap, MotionPathPlugin} from 'gsap/all'


let click = 1;

export default class Animation {
    constructor() {
        this._rocketElement = document.getElementsByClassName("rocket");
        this._backgroundElement = document.querySelector(".background")
        this._svgParth = config.svgPath
        this._rocketTween = null;
    }

    start() {
        gsap.registerPlugin(MotionPathPlugin)

        this._rocketTween = gsap.to(this._rocketElement, {
            repeat: -1,
            duration: 4,
            motionPath: {
                path: this._svgParth,
                autoRotate: true
            }
        });

        console.log(click)

        this._backgroundElement.addEventListener("click", () => {
            if (click % 2 == 0) {

                this._rocketTween = gsap.to(this._rocketElement, {
                    duration: 4,
                    repeat: -1,
                    motionPath: {
                        path: this._svgParth,
                        autoRotate: true
                    }
                })
            } else {
                this._rocketTween.pause()
                this._rocketTween = null;
            }
            click++
        })

    }
}