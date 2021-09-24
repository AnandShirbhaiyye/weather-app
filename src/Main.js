import React,{useState,useEffect} from "react";

export default function Main() {
    const key="495b4c597fd44fa0d2676614e9198571";

    const[all_data,setAllData]=useState('');

    const[city_name,setCityName]=useState('pune');

    useEffect(()=>{
        const getTemp=async()=>{
            fetch('https://api.openweathermap.org/data/2.5/weather?q='+city_name+'&units=metric&appid='+key)
             .then(res=>res.json())
             .then(abc=>{
                 setAllData(abc.main);
             })
        };
        getTemp();
    },[city_name]
    )
    var a=10;
    return(
        <div className="container mt-3">
            <div className="row mb-3">
                <div className="col-md-12">
                    <input type="text" class="form-control"value={city_name} onChange={(e)=>{setCityName (e.target.value)}} placeholder="Enter city Name"/>
                </div>
            </div>
            <table class="table table-dark table-hover">
                <thead>
                <tr>
                            <th scope="col">Max-Temp</th>
                            <th scope="col">Min-Temp</th>
                            <th scope="col">Pressure</th>
                            <th scope="col">Humidity</th>
               </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>
                         {typeof all_data=="undefined" ? "Loading" : all_data.temp_max}
                        </td> 
                        <td>
                            {typeof all_data=="undefined" ? "Loading" : all_data.temp_min}
                        </td>
                        <td>
                            {typeof all_data=="undefined" ? "Loading" : all_data.pressure}
                        </td>
                        <td>
                            {typeof all_data=="undefined" ? "Loading" : all_data.humidity}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}