import React, { ReactNode } from 'react'
import Accordion, { AccordionProps } from '@mui/material/Accordion';
import { AccordionDetails, AccordionSummary } from '@mui/material'
import { FaChevronDown } from 'react-icons/fa';

interface IAccordionComp extends AccordionProps {
    Header ?: string | ReactNode
}

const AccordionComp = ({
    Header,
    children,
    ...rest
}: IAccordionComp) => {
  return (
      <Accordion {...rest} >
          <AccordionSummary expandIcon={<FaChevronDown />} id="panel-header" aria-controls="panel-content">
            {typeof Header === 'string' ? Header : Header}
          </AccordionSummary>
          <AccordionDetails>
                {children}
          </AccordionDetails>
      </Accordion>

  )
}


export default AccordionComp;