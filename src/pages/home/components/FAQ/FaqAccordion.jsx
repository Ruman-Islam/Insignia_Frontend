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
    <div className="max-w-[500px] w-full text-white">
      <h3 className="py-2 text-brand__font__size__xl font-brand__font__family__fancy">
        FAQ&rsquo;s
      </h3>
      <div className="w-full bg-[#2F2F2F]">
        <Accordion preExpanded={[1]}>
          {accordionData.map((item) => (
            <AccordionItem uuid={item.uuid} key={item.uuid}>
              <AccordionItemHeading>
                <AccordionItemButton>{item.heading}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>{item.content}</AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FaqAccordion;
