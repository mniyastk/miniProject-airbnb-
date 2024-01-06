import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";
import logo from "../assets/pngegg 1.png";
const Bill = ({ showBill, setShowBill ,billData}) => {
  console.log(billData);
  const pdfRef = useRef();
  const handleDownload = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL(" image/png ");
      const pdf = new jsPDF("p", "mm", "a4", false);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imageWidth = canvas.width;
      const imageHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imageWidth, pdfHeight, imageHeight);
      const imgX = pdfWidth - imageWidth * ratio;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imageWidth * ratio,
        imageHeight * ratio
      );
      pdf.save("invoice.pdf");
    });
  };
  const date = new Date();

  return (
    <div className="bg-white w-full relative ">
        <div
          className=" fixed top-2 sm:hidden left-2  rounded-full font-bold text-base  hover:cursor-pointer border w-6 h-6 flex justify-center items-center bg-white "
          onClick={() => setShowBill(!showBill)}
        >
          x
        </div>
      <div ref={pdfRef} className="w-full" >
        <div className=" w-full h-[max] p-10  border  ">
           

          <div className=" w-20 ">
            <img src={logo} alt="logo" className="p-1" />
          </div>
          <div className="w-full h-full border  ">
            <h1 className=" m-2 font-bold text-2xl">Customer Reciept </h1>
            <p className=" m-2 font-semibold text-sm">
              Invoice Date :{" "}
              {date.toLocaleString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
              })}
            </p>
            <div className=" p-3">
              <h1 className="font-semibold text-sm py-1 "> Name : {billData?.invoiceData?.full_name}</h1>
              <h1 className="font-semibold text-sm py-1 ">
                {" "}
                Accomodation Address : {billData?.stay?.address?.District_localty },{billData?.stay?.country}
              </h1>
              <h1 className="font-semibold text-sm py-1 ">
                {" "}
                Accomodation Type : {billData?.stay?.stayType}
              </h1>

              <h1 className="font-semibold text-sm py-1 ">
                {" "}
                Check In Date : {billData?.checkInDate}
              </h1>
              <h1 className="font-semibold text-sm py-1 ">
                {" "}
                Check Out Date : {billData?.checkOutDate}
              </h1>
              <h1 className="font-semibold text-sm py-1 "> Guests : {billData?.guests}</h1>

              <h1 className="font-semibold text-sm py-1 "> Nights : {billData?.invoiceData?.nights} </h1>
              <p> </p>
            </div>
            <div className="p-2">
              <h1 className=" m-2 font-bold text-2xl">Payment Details </h1>
              <h1 className="font-semibold text-sm py-1 ">
                {" "}
                Price per Night : {billData?.stay?.price}
              </h1>
              <h1 className="font-semibold text-sm py-1 ">
                {" "}
                Airbnb service fee : {billData?.invoiceData?.serviceFee}
              </h1>
              <h1 className="font-semibold text-sm py-1 "> Total : {(billData?.invoiceData?.total)+(billData?.invoiceData?.serviceFee)}</h1>
              <h1 className="font-semibold text-sm py-1 ">
                {" "}
                Payment Recieved ,{billData?.invoiceData?.paymentDate}
              </h1>
              <h1 className="font-semibold text-sm py-1 ">
                {" "}
                Payment Methode : VISA CARD ***********1111
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full h-[max] flex justify-end p-2">
        <button
          className="p-2 bg-red-500 font-semibold text-white rounded-md text-sm"
          onClick={handleDownload}
        >
          {" "}
          Download
        </button>
      </div>
    </div>
  );
};

export default Bill;
