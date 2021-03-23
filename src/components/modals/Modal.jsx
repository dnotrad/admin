import React, { useState } from 'react';
import s from './Modal.module.css';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
const modalRoot = document.getElementById('modal-root');


class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {

        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        console.log(this.el)
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        );
    }
}

const StyledWrapper = styled.div`
width:100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
z-index: 50;
top:0;
left: 0;
transition: var(--transition);
transform: scale(${props => props.open ? "1" : "0"});
transform-origin: top;
}
`

const StyledBack = styled.div`
width: 100%;
height: 100%;
background: ${props => !props.withBackground ? "transparent" : props.color};
opacity: ${props => props.opacity};
filter: blur(${props => props.blur}px);
position: absolute;
z-index: 49;
top:0;
left: 0;
`

export default function PopUp(props) {
    return (
        <Modal>
            <StyledWrapper open={props.open}>
                <StyledBack withBackground={props.withBackground} color={props.colourBackground} opacity={props.opacity} blur={props.blur}>
                </StyledBack>
                <div className={s.item}>
                    {props.children}
                </div>
            </StyledWrapper>
        </Modal>
    )
}


PopUp.defaultProps = {
    withBackground: true,
    colourBackground: "#000",
    opacity: 0.2,
    blur: 5,
    open: false,
}