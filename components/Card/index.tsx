import React from 'react'
import MyModal from '../Dialog'
import { propData } from './data-type'

interface CardProps {
     responseData: propData;
   }
export default function Card({responseData}: CardProps) {
     return (
          <>
               <div className='bg-secondary w-64 rounded-xl p-4 text-onsecondary m-2'>
                    <div className="type pb-4 font-mono flex justify-between">
                         <p>Bus</p>
                         <span>
                              <button>
                                   {responseData && responseData["bus-number"] !== "Bus not found" &&
                                        <MyModal stops={responseData.stops} />}
                                   {responseData.message === "Bus not found" &&
                                        <p>Error</p>}
                              </button>
                         </span>
                    </div>
                    <div className="heading pb-2 text-2xl font-semibold">{responseData["bus-number"]}</div>
                    <div className="line flex text-md font-normal  justify-between">
                         <p>{responseData.from}</p>
                         <p>{responseData.to}</p>
                    </div>
               </div>
          </>
     )
}
