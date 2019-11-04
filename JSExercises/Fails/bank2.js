class bank {
    constructor(customer){
      this.customer = customer;
    }

}



Bank.prototype.addCustomer = function(customer) {
    this.name = name;
    this.balance = balance;
  }





Bank.prototype.printAccount = function(amount) {
  if (this._isPositive(amount)) {
    this.balance += amount;
    console.info(`Account: ${this.name} balance is ${this.balance}`);
    return true;
  }
  return false;
}


Account.prototype.deposit = function(amount) {
  if (this._isPositive(amount)) {
    this.balance += amount;
    console.info(`Deposit: ${this.name} new balance is ${this.balance}`);
    return true;
  }
  return false;
}

Account.prototype.withdraw = function(amount) {
  if (this._isAllowed(amount)) {
    this.balance -= amount;
    console.info(`Withdraw: ${this.name} new balance is ${this.balance}`);
    return true;
  }
  return false;
}

Account.prototype._isPositive = function(amount) {
  const isPositive = amount > 0;
  if (!isPositive) {
    console.error('Amount must be positive!');
    return false;
  }
  return true;
}




var bank = new Bank('Sheldon');
console.log(bank.addCustomer('Sheldon'));
bank.printAccount('Sheldon');
bank.deposit('Sheldon', 10);
bank.printAccount('Sheldon');
bank.addCustomer('Raj');
bank.printAccount('Raj');
bank.deposit('Raj', 10000);
bank.printAccount('Raj');
bank.withdraw('Raj', 100);
bank.printAccount('Sheldon'); // this should print 'Sheldon account is 10'
bank.printAccount('Raj'); // this should print 'Raj account is 9900'