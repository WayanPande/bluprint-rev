export interface ModelData {
  type: string;
  img: string[];
  imgFrame: string;
}

export const mozaikData: ModelData = {
  type: "mozaik",
  img: [
    "/image/mozaik/rich-brian.jpg",
    "/image/mozaik/ade-rai.png",
    "/image/mozaik/ernest.jpg",
    "/image/mozaik/nunung.png",
    "/image/mozaik/reza.jpg",
    "/image/mozaik/tom.png",
    "/image/mozaik/bulan.jpg",
    "/image/mozaik/dewa.png",
    "/image/mozaik/junbintang.png",
    "/image/mozaik/maudy.jpg",
  ],
  imgFrame: "/image/mozaik/rich-brian-frame.jpg",
};

export const flowerData: ModelData = {
  type: "flower",
  img: [
    "/image/flower/thofu.png",
    "/image/flower/Desta.png",
    "/image/flower/Habiebie.png",
    "/image/flower/IkyLini.png",
    "/image/flower/podkesmas.png",
    "/image/flower/Ria.png",
  ],
  imgFrame: "/image/flower/thofu-frame.jpg",
};

export const originalData: ModelData = {
  type: "original",
  img: [
    "/image/original/billar.png",
    "/image/original/andrew.png",
    "/image/original/jedar.png",
    "/image/original/raffi.jpg",
  ],
  imgFrame: "/image/original/billar-frame.jpg",
};