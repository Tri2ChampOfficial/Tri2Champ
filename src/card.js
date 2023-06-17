import React from "react";
import "./card.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pic from "./emptybackground.jpeg";

const Card = () => {
  return (
    <>
      <div style={{ fontFamily:'Montserrat'}} className="bg-red-100" id="card"> 
        <div
          className="rounded-xl"
          style={{  }}
        >
          <div
            className="col-sm-4 pb-5 pt-5 mx-auto d-block col-xl-3 col-xxl-3 col-4  col-md-4 col-lg-3 "
            
          >
            <div
              className="card rounded-lg border-2 border-zinc-950 hovv bg-gradient-to-b from-zinc-800 via-indigo-700 to-zinc-800"
              style={{ }}
            >
             
              <img
                src={pic}
                style={{ objectFit: "cover" }}
                className=" border border-zinc-950  mx-auto d-block "
                alt="..."
              />
              <div className="card-body bg-gradient-to-b text-cyan-50 text-teal-300">
                <h5 className="card-title">
                <b style={{fontSize:'120%'}}>Swimming</b>
                </h5>
                <p className="card-text pb-3">
                  AQUA Festival will bring together swimming, everyone is
                  invited to join in fun swimming races, Team TRI2CHAMP,
                  Welcoming Everyone we cordially invite you to our very biggest
                  swimming event. AQUAFEST - SWIMATHON & AQUATHLON Chennai race
                  venue allows us to deliver a first-class event experience to
                  wrap up the 2023 season. 
                </p>
                <a
                  href="https://www.townscript.com/e/Aquafest-140333"
                  className="btn btn-primary bg-gradient-to-b from-emerald-600 to-indigo-900 hover:from:emerald-400 hover:to-indigo-700"
                  style={{}}
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
