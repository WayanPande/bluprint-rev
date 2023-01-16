import React from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { BsCheckAll, BsHourglassSplit } from "react-icons/bs";
import OrderCard from "../../card/OrderCard";

const Order = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3 mt-10">
        <h1 className="text-xl font-bold">My Orders</h1>
        <p>
          Check your most recent orders, get status updates and see completed
          deliveries.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <OrderCard
          key={1}
          price="50.000"
          status="Menunggu Konfirmasi"
          type="Mozaik"
          img="/image/mozaik/ade-rai.png"
          icon={<BsHourglassSplit />}
        />
        <OrderCard
          key={2}
          price="75.000"
          status="Dalam Pengerjaan"
          type="Flower"
          img="/image/flower/Desta.png"
          icon={<BiLoaderCircle />}
        />
        <OrderCard
          key={3}
          price="50.000"
          status="Selesai"
          type="Original"
          img="/image/original/andrew.png"
          icon={<BsCheckAll />}
        />
      </div>
    </div>
  );
};

export default Order;
