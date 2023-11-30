import React from 'react'
import Container from 'react-bootstrap/Container'

export default function BreadHero(props) {

    return (
        <div className={'breadcrumb_area full-w text-capitalize ' + (props.bigbanner ? props.bigbanner : 'none')} style={{ backgroundImage: props.bigbanner ? `url("../images/bann-3.jpg")` : '' }}>
            <Container> 
                {props.linkhtml}
            </Container> 
        </div>
    )
}
