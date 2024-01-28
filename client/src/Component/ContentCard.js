import React from 'react';


export const ContentCard1 = ({ data }) => {
  return (
    <div className='overflow-x-auto w-[1200px]'>
      <div className='flex space-x-10 w-[1000px]'>
        {data.map((d, index) => (
          <div key={index} className="w-[501px] h-[264px] pl-6 pr-4 py-10 bg-lime-100 rounded-[30px] border-2 border-neutral-100 justify-between items-end inline-flex">
            <div className="flex-col justify-start items-start gap-10 inline-flex">
              <div className="text-black text-2xl font-semibold font-['Inter'] leading-[33.60px]">{d.parameter}</div>
              <div className="flex-col justify-start items-start gap-1 flex">
                <div className="justify-start items-center gap-1.5 inline-flex">
                  <div className="text-black text-[56px] font-semibold font-['Inter'] leading-[78.40px]">{d.value}</div>
                  <div className="justify-start items-center gap-[7px] flex">
                    <div className="w-7 h-7 relative bg-green-200 rounded-[50px]" />
                    <div className="text-green-800 text-2xl font-semibold font-['Inter'] leading-[33.60px]">{d.percent}</div>
                  </div>
                </div>
                <div className="text-gray-600 text-lg font-medium font-['Inter'] leading-[25.20px]">{d.status}</div>
              </div>
            </div>
            <div className="w-[141px] h-[114.50px] relative">
              {/* Content for the second div */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const exampleData = [
  {
    parameter: "Cholesterol Level",
    value: "89",
    percent: "12%",
    status: "Above average"
  },
  {
    parameter: "Blood Pressure",
    value: "120/80",
    percent: "Normal",
    status: "Optimal"
  },
  {
    parameter: "Body Mass Index",
    value: "25.5",
    percent: "18%",
    status: "Normal"
  },
  {
    parameter: "Heart Rate",
    value: "72",
    percent: "8%",
    status: "Normal"
  },
  {
    parameter: "Glucose Level",
    value: "95",
    percent: "10%",
    status: "Normal"
  },
  {
    parameter: "HDL Cholesterol",
    value: "50",
    percent: "15%",
    status: "Above average"
  },
  {
    parameter: "LDL Cholesterol",
    value: "110",
    percent: "8%",
    status: "Normal"
  },
  {
    parameter: "Triglycerides",
    value: "120",
    percent: "14%",
    status: "Above average"
  },
  {
    parameter: "Waist Circumference",
    value: "32 inches",
    percent: "22%",
    status: "Above average"
  },
  {
    parameter: "Temperature",
    value: "98.6°F",
    percent: "Normal",
    status: "Optimal"
  },
  // Add more data objects as needed
];





// Sample data
const hospitalData = [
  {
    id: 1,
    name: 'Hospital 1',
    startDate: 'V2 - 19/02/22',
    doctor: 'Dr.Kevin Foster',
    color: '#9B1515',
  },
  {
    id: 2,
    name: 'Hospital 2',
    startDate: 'V3 - 20/03/22',
    doctor: 'Dr. Lisa Johnson',
    color: '#418828',
  },
  {
    id: 3,
    name: 'Hospital 3',
    startDate: 'V1 - 15/01/22',
    doctor: 'Dr. Michael Anderson',
    color: '#4E2C7A',
  },
  {
    id: 4,
    name: 'Hospital 4',
    startDate: 'V4 - 25/04/22',
    doctor: 'Dr. Sarah Smith',
    color: '#4E2C7A',
  },
  {
    id: 5,
    name: 'Hospital 5',
    startDate: 'V2 - 19/02/22',
    doctor: 'Dr. John Miller',
    color: 'purple',
  },
  {
    id: 6,
    name: 'Hospital 6',
    startDate: 'V3 - 20/03/22',
    doctor: 'Dr. Emily Davis',
    color: 'pink',
  },
  {
    id: 7,
    name: 'Hospital 7',
    startDate: 'V1 - 15/01/22',
    doctor: 'Dr. Richard Brown',
    color: 'indigo-500',
  },
  {
    id: 8,
    name: 'Hospital 8',
    startDate: 'V4 - 25/04/22',
    doctor: 'Dr. Jessica White',
    color: 'teal-500',
  },
  {
    id: 9,
    name: 'Hospital 9',
    startDate: 'V2 - 19/02/22',
    doctor: 'Dr. Christopher Lee',
    color: 'amber-500',
  },
  {
    id: 10,
    name: 'Hospital 10',
    startDate: 'V3 - 20/03/22',
    doctor: 'Dr. Megan Taylor',
    color: 'cyan-500',
  },
];



// Report component
export const Report = ({ data }) => {
  return (
    <div className='overflow-x-auto w-[1200px]'>
      <div className='flex space-x-10 w-[1000px]'>
        {data.map((hospital) => (
          <div
            key={hospital.id}
            className="w-[500px] h-[297px] p-[40.22px] border border-blue-500 flex-col justify-start items-start gap-[12.99px] inline-flex"
            style={{ backgroundColor: hospital.color }}
          >
            <div className="w-[414.56px] h-[216.56px] flex-col justify-between items-start flex">
              <div className="self-stretch justify-start items-center inline-flex">
                <div className="w-[187.98px] px-[8.99px] py-[4.20px] bg-white rounded-md justify-start items-center flex">
                  <button className="text-right text-gray-800 text-[22.27px] font-normal font-['Playfair Display'] uppercase tracking-wide">
                    CLICK TO VIEW
                  </button>
                </div>
              </div>
              <div className="self-stretch h-[83.28px] py-[3.09px] flex-col justify-start items-start gap-[3.09px] flex">
                <div className="self-stretch text-white text-[37.12px] font-normal font-['Playfair Display'] capitalize">
                  {hospital.name}
                </div>
                <div className="self-stretch justify-between items-start inline-flex">
                  <div className="justify-start items-start gap-[2.17px] flex">
                    <div className="text-white text-lg font-normal font-['Playfair Display']">
                      Start Date -
                    </div>
                    <div className="text-white text-lg font-normal font-['Playfair Display']">
                      [{hospital.startDate}]
                    </div>
                  </div>
                  <div className="text-right text-white text-lg font-normal font-['Playfair Display']">
                    ~ {hospital.doctor}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};






export const ContentCard = () => {
  return (
    <div>
      <div><ContentCard1 data={exampleData} /></div>
      <br />
      <br />
      <div className="w-[759px] h-[145px] text-white text-[40px] font-bold font-['Roboto']">SEE Previous Prescription :<br /></div>
      <br />
      <div><Report data={hospitalData} /></div>
    </div>
  )
}



export default ContentCard