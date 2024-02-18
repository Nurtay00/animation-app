import logo from '../assets/logo.svg'
import styled from "styled-components";
import {useNavigate} from "react-router-dom";


const HeaderWrp = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #1E1E1E;
  align-items: center;
`

const LogoImg = styled.img`
  padding: 15px;
`

const PreviewBtn = styled.button`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
  border-radius: 5px;
  background: rgba(62, 135, 248, 1);
  color: #FFFFFF;
  box-shadow: none;
  border-color: rgba(62, 135, 248, 1);
  width: 87px;
  height: 34px;
  margin-right: 15px;

`


const Header = () => {
    const navigation = useNavigate()
    return <HeaderWrp>
        <LogoImg src={logo}/>
        <PreviewBtn onClick={() => navigation('preview')}>Preview</PreviewBtn>
    </HeaderWrp>
}

export default Header