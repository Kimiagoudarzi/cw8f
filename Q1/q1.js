function user(name, family, age, birthday,phoneNumber,countrystate,city,street,No,unit) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.birthday = birthday;
    this.phoneNumber =phoneNumber;
    this.countrystate = countrystate;
    this.city =city;
    this.street =street;
    this.No =No;
    this.unit = unit
  
    Object.defineProperty(this, "fullname", {
      set: function (value) {[
        this.name,
        this.family,
      ] = value.split(" ");
  },
      get: function () {
        return `${this.name} ${this.family}`;
      },
    });
  
    Object.defineProperty(this, "age1", {
      set: function (value) {
        this.age =value
  },
      get: function () {
        return`${this.age}` ;
      },
    });
  }
  
  let a = new user();
  a.fullname = "kimia goudarzi";
  a.age1 =21;
  console.log(a.fullname, a.age1);