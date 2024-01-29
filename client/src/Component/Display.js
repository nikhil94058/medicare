import { useState } from "react";
import FileUpload from "./FileUpload";

const Display = ({ contract, account, provider }) => {
  const [data, setData] = useState("");
  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have access");
    }
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      // console.log(str);
      // console.log(str_array);
      const images = str_array.map((item, i) => {
        return (
          <a href={item} key={i} target="_blank">
            <img
              key={i}
              src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
              alt="new"
              className="image-list"
            ></img>
          </a>
        );
      });
      setData(images);
    } else {
      alert("No image to display");
    }
  };
  return (
    <>

      { /*  <div class="flex items-center justify-center w-full">
        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>

      <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={getdata}>Get Data</button>
      <div className="image-list">{data}</div>*/}

      <center>
        <div className="w-[942px] h-[1094px] bg-white rounded-[46px] flex-col justify-start items-start gap-2.5 inline-flex">
          <center> <div className="w-[715px] h-[94px] justify-start items-center gap-[30px] inline-flex m-[90px]">
            <div className="w-[94px] h-[94px] relative">
              <div className="w-[94px] h-[94px] left-0 top-0 absolute bg-white rounded-full border-2 border-slate-300" />
              <div className="w-[46px] h-[46px] left-[24px] top-[24px] absolute flex-col justify-start items-start inline-flex">
                <div className="w-[46px] h-[46px] relative">
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-1.5 inline-flex">
              <div className="text-zinc-800 text-[34px] font-medium font-['Inter']">Upload files</div>
              <div className="text-gray-400 text-[29px] font-medium font-['Inter']">Select and upload the files oof your choice</div>
            </div>

          </div>
            <hr class="h-px my-8 w-full bg-gray-200 border-0 dark:bg-gray-700"></hr></center>

          <FileUpload
            account={account}
            provider={provider}
            contract={contract}
          ></FileUpload>


          <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={getdata}>Get Data</button>
          <div className="image-list">{data}</div>

          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="image-list">{data}</div>

        </div>



      </center>
      justify-center w-full


    </>
  );
};
export default Display;

// <div className="image-list">{data}</div>
{/*<input
type="text"
placeholder="Enter Address"
className="address"
></input>
<button className="center button" onClick={getdata}>
Get Data
</button>*/}


