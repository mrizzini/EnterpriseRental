var rentalInfo = {
    renterName: [],
    carType: [],
    addRenter: function (renterName, carType) {
        this.renterName.push({
        renterName: renterName,
        });
        this.carType.push({
        carType: carType
        });
    }
}

var business = {
    carType: 'Economy',
    carType2: 'Midsize',
    economyCar: 15,
    economyCarBooked: 0,
    economyCarPrice: "$20 per day",
    midsizeCar: 10,
    midsizeCarBooked: 0,
    midsizeCarPrice: "$30 per day",
    economyAvailable: function () {
        return this.economyCar - this.economyCarBooked;
        },
    midsizeAvailable: function () {
        return this.midsizeCar - this.midsizeCarBooked;
        },
    bookEcon: function() {
        return this.economyCarBooked++;
     },
     
    bookMid: function() {
        return this.midsizeCarBooked++;
     },
    };
    
    function rentEcon() {
        business.bookEcon();
        document.getElementById('economyAvail').innerHTML = business.economyAvailable();
     }
     
    function rentMid() {
        business.bookMid();
        document.getElementById('midsizeAvail').innerHTML = business.midsizeAvailable();
     }
    
     function rentCar() {
        var renterName = document.getElementById('name').value;
        var carType = document.getElementById("carChoice").value;
        if (renterName == "") {
            alert ('Must enter name')
        } 
        else if ((carType == 1) && (business.economyAvailable() !== 0)) {
            rentEcon();
            rentalInfo.addRenter(renterName, carType);
            console.log(rentalInfo);
        }  
        else if (carType == 2  && (business.midsizeAvailable() !== 0)) {
            rentMid();
            rentalInfo.addRenter(renterName, carType);
            console.log(rentalInfo);
        } else if (carType == 0) { alert ('Must chose a car type to complete booking');
        } 
      }
    
    function showInfo () {
         var carType = document.getElementById("carChoice").value;
         if (carType == 1) {
              document.getElementById('economy').innerHTML=business.carType;
              document.getElementById('economyPrice').innerHTML=business.economyCarPrice;
              document.getElementById('economyAvail').innerHTML=business.economyAvailable();
              document.getElementById('midsize').innerHTML= "";
              document.getElementById('midsizePrice').innerHTML= "";
              document.getElementById('midsizeAvail').innerHTML= "";
         }  if (carType == 2) {
              document.getElementById('midsize').innerHTML=business.carType2;
              document.getElementById('midsizePrice').innerHTML=business.midsizeCarPrice;
              document.getElementById('midsizeAvail').innerHTML=business.midsizeAvailable();
              document.getElementById('economy').innerHTML= "";
              document.getElementById('economyPrice').innerHTML= "";
              document.getElementById('economyAvail').innerHTML= "";
          }  if (carType == 0) {
              document.getElementById('economy').innerHTML= "";
              document.getElementById('economyPrice').innerHTML= "";
              document.getElementById('economyAvail').innerHTML= "";
              document.getElementById('midsize').innerHTML= "";
              document.getElementById('midsizePrice').innerHTML= "";
              document.getElementById('midsizeAvail').innerHTML= "";
            }
        }
        
      