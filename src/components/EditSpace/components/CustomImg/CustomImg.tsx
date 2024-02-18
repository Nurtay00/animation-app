import React, {useEffect, useRef} from 'react';
import {Image, Transformer} from 'react-konva';
import useImage from 'use-image';
import Konva from "konva";
import img from '../../../../assets/img.png'

const url = img;


const CustomImg = ({isSelected, onSelect, shapeProps}: any) => {
    const [image] = useImage(url);
    const shapeRef = useRef<any>(null);
    const trRef = useRef<any>(null);

    React.useEffect(() => {
        if (isSelected) {
            if (!trRef.current || !trRef.current) return
            trRef.current.nodes([shapeRef.current]);
            trRef.current.getLayer().batchDraw();
        }
    }, [isSelected]);
    useEffect(() => {
        if (image) {
            // you many need to reapply cache on some props changes like shadow, stroke, etc.
            shapeRef.current.cache();
        }
    }, [image]);

    return <>
        <Image onClick={onSelect}
               filters={[Konva.Filters.Blur]}
               blurRadius={shapeProps.animation.blur}
               onTap={onSelect}
               ref={shapeRef}
               image={image}
               draggable
               x={shapeProps.animation.x}
               y={shapeProps.animation.y}
            {...shapeProps}
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
        )}</>


}

export default CustomImg