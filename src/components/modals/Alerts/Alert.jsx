import React from 'react';
import s from './Alert.module.css';
import error from '../../../assets/icons/error.svg';
import ok from '../../../assets/icons/no-error.svg';
import close from '../../../assets/icons/close.svg';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
const modalRoot = document.getElementById('alerts-root');


class Modals extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {

        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {

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
    position: fixed;
    top: 0;
    right: ${props => props.open ? (props.mobile ? -7 : -75) : -200}%;
    z-index: 51;
    transition: var(--transition);
    transform: scale(${props => props.open ? 1 : 0});
`

const StyedBody = styled.div`
    width: 320px;
    height: 73px;
    position: absolute;
    top: 15%;
    transition: var(--transition);
    
    transform: translate(-5%, -10%);
    background: #FFFFFF;
    border-radius: 10px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 6fr 1fr;
    grid-template-areas: "icons msg close";
`

export default function Alerts(props) {
    return (
        <Modals >
            <StyledWrapper mobile={props.mobile} open={props.open} onClick={()=>{
                if(props.mobile){
                    props.setOpen(false)
                } else {
                props.close(false)
                props.setOpen(false)}}}>
                <StyedBody open={props.open}>
                    <div className={s.icon}>
                        <img src={props.error ? error : ok} alt="" />
                    </div>
                    <div className={s.msg}>
                        <span>{props.msg}</span>
                    </div>
                    <div className={s.close} onClick={()=>props.setOpen(false)}>
                        <img src={close} alt="X" />
                    </div>
                </StyedBody>
            </StyledWrapper>
        </Modals>
    )
}

Alerts.defaultProps = {
    error: false,
    msg: "You are the best😊",
    open: false,
}