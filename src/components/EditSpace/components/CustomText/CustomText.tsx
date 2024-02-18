import {Text, Transformer} from "react-konva";
import React, {useEffect, useRef} from "react";
import Konva from "konva";

const CustomText = ({onChange, shapeProps, isSelected, onSelect}: any) => {
    const shapeRef = useRef<any>(null);
    const trRef = useRef<any>(null);


    React.useEffect(() => {
        if (isSelected) {
            if (!trRef.current || !trRef.current) return
            trRef.current.nodes([shapeRef.current]);
            trRef.current.getLayer().batchDraw();
        }
    }, [isSelected]);

    return <>
        <Text
            onClick={onSelect}
            onTap={onSelect}
            x={shapeProps.animation.x}
            y={shapeProps.animation.y}
           {...shapeProps}
            keepRatio={true}
            // fontSize={shapeProps.fontSize}
            wrap="char"
            align="center"
            ref={shapeRef}
            filters={[Konva.Filters.Blur]}
            blurRadius={1000}
            opacity={shapeProps.animation.opacity}
            Transformer="keepRatio"
            onDragEnd={(e) => {
                const temp = {...shapeProps}
                temp.animation.x = e.target.x()
                temp.animation.y = e.target.y()
                onChange(temp);
            }}
            draggable
            onTransformEnd={(e) => {
                const node = shapeRef.current;
                const scaleX = node.scaleX();
                const scaleY = node.scaleY();
                node.scaleX(1);
                node.scaleY(1);
                const temp = {
                    ...shapeProps, width: Math.max(5, node.width() * scaleX),
                    height: Math.max(node.height() * scaleY),
                }

                temp.animation.x = node.x()
                temp.animation.y = node.y()
                onChange({
                    ...temp
                });
            }}
        />
        {isSelected && (
            <Transformer
                ref={trRef}
                flipEnabled={false}
                boundBoxFunc={(oldBox, newBox) => {
                    if (Math.abs(newBox.width) < 5 || Math.abs(newBox.height) < 5) {
                        return oldBox;
                    }
                    return newBox;
                }}
            />
        )}
    </>
}
export default CustomText