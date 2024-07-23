// app/dashboard/create-employee/page.tsx

"use client";

import { Vendor, VendorDataTable } from '@/components/VendorDataTable';
import VendorForm from '@/components/VendorForm';
import axiosInstance from '@/utils/auth';
import { useEffect, useState } from 'react';



export default function CreateEmployeePage() {

  const [showModal, setShowModal] = useState(false);
  const [vendors, setVendors] = useState([]);
  const [templateMessage, setTemplateMessage] = useState("");
  const [showTemplateMessageModal, setShowTemplateMessageModal] = useState(false);
  const [selectedVendors, setSelectedVendors]: any = useState([]);
  const [selectedList, setSelectLIst]: any = useState([]);

  function toggleModel(): void {
    setShowModal(!showModal);
  }
  useEffect(() => {
    getEmployee();
  }, [])

  const getEmployee = () => {
    setShowModal(false)
    const response = axiosInstance.get('/vendors');
    response.then((response) => {
      setVendors(response.data)
    })
  }
  const sendMailsToAllSelectedVendors = (selectedList: any[]) => {
    setSelectLIst(selectedList);
    setShowTemplateMessageModal(true);
  }

  const sendMails = () => {
    setSelectedVendors([]);
    setShowTemplateMessageModal(false);
    for (const key in selectedList) {
      const vender: Vendor = vendors[parseInt(key)];
      selectedVendors.push({ name: vender.name, upi: vender.upi, message: templateMessage, email: vender.email });
      delete selectedList[key];
    }
    axiosInstance.post("/vendors/send-emails", selectedVendors).then((res) => {
      alert("All mails are ")
    }).catch(e => {
      console.log(e);
    })
  }

  return (
    <div className='px-11 pt-11'>
      <button className="py-2  px-4 mb-3 bg-blue-500 text-white rounded font-medium hover:bg-blue-700 mr-2 transition duration-500" onClick={toggleModel}>Add Vendor   </button>
      <VendorDataTable data={vendors} sendMailsToFunction={sendMailsToAllSelectedVendors} />
      {
        showModal && (
          <div className="fixed z-10 overflow-y-auto top-0 w-full left-0 " id="modal">
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-900 opacity-75" />
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
              <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <VendorForm getEmployee={getEmployee} toggleModelFunction={toggleModel} />
                </div>
          
              </div>
            </div>
          </div>



        )
      }

      {
        showTemplateMessageModal && (
          <div className="fixed z-10 overflow-y-auto top-0 w-full left-0 " id="modal">
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-900 opacity-75" />
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
              <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <label className="font-medium text-gray-800" >Message</label>
                  <input type="text" onChange={e => setTemplateMessage(e.target.value)} className="w-full outline-none rounded bg-gray-100 text-black text-lg p-2 mt-2 mb-3" />
                </div>
                <div className="bg-gray-200 px-4 py-3 text-right flex">
                  <button type="button" className="py-2 w-1/2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={() => { setTemplateMessage(""); setShowTemplateMessageModal(false) }}><i className="fas fa-times"></i> Cancel</button>
                  <button type="button" className="py-2 w-1/2 px-4 bg-blue-500 text-white rounded font-medium hover:bg-blue-700 mr-2 transition duration-500" onClick={sendMails}><i className="fas fa-plus"></i> Send</button>
                </div>
              </div>
            </div>
          </div>














        )
      }

    </div>
  );
}
