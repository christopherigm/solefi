import React from 'react';

const PlatformInfo = (props: any): React.ReactElement => {
    return (
        <div className='ContainerInfo'>
            <div className='Content'>
                <div className='Info__Title'
                    style = {{color: 'white'}}>{props.title}</div>
                <div className='Info__text'
                    style = {{color: 'white'}}>{props.text}</div>
                <li className='Info__list'
                    style = {{color: 'white'}}>{props.list1}</li>
                <li className='Info__list'
                    style = {{color: 'white'}}>{props.list2}</li>
                <li className='Info__list'
                    style = {{color: 'white'}}>{props.list3}</li>
                <a
                    href= {props.link} target= '_blanck'
                    className='Info__button blue-text'
                >{props.boton}</a>
            </div>
        </div>
    );
};

export default PlatformInfo;
