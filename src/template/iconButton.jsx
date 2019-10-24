import React from 'react';

const IconButton = props => {

    if(props.hide){
        return null
    }else{
        return (
            <button type="button" className={'btn btn-'+ props.styleCss}
                onClick={props.onClick}>
                <i className={'fa fa-'+props.icon}></i>
            </button>
        )
    }
}

export default IconButton;