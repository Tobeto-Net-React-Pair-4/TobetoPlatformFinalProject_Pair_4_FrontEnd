import React from 'react'
import { Accordion } from 'react-bootstrap'

type Props = {
    header : string;
    text: string;
}

const Faqs = (props: Props) => {
  return (

    <div >
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='accordion-button'>{props.header}</Accordion.Header>
        <Accordion.Body>
          {props.text}
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Faqs;