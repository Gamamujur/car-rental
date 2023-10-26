import { Car } from "./Component.js";

const driverElement = document.getElementById("tipeDriver");
const tanggalElement = document.getElementById("tanggal");
const waktuElement = document.getElementById("waktu");
const penumpangElement = document.getElementById("jumlahPenumpang");
const buttonElement = document.getElementById("search-car");
const carContainer = document.getElementById("cars-container");

let driverValue;
let waktuValue;
let tanggalValue;
let timeString;
let penumpangValue;
let availableCars;

const carsData = localStorage.getItem("CARS");
const parsedCars = JSON.parse(carsData);
const cloneCars = [...parsedCars];

const newCarData = cloneCars.map((car, index) => {
  const driverType = index % 2 === 0 ? "dengan supir" : "tanpa supir";
  return {
    ...car,
    driverType,
  };
});

driverElement.addEventListener("change", checkData);
tanggalElement.addEventListener("change", checkData);
waktuElement.addEventListener("change", checkData);
penumpangElement.addEventListener("change", checkData);

function checkData() {
  driverValue = driverElement.value;
  waktuValue = waktuElement.value;
  tanggalValue = tanggalElement.value;
  penumpangValue = Number(penumpangElement.value);
  timeString = new Date(`${tanggalValue} ${waktuValue}`);
}

buttonElement.addEventListener("click", () => {
  if (waktuValue === "" || tanggalValue === "" || driverValue === "") {
    return;
  }

  carContainer.innerHTML = "";

  if (penumpangValue !== 0) {
    availableCars = newCarData.filter(
      (car) =>
        car.driverType === driverValue &&
        new Date(car.availableAt) > timeString &&
        car.capacity === penumpangValue
    );
  } else {
    availableCars = newCarData.filter(
      (car) =>
        car.driverType === driverValue && new Date(car.availableAt) > timeString
    );
  }

  availableCars.forEach((car) => {
    const newCar = new Car(car);
    carContainer.insertAdjacentHTML("beforeend", newCar.render());
  });
});
