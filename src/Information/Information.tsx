// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronRight,
//   faChevronLeft,
// } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Certificate from "../components/Certificate";
import Modal from "../components/Modal";
import { Document, Page } from "react-pdf";
import FlutterPdf from "../assets/flutterCertificate.pdf"

function Information() {
  const [showModal, setShowModal] = useState(false);

  function ToggleModal(bool: boolean) {
    setShowModal(bool);
  }

  const ModalData = () => (
    <div className="flex w-full h-full">
      <Document file={FlutterPdf}>
        <Page/>
      </Document>
    </div>
  );

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center p-10">
        <div className="w-1/2 h-full flex flex-col">
          <div className="w-full h-1/2 flex flex-col p-5 bg-green-200">
            <div>Education</div>
          </div>
          <div className="w-full h-1/2 flex flex-col p-5">
            <div>Certificates</div>
            <div className="w-full h-full p-10 flex items-center justify-center relative">
              {/* <div className=" w-10 h-10 flex items-center justify-center rounded-full shadow-md absolute left-[91%] text-lg bg-gray-400">
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full shadow-md absolute right-[91%] text-lg bg-gray-400">
                <FontAwesomeIcon icon={faChevronLeft} />
              </div> */}
              <div className="w-full h-full py-2 px-16 overflow-x-auto overflow-y-hidden flex gap-24 items-center">
                <Certificate showModal={ToggleModal} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full bg-blue-300"></div>
      </div>

      {showModal && (
        <Modal hideModal={ToggleModal}>
          <ModalData />
        </Modal>
      )}
    </>
  );
}

export default Information;
