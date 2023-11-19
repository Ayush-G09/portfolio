type Props = {
  children: JSX.Element;
  hideModal: (bool: boolean) => void;
};

function Modal({ children, hideModal }: Props) {
  return (
    <div className="fixed w-screen h-screen inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white w-4/5 h-4/5 rounded flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-end h-fit py-2 border-b-2 shadow-md px-2">
          <button onClick={() => hideModal(false)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Close
          </button>
        </div>
        <div className="w-full h-full bg-red-400 overflow-y-scroll">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
