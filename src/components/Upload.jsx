import React from 'react'
import Header from './Header'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
 import "./Upload.css"
 

const Upload =()=>{
   return(<>
   
       
      <main>
       <div className="upload_sec py-5" id="upload">
             <div className="container-fluid max-1500">
                 <h2 className="main_head mb-1">Upload A Video</h2>
                 <p className="main_tag mb-5">This video will be uploaded to @Raymon Sahadewlall</p>
                 <div className="roww px-5">
                     <div className="col-lg-3 colo">
                         <div className="upload_txt">
                             <div className="upload_txt_inr">
                                 <div className="text-center mb-4"><input type="file"/></div>
                         <p>Select a video to upload <br/>or drag and drop a file</p>
                         <ul>
                             <li>Mp4 or WebM</li>
                            <li>720x1280 resolution or <br/>higher</li>
                             <li>Up to 180 seconds</li>
                         </ul>
                             </div>
                         </div>
                     </div>
                     <div className="col-lg-8 colo2">
                         <form>
                             <div className="form-group">
                                 <label className="form_label">Caption</label>
                                 <input type="text" placeholder="Title" className="form-control"/>
                             </div>
                             <div className="form-group">
                                 <label className="form_label">Caption</label>
                                 <textarea placeholder="Description" className="form-control"></textarea>
                             </div>
                             <div className="form-group">
                                 <label className="form_label">Select Category:</label>
                                 <ul>
                                     <li><a href="#">Sports</a></li>
                                     <li><a href="#">Drama</a></li>
                                     <li><a href="#">Fantasy</a></li>
                                     <li><a href="#">Comedy</a></li>
                                     <li><a href="#">Science</a></li>
                                 </ul>
                             </div>
                             <div className="row">
                                 <div className="col-lg-6">
                                      <div className="form-group">
                                 <label className="form_label">Who can see this video</label>
                               <div className="radio-btn">
                                   <label>Public<input type="radio"/></label>
                                          {/* </div> */}
                                            {/* <div className="radio-btn"> */}
                                   <label>Friends<input type="radio"/></label>
                                          {/* </div> */}
                                            {/* <div className="radio-btn"> */}
                                   <label>Private<input type="radio"/></label>
                                          </div>
                             </div>
                                 </div>
                                     <div className="col-lg-6">
                                      <div className="form-group">
                                 <label className="form_label">Allow users to</label>
                               <div className="check">
                                   <label><input type="checkbox"/>Comment</label>
                                          {/* </div>
                                           <div className="check"> */}
                                   <label><input type="checkbox"/>Duet</label>
                                          {/* </div>
                                        <div className="check"> */}
                                   <label><input type="checkbox"/>Stich</label>
                                          </div>
                             </div>
                                 </div>
                             </div>
                             <div className="btn_grp text-right mt-4">
                                 <button className="custom_btn mr-5">Discard</button>
                                  <button className="custom_btn disabled">Post</button>
                             </div>
                         </form>
                     </div>
                 </div>
        </div>
        </div>


    </main>

   
   </>)
}

export default Upload;