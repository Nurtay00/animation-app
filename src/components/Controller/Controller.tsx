import {ControllerWrp} from './Controller.style'
import RangeSlider from "./components/RangeSlider/RangeSlider";
import {initialData} from "../../page/initialData";

const sett: any = {
    x: {label: 'X', min: -100, max: 100, isMiddle: true, step: 1},
    y: {label: 'Y', min: -100, max: 100, isMiddle: true, step: 1},
    opacity: {label: 'Opacity', min: 0, max: 1, step: 0.1},
    scale: {label: 'Scale', min: -1, max: 1, isMiddle: true, step: 0.1},
    blur: {label: 'Blur', min: -10, max: 10, isMiddle: true, step: 1},
    speed: {label: 'Speed', min: 0, max: 5, step: 0.1},
    delay: {label: 'Delay', min: 0, max: 5, step: 0.1},

}
const Controller = ({setShape, shape, selectedId}: any) => {
    if (!selectedId) {
        return <ControllerWrp>
            click component
        </ControllerWrp>
    }

    // const handlerVal = (e: any, key: any, value: any) => {
    //     if (key === 'x' || key === 'y' || key === 'scale') {
    //         value[key]
    //     } else {
    //         return value
    //     }
    //
    // }

    const fun = () => {
        const arr = []
        for (let [key, value] of Object.entries(shape.animation)) {
            let option = sett[key]
            arr.push(<RangeSlider {...option} val={value}
                                  setVal={(e: any) => {
                                      let temp = {...shape}
                                      temp.animation[key] = e
                                      setShape(temp)
                                  }}/>)
        }
        return arr;
    }

    return <ControllerWrp>
        {fun().map(el => el)}
    </ControllerWrp>
}
export default Controller