import moment from "moment/moment";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="">
        <img className="mx-auto p-4" src="/public/logo.png"></img>
        <h2 className=" flex justify-center">This is my News Feed for the pepole</h2>
        <p className="text-2xl text-center p-2">{moment().format('MMMM D YYYY, h:mm:ss a')}</p>
      </div>
    </div>
  );
};

export default Header;
