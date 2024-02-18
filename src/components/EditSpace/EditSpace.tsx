import {Stage, Layer} from 'react-konva';
import CustomButton from "./components/CustomButton/CustomButton";
import CustomImg from "./components/CustomImg/CustomImg";
import CustomText from "./components/CustomText/CustomText";

const EditSpace = ({
                       checkDeselect,
                       selectedId,
                       selectShape,
                       data, setData
                   }: any) => {


    return (
        <Stage
            width={874}
            height={498}
            onMouseDown={checkDeselect}
            onTouchStart={checkDeselect}
            className={'editSpace-wrp'}
        >
            <Layer>
                <CustomButton shapeProps={data.button}
                              isSelected={data.button.id === selectedId?.id}
                              onSelect={() => {
                                  selectShape(data.button);
                              }}
                              onChange={(newAttrs: any) => {
                                  setData({...data, button: newAttrs});
                              }}/>

                <CustomImg shapeProps={data.img}
                           isSelected={data.img.id === selectedId?.id}
                           onSelect={() => {
                               selectShape(data.img);
                           }}
                           onChange={(newAttrs: any) => {
                               setData({...data, img: newAttrs});
                           }}/>
                <CustomText shapeProps={data.text}
                            isSelected={data.text.id === selectedId?.id}
                            onSelect={() => {
                                selectShape(data.text);
                            }}
                            onChange={(newAttrs: any) => {
                                setData({...data, text: newAttrs});
                            }}/>
                <CustomText shapeProps={data.subText}
                            isSelected={data.subText.id === selectedId?.id}
                            onSelect={() => {
                                selectShape(data.subText);
                            }}
                            onChange={(newAttrs: any) => {
                                setData({...data, subText: newAttrs});
                            }}/>
            </Layer>
        </Stage>
    );
};
export default EditSpace
