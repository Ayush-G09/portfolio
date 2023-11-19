import React from "react";

type Props = {
  showModal: (bool: boolean) => void;
};

function Certificate({showModal}: Props) {
  return (
    <div className="flex-none w-[100%] h-[250px] rounded-lg shadow-lg overflow-hidden px-10 py-5">
      <div className="w-full h-full flex">
        <div className="w-1/2 h-full rounded-md shadow p-8 bg-[#F0DB4F]">
          <div className="w-full h-full bg-js bg-contain bg-no-repeat bg-center" />
        </div>
        <div className="w-1/2 h-full flex flex-col pl-8">
          <div className="h-2/3 text-xl">
            Javascript complete guide (Beginner + Advance)
          </div>
          <button onClick={() => showModal(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
