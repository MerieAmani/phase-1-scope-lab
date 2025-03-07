var customerName = 'bob';

function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  return bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  return bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = 'bob';
  leastFavoriteCustomer = 'not bob';
}