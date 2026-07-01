import React from 'react'
import ModalRenderLogic from './ModalRenderLogic'

const Pr25_ModalRenderProps = () => {
  return (
    <div>Modal
      <ModalRenderLogic render={() => (<p>Title</p>)} />
    </div>
  )
}

export default Pr25_ModalRenderProps