import React from 'react';
import golamrasul from "../../Assets/golamrasul.png";
const MenuSection = () => {
    return (
        <div class="card mt-10 ">
          <figure class=" py-3 avatar">
            <div className="w-24  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={golamrasul} alt="Shoes" class="rounded-xl" />
            </div>
          </figure>
          <div class="card-body items-center text-center">
          <h2 className="font-mono text-3xl font-bold mt-[-30px]">GR NISAN</h2>
          </div>
        </div>
    );
};

export default MenuSection;