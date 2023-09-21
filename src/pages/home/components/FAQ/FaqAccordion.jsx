import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { accordionData } from "../../../../constants/common";

const FaqAccordion = () => {
  return (
    <div className="w-full">
      <Accordion preExpanded={[1]}>
        {accordionData?.slice(0, 5).map((item) => (
          <AccordionItem uuid={item.uuid} key={item.uuid}>
            <AccordionItemHeading>
              <AccordionItemButton>{item.heading}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>{item.content}</AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
