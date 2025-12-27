import React from "react";
import serve from "../assets/img/serve.png";

export default function RecipePart() {
  return (
    <div>
      <div className="my-6 flex justify-between items-center *:text-[#A9A9A9] *:text-[13px] ">
        <div className="flex items-center gap-2">
          <img src={serve} alt="" />
          <p>Recipe</p>
        </div>
      </div>
      <div className="text-[11px] text-[#524949]">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod laborum
          eligendi incidunt ratione nemo hic recusandae qui eius. Magni cumque
          porro quam numquam? Facilis assumenda rem placeat facere beatae
          impedit! Magnam laudantium nobis aperiam vitae! Assumenda voluptates
          officia ab officiis veritatis ullam numquam odio necessitatibus
          debitis. Obcaecati quam consectetur magni, a labore nulla quia
          accusantium laudantium cum incidunt? Quis, neque. Commodi nihil quas
          atque optio minus eligendi dolor. Saepe unde, laborum eveniet non
          eligendi illo iste error, distinctio exercitationem voluptate modi
          dolor aperiam, similique officiis voluptatem rerum minus quidem.
          Dignissimos!
        </p>
      </div>
    </div>
  );
}
