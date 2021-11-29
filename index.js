var customerName = 'bob'

function upperCaseCustomerName(customerName) {
    console.log(customerName.toUpperCase());
}

function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer() {
     bestCustomer = 'maybe bob';
    return bestCustomer;
}

const leastFavoriteCustomer = 'david'

function changeLeastFavoriteCustomer () {
    leastFavoriteCustomer = 'nicole';
    return leastFavoriteCustomer;
}