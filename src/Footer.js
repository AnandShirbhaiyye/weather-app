import React from 'react'
import{WiDaySleet} from 'react-icons/wi'
export default function Footer() {
    return (
        <div>
           <div className="container">
               <div className="bg-dark text-light">
                <div className="row" style={{borderBottom: "2px solid white"}}>
                         <div className="col md 4">
                             <h3 className="h3"><WiDaySleet/> Weather App</h3>
                         </div>

                         <div className="col md 4">
                             <h2 className="h2">Social Media links</h2>
                             <ul className="list-group">
                                <li class="list-group-item bg-dark text-light"><a href="github"> Github</a></li>
                                <li class="list-group-item bg-dark text-light"><a href="facebook"> Facebook</a></li>
                                <li class="list-group-item bg-dark text-light"><a href="instagram">Instagram</a></li>
                                <li class="list-group-item bg-dark text-light"><a href="Twitter">Twitter</a></li>
                                <li class="list-group-item bg-dark text-light"><a href="github"> Github</a></li>
                             </ul>
                         </div>

                         <div className="col md 4">
                             <h2 className="h2">Contact</h2>
                             <ul className="list-group">
                                <li class="list-group-item bg-dark text-light">Aboutus</li>
                                <li class="list-group-item bg-dark text-light">Mo.no:8446744843</li>
                                <li class="list-group-item bg-dark text-light">Blog</li>
                                <li class="list-group-item bg-dark text-light">Web Chat</li>
                                <li class="list-group-item bg-dark text-light"><a href="#">Email-id:anandshirbhaiyye@gmail.com</a></li>
                             </ul>
                         </div>
                </div>
                <p className="text-center mt-2">2021@ all rights are reserved</p>
               </div>
           </div>
        </div>
    )
}

