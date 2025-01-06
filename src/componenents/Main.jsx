import { Toast } from 'bootstrap';
import React, { useEffect, useState } from 'react'

const Main = (props) => {
    const [pageIndex,setPageIndex]=useState("");
    const [TotalData,setTotalData]=useState("");
    const [header,setHeader]=useState([]);
    const [tableData,setTableData]=useState("");
  //  const [pageNo,setPageNo]=useState("");
  const [timer,setTimer]=useState(0);
  const [timerId,setTimerId] =useState("");
    function onclickStop()
    {
            clearInterval(timerId);
    }
    function onclickStart()
    {
        const id =setInterval(() => {
                  
            setTimer((prevTimer) => prevTimer + 1);
          //  console.log(timer)
        }, 1000);
        setTimerId(id);
    }
    const [totalPage,setTotalPage]=useState();
     const itemPerPage=4;
    useEffect(()=>{
            const obj=props.tableData[0];
            const arr=Object.keys(obj);
            setHeader(arr);
            setTotalData(props.tableData.length);
    }
    ,[]);
    useEffect(()=>
    {
        setPageIndex(1);
            const pages=Math.ceil(TotalData/itemPerPage+1);
            setTotalPage(pages);


    },[TotalData])
    useEffect(()=>{
        const array=props.tableData.slice((pageIndex-1)*itemPerPage,(pageIndex-1)*itemPerPage+itemPerPage);
        setTableData(array);

    },[pageIndex])
    
    function onClickNext(totalPage,pageIndex)
    {
            if(pageIndex<totalPage)
            {
                setPageIndex((prevPageIndex) => prevPageIndex + 1);
            }
            else
            {
                setPageIndex(1);
            }
    }
    function onClickPrev(totalPage,pageIndex)
    {
        if(pageIndex>1)
            {
                setPageIndex((prevPageIndex) => prevPageIndex - 1);
            }
            else
            {
                setPageIndex(totalPage);
            }
    }
    console.log(header)
   
  return (
    <div>
   
  <table class="table table-striped">
  <thead>
    <tr>
    {
        header.map((head)=>
        { return  <th>{head}</th>
            
        })
    }
    </tr>
  </thead>
  <tbody>
    {
        tableData?  tableData.map((data)=>
        {
            return (
               <tr>
                {Object.values(data).map((key)=>
                {
                    return (<th>{key}</th>)
                })

                }
               </tr>
            )
            

        }):
     <>

        </>
    }
  </tbody>
</table>
<div class="row"> </div>
<button class="button" onClick={()=>onClickPrev(totalPage,pageIndex)}>prev</button>
<p>{pageIndex}</p>
<button class="button" onClick={()=>onClickNext(totalPage,pageIndex)}>next</button>

<div >
    <div>{timer}</div>
    <button type="button" class="btn btn-success" onClick={onclickStart}>start</button>
    <button type="button" class="btn btn-danger" onClick={onclickStop}>stop</button>
</div>
    </div>
  )
}

export default Main