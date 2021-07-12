import React from "react";
import pic from "../img/personal.jpg";

function Introduction() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <img src={pic} alt="" className="round" />
        </div>
        <div className="col-lg-3">
          <p>
            In my journey towards mastering React, I found that creating games
            with it gives a more challenging way of testing my skills. Here are
            a few games I've had the pleasure of creating. Enjoy playing them.
            If you feel like there is something I've left out or something you
            would like for me to do, feel free to reach out to me
            @ike.okerenwogba@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
