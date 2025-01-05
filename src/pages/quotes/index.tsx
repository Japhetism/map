import React, { useState, useEffect } from 'react';
import StatusBadge from '../../components/statusbadge';
import Breadcrumb from '../../components/breadcrumb';
import { getQuotes } from '../../service/api';
import { IQuote } from '../../interface';
import { VerticalmoreSVG } from '../../assets/icons/verticalmore';
import { ArrowleftSVG } from '../../assets/icons/arrowleft';
import { ArrowrightSVG } from '../../assets/icons/arrowright';
import { Link } from 'react-router-dom';

const Quotes: React.FC = () => {
  const [quotes, setQuotes] = useState<IQuote[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const quotesPerPage = 5;
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const breadcrumbItems = [
    { label: 'Quotes', href: '/procurements/quotes' },
  ];

  useEffect(() => {
    const fetchQuotes = async () => {
      const response = await getQuotes();
      setQuotes(response);
    };

    fetchQuotes();
  }, []);

  const indexOfLastQuote = currentPage * quotesPerPage;
  const indexOfFirstQuote = indexOfLastQuote - quotesPerPage;
  const currentQuotes = quotes.slice(indexOfFirstQuote, indexOfLastQuote);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleActionSelect = (quote: IQuote, action: string) => {
    if (action === 'view') {
      alert(`Viewing quote: ${quote.refno}`);
    } else if (action === 'edit') {
      alert(`Editing quote: ${quote.refno}`);
    }
    setOpenDropdown(null);
  };

  const totalPages = Math.ceil(quotes.length / quotesPerPage);

  return (
    <div className="container mx-auto p-4">
      <Breadcrumb items={breadcrumbItems} />
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-[#344054] text-xs font-normal h-[45px] border-b border-gray-100">Ref No</th>
            <th className="px-4 py-2 text-left text-[#344054] text-xs font-normal h-[45px] border-b border-gray-100">Title</th>
            <th className="px-4 py-2 text-left text-[#344054] text-xs font-normal h-[45px] border-b border-gray-100">Requestor</th>
            <th className="px-4 py-2 text-left text-[#344054] text-xs font-normal h-[45px] border-b border-gray-100">Status</th>
            <th className="px-4 py-2 text-left text-[#344054] text-xs font-normal h-[45px] border-b border-gray-100">Expected Delivery</th>
            <th className="px-4 py-2 text-left text-[#344054] text-xs font-normal h-[45px] border-b border-gray-100">Date Created</th>
            <th className="px-4 py-2 text-left text-[#344054] text-xs font-normal h-[45px] border-b border-gray-100"></th>
          </tr>
        </thead>
        <tbody>
          {currentQuotes.map((quote) => (
            <tr key={quote.refno} className="hover:bg-gray-50">
              <td className="px-4 py-2 text-[#344054] text-sm font-normal h-[53px] border-b border-gray-100">{`RQ #${quote?.refno}`}</td>
              <td className="px-4 py-2 text-[#344054] text-sm font-normal h-[53px] border-b border-gray-100">{quote?.title}</td>
              <td className="px-4 py-2 text-[#344054] text-sm font-normal h-[53px] border-b border-gray-100">{quote?.requestor?.name}</td>
              <td className="px-4 py-2 text-[#344054] text-sm font-normal h-[53px] border-b border-gray-100">{<StatusBadge status={quote?.status} />}</td>
              <td className="px-4 py-2 text-[#344054] text-sm font-normal h-[53px] border-b border-gray-100">{quote?.expectedDelivery}</td>
              <td className="px-4 py-2 text-[#344054] text-sm font-normal h-[53px] border-b border-gray-100">{quote?.dateCreated}</td>
              <td className="px-4 py-2 text-[#344054] text-sm font-normal h-[53px] border-b border-gray-100 relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === quote.refno ? null : quote.refno)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <VerticalmoreSVG />
                </button>

                {openDropdown === quote.refno && (
                  <div className="absolute right-0 mt-2 w-auto bg-white shadow-lg rounded-md border border-gray-300 z-50">
                    <Link
                      to={`/procurement/quotes/${quote.refno}`}
                      className="block w-full px-4 py-2 text-gray-700 text-left hover:bg-gray-100"
                    >
                      View
                    </Link>
                    <button
                      onClick={() => handleActionSelect(quote, 'edit')}
                      className="block w-full px-4 py-2 text-gray-700 text-left hover:bg-gray-100"
                    >
                      Edit
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-10">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white text-xs rounded-md disabled:bg-gray-400"
        >
          <ArrowleftSVG color="#FFFFFF" />
        </button>
        <span className="px-4 py-2 text-xs">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white text-xs rounded-md disabled:bg-gray-400"
        >
          <ArrowrightSVG color="#FFFFFF" />
        </button>
      </div>
    </div>
  );
};

export default Quotes;
