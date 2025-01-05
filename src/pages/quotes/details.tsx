import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ActionButton from "../../components/actionbutton";
import { getQuotesByRefNo } from "../../service/api";
import { IQuote } from "../../interface";
import { CloseSVG } from "../../assets/icons/close";
import LabelValue from "../../components/labelValue";

const QuoteDetails: React.FC = () => {
  const { id } = useParams();
  const [quote, setQuote] = useState<IQuote | undefined>(undefined);

  useEffect(() => {
    const fetchQuotes = async () => {
      if (id) {
        const response = await getQuotesByRefNo(id);
        setQuote(response);
      }
    };  
    
    fetchQuotes();
  }, [id]);

  console.log("quotes are ", quote);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-row justify-between">
        <div>
          <p className="text-[#000000] text-2xl font-bold">Quote details</p>
          <p className="text-[#667185] text-sm font-normal">Created on Wed, 12th June 2022, 08:00am</p>
        </div>
        <div className="flex flex-row space-x-4">
          <ActionButton
            title="Respond"
            classname="bg-[#175CFF]"
            onclick={() => {}}
          />
          <ActionButton
            title="Reject"
            classname="bg-[#D42620]"
            onclick={() => {}}
            rightIcon={CloseSVG as React.ComponentType<React.SVGProps<SVGSVGElement>>}
          />
        </div>
      </div>
      <div className="mt-10 border-[1px] border-[#E4E7EC] px-8 py-6 rounded-[8px]">
        <div className="flex flex-row justify-between items-center">
          <p className="text-[#1D2739] text-xl font-bold">Quote Information</p>
          <p className="text-[#667185] text-sm font-normal">Expected delivery date : 2024-12-02</p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div>
            <LabelValue label="Title" value={quote?.title} />
            <LabelValue label="RFQ No" value={`RQ #${quote?.refno}`} />
            <LabelValue label="Requestor" value={quote?.requestor?.name} />
            <LabelValue label="Status" value={quote?.status} />
            <LabelValue label="Department" value={quote?.department} />
          </div>
          <div>B</div>
        </div>
      </div>
    </div>
  )
}

export default QuoteDetails;