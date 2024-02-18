import styled, {keyframes} from "styled-components";
import {initialData} from "./initialData";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const PreviewWrp = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
`
const PreviewContent = styled.div`
  margin: 0 auto;
  position: relative;
  width: 1200px;
`

const opacityAnime = (e: number) => keyframes`
  from {
    opacity: ${e};
  }
  to {
    opacity: 1;
  }
`;

const Exp = styled.div`
  position: absolute;
  transition: opacity ${(props: any) => props.speed}s;
  animation: ${(props: any) => opacityAnime(props.opacity)} ${(props: any) => props.speed}s ease-out;
  animation-delay: ${(props: any) => props.delay}s
`


const CloseIcon = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
  display: grid;
  place-items: center;
  border: 1px solid black;
  border-radius: 50%;
  cursor: pointer;

`

const Preview = () => {

    const [data, setData] = useState<any>({});
    const navigation = useNavigate()
    useEffect(() => {
        if (!!localStorage.getItem('animation')) {
            setData(JSON.parse(localStorage.getItem('animation') ?? ''))
        } else {
            console.log('initialData')
            setData(initialData)
        }
    }, [])

    const fun = () => {
        const temp = []
        for (let [key, value] of Object.entries(initialData) as any) {
            temp.push(
                <Exp style={{
                    top: window.innerHeight / 498 * value.animation.y,
                    left: 1200 / 874 * value.animation.x,
                    width: 1200 / 800 * value.width,
                    fontWeight: value?.fontWeight,
                    fontSize: 1200 / 874 * value.fontSize
                }}
                     {...data[key]?.animation}
                >{key === 'img' ? <img alt={'asdf'} src={value.img} style={{
                    width: 1200 / 874 * value.width,
                    height: 1200 / 874 * value.height
                }}/> : value?.text}</Exp>
            )


        }
        return temp
    }

    return <PreviewWrp>
        <CloseIcon onClick={() => navigation('/')}>✕</CloseIcon>
        <PreviewContent>

            {fun().map(el => el)}
        </PreviewContent>


    </PreviewWrp>
}

export default Preview