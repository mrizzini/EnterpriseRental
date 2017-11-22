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
    cars: [
        {
        model: 'Economy',
        available: 15,
        booked: 0,
        price: "$20 per day",
        },
        {
        model: 'Midsize',
        available: 10,
        booked: 0,
        price: "$30 per day",
        },
        {
        model: 'Limo',
        available: 5,
        booked: 0,
        price: "$100 per day"
        }
    ],
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
        // console.log(type);
        var test = document.getElementById('carOptions').value;
        var test1 = [parseInt(test)];
       
        // document.getElementById('price').innerHTML = business.cars[type].price;
        // document.getElementById('available').innerHTML = business.cars[type].available;
        document.getElementById('price').innerHTML = business.cars[test1].price;
        document.getElementById('available').innerHTML = business.cars[test1].available;
        }
      
    // for (var i = 0; i < business.cars.length; i++) {
            var selectBtn = document.createElement('SELECT');
        
            // selectBtn.setAttribute('type', 'select');
            // selectBtn.setAttribute('name', 'carType');
            selectBtn.setAttribute('id', 'carOptions');
            selectBtn.setAttribute('onchange', 'showInfo()');
            document.getElementById('radioSection').appendChild(selectBtn);
                
                
            for (var i = 0; i < business.cars.length; i++) { 
               
            var selectOption = document.createElement('OPTION');
            selectOption.innerHTML = business.cars[i].model;
            selectOption.setAttribute('value', i);
            // selectOption.setAttribute('onchange', 'showInfo(' + i + ')');
        // var radioBtn = document.createElement("INPUT");
        // radioBtn.setAttribute('type', 'radio');
        // radioBtn.setAttribute('name', 'carType');
        // radioBtn.setAttribute('value', i);
        // radioBtn.setAttribute('id', 'room' + i);
        // radioBtn.setAttribute('onclick', 'showInfo(' + i + ')');
        // var radioLbl = document.createElement('LABEL');
        // radioLbl.innerHTML = business.cars[i].model;
        // document.getElementById('radioSection').appendChild(selectBtn);
        document.getElementById('carOptions').appendChild(selectOption);
       
    }
     
    document.getElementById('reservationForm').onsubmit = function (event) {
        event.preventDefault();
    };