/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React from "react";
import {Input} from "@nextui-org/react";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
import whiteCar from "../../assets/evoque-white.png";
import car2 from "../../assets/pathfinder-nissan.png";
import car3 from "../../assets/toyota tacoma.png";
import car4 from "../../assets/ford-expedition.png";
import car5 from "../../assets/volkswagen-atlas.png";
import car6 from "../../assets/dmax-dc.png";

const carList = [
  {
    name: "Range Rover Evoque SUV ",
    subname: "Land Rover",
    price: 250,
    image: whiteCar,
    aosDelay: "0",
  },
  {
    name: "Pathfinder 2023",
    subname: "Nissan",
    price: 140,
    image: car2,
    aosDelay: "500",
  },
  {
    name: "Tacoma TRD PRO 2024",
    subname: "Toyota",
    price: 200,
    image: car3,
    aosDelay: "1000",
  },
  {
    name: "Expedition XLT",
    subname: "Ford",
    price: 230,
    image: car4,
    aosDelay: "700",
  },
  {
    name: "Atlas 2.0T",
    subname: "Volkswagen",
    price: 120,
    image: car5,
    aosDelay: "800",
  },
  {
    name: "D-MAX Double Cap",
    subname: "Isuzu",
    price: 150,
    image: car6,
    aosDelay: "1000",
  },
];

const CarList = () => {
  return (
    <div className="pb-24">
      <div className="container">
        {/* encabezado */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Flota de vehículos
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-lg pb-10 font-mono mb-3 text-neutral-700 font-bold">
          Categorias
        </p>
        <p data-aos="fade-up" aos-delay="400" className="text-4xl pb-10 font-serif mb-3 text-emerald-400 font-bold">
          SUV
        </p>
        {/* lista de carros */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data) => (
              // eslint-disable-next-line react/jsx-key
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-emerald-400 p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[120px] object-contain sm:translate-x-1 group-hover:sm:translate-x-6 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-emerald-400 font-semibold">{data.name}</h1>
                  <h2 className="text-emerald-900 font-semibold text-sm">{data.subname}</h2>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>${data.price} / Día</p>
                    {/* boton de prueba para registro de conductor */}
                    <Popover placement="right">
                        <PopoverTrigger>
                          <Button className="text-emerald-900 font-mono font-semibold text-base w-24 rounded-full bg-auto bg-emerald-400 border border-emerald-400 hover:border-emerald-900">Alquilar</Button>
                        </PopoverTrigger>
                      <PopoverContent>
                        <div className="px-2 py-2 bg-gray-300 rounded-md border border-gray-400">
                          <div className="mb-2 text-small text-center font-bold text-gray-500">Datos del conductor</div>
                          <Input
                            type="text"
                            class="mb-2 rounded-lg" placeholder="   Nombre"
                          />
                          <Input
                            type="text"
                            class="mb-2 rounded-lg" placeholder="   Apellido"
                          />
                          <Input
                            type="text"
                            class="rounded-lg" placeholder="   Edad"
                          />
                          <Button className="px-6 ml-12 mt-3 text-emerald-900 font-mono font-semibold text-sm w-17 rounded-full bg-auto bg-emerald-400 border border-emerald-400 hover:border-emerald-900">
                            Enviar
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CarList;
