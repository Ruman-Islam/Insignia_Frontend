import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
// import "react-accessible-accordion/dist/fancy-example.css";
import { accordionData } from "../../../../constants/common";
import styles from "./Styles.module.css";

const FaqAccordion = () => {
  return (
    <div className="w-full">
      <Accordion
        className="border border-brand__gray__border rounded-xl p-6 backdrop-blur-xl"
        preExpanded={[1]}
      >
        {accordionData?.slice(0, 6).map((item, index) => (
          <AccordionItem uuid={item.uuid} key={item.uuid}>
            <AccordionItemHeading
              className={`text-white ${
                index !== 5 && "border-b"
              } border-brand__gray__border py-3 text-brand__font__size__md font-brand__font__semibold`}
            >
              <AccordionItemButton className={styles.accordion__button}>
                {item.heading}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="text-white py-3 pl-5 animate-fade__in">
              {item.content.slice(0, 250)}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
