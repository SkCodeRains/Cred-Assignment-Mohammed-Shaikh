// app/dashboard/create-employee/page.tsx

"use client";

import { MailsDataTable } from '@/components/MailsDataTable'; 
import axiosInstance from '@/utils/auth';
import { useEffect, useState } from 'react';



export default function CreateEmployeePage() {

  const [mails, setMails] = useState(false);
  useEffect(() => {

    axiosInstance.get('vendors/mails').then((res) => { 
      setMails(res.data);
    }).catch(e => console.log(e));
  }, []);


  return (
    <div className='px-11 pt-11'>
      <MailsDataTable data={mails} />
    </div>
  );
}
