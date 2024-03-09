/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React from "react";
import {Input} from "@nextui-org/react";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";

const carList = [
  {
    name: "BMW UX",
    price: 100,
    image: whiteCar,
    aosDelay: "0",
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
    aosDelay: "500",
  },
  {
    name: "BMW UX",
    price: 100,
    image: car3,
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
          Lorem ipsum dolor
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iure
          nemo ab?
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
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-emerald-400 font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>${data.price}/Day</p>
                    {/* boton de prueba para registro de conductor */}
                    <Popover placement="right">
                        <PopoverTrigger>
                          <Button color="#3BD4AE" className="w-24 rounded-md bg-emerald-400">Alquilar</Button>
                        </PopoverTrigger>
                      <PopoverContent>
                        <div className="px-1 py-2 bg-gray-300 rounded-md border-black		">
                          <div className="text-small w-48 font-bold">Datos del conductor</div>
                          <div className="text-tiny">
                          <Input
                            type="nombre"
                            placeholder="Nombre"
                            className="max-w-xs rounded-md"
                          />
                          <Input
                            type="apellido"
                            placeholder="Apellido"
                            className="max-w-xs mt-2 rounded-md"
                          />
                          <Input
                            type="edad"
                            placeholder="Edad"
                            className="max-w-xs mt-2 rounded-md"
                          />
                          <Button className="bg-emerald-400 rounded-md w-14 mt-2">
                            Aplicar
                          </Button>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">
                  12Km
                </p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CarList;
