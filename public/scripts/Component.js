class Component {
  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    if (this.constructor === Component) {
      throw new Error("Cannot create an instance of an abstract class.");
    }
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
          <div class="col-md-4">
          <div class="card" style="width: 18rem;">
          <img src="${
            this.image
          }" class="card-img-top" alt='${this.manufacture}' style="object-fit: cover;" height="250px" width="350px"/>          
          <div class="card-body">
            <h5 class="card-title" style="font-size:14px;">${this.manufacture} / ${this.model}</h5>
            <p class="card-text fw-bold" style="font-size:16px;">Rp ${this.rentPerDay.toLocaleString()} / hari</p>
            <p class="card-text" style="font-size:14px;">${this.description}</p>
            <div class="d-flex-row align-items-center">
              <div class="d-flex align-items-center mb-2">
                <i><img src="./images/fi_users.png"></i>
                <span class="ms-2" style="font-size:14px;">${
                  this.capacity
                } orang</span>
              </div>
              <div class="d-flex align-items-center mb-2">
                <i><img src="./images/fi_settings.png"></i>
                <span class="ms-2" style="font-size:14px;">${
                  this.transmission
                }</span>
              </div>
              <div class="d-flex align-items-center">
                <i><img src="./images/fi_calendar.png"></i>
                <span class="ms-2" style="font-size:14px;">Tahun ${
                  this.year
                }</span>
              </div>
            </div>
            <a href="#" class="btn btn-success mt-3 w-100">Pilih Mobil</a>
          </div>
        </div>

          </div>
        `;
  }
}

class Car extends Component {
  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    super({
      id,
      plate,
      manufacture,
      model,
      image,
      rentPerDay,
      capacity,
      description,
      transmission,
      available,
      type,
      year,
      options,
      specs,
      availableAt,
    });
  }
}

export { Car };
