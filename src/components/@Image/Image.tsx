import classNames from 'classnames'
import React from 'react'
import { getImagePath } from '../../services/Tools'




interface PropTypes {
    hash: string
    classes?: string[]
    id?: string
}



const Image: React.FC<PropTypes> = ({ classes = [], id, hash}) => {
  return (
    <img id={id} src={getImagePath(hash) + '.png?w=1000'} className={classNames(...classes)}/>
  )
}

export default Image;