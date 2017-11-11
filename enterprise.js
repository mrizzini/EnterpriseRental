var business = {
    carType: 'Economy',
    carType2: 'Midsize',
    economyCar: 90,
    midsizeCar: 180,
    economyAvailable: function () {
        this.economyCar = this.economyCar--;
        return this.economyCar--;
        },
    midsizeAvailable: function () {
        this.midsizeCar = this.midsizeCar--;
        return this.midsizeCar--;
        },
        
    availability: function () {
        document.getElementById('economy').innerHTML = business.carType;
        document.getElementById('midsize').innerHTML = business.carType2;
        document.getElementById('economyAvail').innerHTML = business.economyCar;
        document.getElementById('midsizeAvail').innerHTML = business.midsizeCar;
        }
        

    // rentEconomy: function () {
    //     document.getElementById('economyAvail').innerHTML = business.economyAvailable();
    //     },

    // rentMid: function () {
    //     document.getElementById('midsizeAvail').innerHTML = business.midsizeAvailable();
    //     }
    };
    
 

// function availability () {
//     document.getElementById('economy').innerHTML = business.carType;
//     document.getElementById('midsize').innerHTML = business.carType2;
//     document.getElementById('economyAvail').innerHTML = business.economyCar;
//     document.getElementById('midsizeAvail').innerHTML = business.midsizeCar;
// }

// function rentEconomy () {
//     document.getElementById('economyAvail').innerHTML = business.economyAvailable();
// }

// function rentMid () {
//     document.getElementById('midsizeAvail').innerHTML = business.midsizeAvailable();
// }


