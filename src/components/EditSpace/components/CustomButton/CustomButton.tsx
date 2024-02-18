import {useEffect, useRef} from "react";
import {Rect, Text, Transformer} from "react-konva";
import Konva from "konva";

const CustomButton = ({shapeProps, isSelected, onSelect, onChange}: any) => {
    const shapeRef = useRef<any>(null);
    const trRef = useRef<any>(null);

    useEffect(() => {
        if (isSelected) {
            if (!trRef.current || !trRef.current) return
            trRef.current.nodes([shapeRef.current]);
            trRef.current.getLayer().batchDraw();
        }
    }, [isSelected]);

    return (
        <>
            <Text
                onClick={onSelect}
                onTap={onSelect}
                x={shapeProps.animation.x}
                y={shapeProps.animation.y}
                fill={'black'}
                wrap="char"
                align="center"
                ref={shapeRef}
                draggable
                onDragEnd={(e) => {
                    const temp = {...shapeProps}
                    temp.animation.x = e.target.x()
                    temp.animation.y = e.target.y()
                    onChange(temp);
                }}
            />
            <Rect
                onClick={onSelect}
                onTap={onSelect}
                ref={shapeRef}
                filters={[Konva.Filters.Blur]}
                blurRadius={100}
                x={shapeProps.animation.x}
                y={shapeProps.animation.y}
                {...shapeProps}
                opacity={shapeProps.animation.opacity}
                draggable
                onDragEnd={(e) => {
                    const temp = {...shapeProps}
                    temp.animation.x = e.target.x()
                    temp.animation.y = e.target.y()
                    onChange(temp);
                }}
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
    );
}

export default CustomButton