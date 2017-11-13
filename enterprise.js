var business = {
    carType: 'Economy',
    carType2: 'Midsize',
    economyCar: 90,
    economyCarBooked: 0,
    midsizeCar: 180,
    midsizeCarBooked: 0,
    economyAvailable: function () {
        return this.economyCar - this.economyCarBooked;
        },
    midsizeAvailable: function () {
        return this.midsizeCar - this.midsizeCarBooked;
        },
        
    availability: function () {
        document.getElementById('economy').innerHTML = business.carType;
        document.getElementById('midsize').innerHTML = business.carType2;
        document.getElementById('economyAvail').innerHTML = business.economyCar;
        document.getElementById('midsizeAvail').innerHTML = business.midsizeCar;
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
    