import React  from "react";

const Profile=()=>{
    return (
        <div style={{maxWidth:"550px",margin:"0px auto"}}>

            <div  style={{  //for upper div(dp and name)
               display:"flex",
               justifyContent:"space-around",
               margin:"20px 0px",
              
           }}>
 
 {/* dp part */}
            <div>  
                <img style={{width:"160px",height:"160px",borderRadius:"80px", margin:"0px 0px"}} 
                    src="https://images.newindianexpress.com/uploads/user/imagelibrary/2022/8/21/w600X390/Hrithik_Roshan_PTI.jpg"
                />

                {/* name part */}
                </div>  
                <div> 
                <h4>Hrithik Roshan</h4>
                  <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}> 
                     <h5>100 post </h5>
                     <h5>100 follower </h5>
                     <h5>100 following</h5>
                  </div>
                </div>
            </div>
   

   {/* for pic uploaded part */}
   <div className="gallery">
           <img className="item" src="https://static.abplive.com/wp-content/uploads/2019/10/05084908/Hrithik-Roshan-site.jpg" />
           <img className="item" src="https://static.abplive.com/wp-content/uploads/2019/10/05084908/Hrithik-Roshan-site.jpg" />
           <img className="item" src="https://static.abplive.com/wp-content/uploads/2019/10/05084908/Hrithik-Roshan-site.jpg" />
           <img className="item" src="https://static.abplive.com/wp-content/uploads/2019/10/05084908/Hrithik-Roshan-site.jpg" />
   </div>


        </div>
    )
}

export default Profile;