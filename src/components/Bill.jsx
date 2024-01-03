import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";
import logo from "../assets/pngegg 1.png";
const Bill = ({ showBill, setShowBill }) => {
  const pdfRef = useRef();
  const handleDownload = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL(" image/png ");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth() * 1.73;
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
    <div className="bg-white w-full relative">
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
              <h1 className="font-semibold text-sm py-1 "> Name : Niyas</h1>
              <h1 className="font-semibold text-sm py-1 ">
                {" "}
                Accomodation Address : Malappuram ,India
              </h1>
              <h1 className="font-semibold text-sm py-1 ">
                {" "}
                Accomodation Type : Entire home / apt{" "}
              </h1>

              <h1 className="font-semibold text-sm py-1 ">
                {" "}
                Check In Date : Thu, March 12 ,2023 12:00 PM{" "}
              </h1>
              <h1 className="font-semibold text-sm py-1 ">
                {" "}
                Check Out Date : Thu, March 17 ,2023 12:00 PM{" "}
              </h1>
              <h1 className="font-semibold text-sm py-1 "> Guests : 4</h1>

              <h1 className="font-semibold text-sm py-1 "> Nights : 5 </h1>
              <p> </p>
            </div>
            <div className="p-2">
              <h1 className=" m-2 font-bold text-2xl">Payment Details </h1>
              <h1 className="font-semibold text-sm py-1 ">
                {" "}
                Price per Night : 15812
              </h1>
              <h1 className="font-semibold text-sm py-1 ">
                {" "}
                Airbnb service fee : 1400
              </h1>
              <h1 className="font-semibold text-sm py-1 "> Total : 17000</h1>
              <h1 className="font-semibold text-sm py-1 ">
                {" "}
                Payment Recieved ,12/2/2032 12:23 : 17000
              </h1>
              <h1 className="font-semibold text-sm py-1 ">
                {" "}
                Payment Methode : VISA CARD ***********4587
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
