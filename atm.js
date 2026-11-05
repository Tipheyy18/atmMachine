let correctPin = 1234;
let accountBalance = 50000;
let attempts = 3;
let accessGranted = false;

let userPin = parseInt(
  prompt("Welcome to JavaScript Bank!\nEnter your ATM PIN:"),
);

while (attempts > 0) {
  if (userPin === correctPin) {
    alert("PIN correct! Access granted.");
    accessGranted = true;
    break;
  } else {
    attempts--;

    if (attempts > 0) {
      alert("Incorrect PIN. Attempts remaining: " + attempts);
      userPin = parseInt(prompt("Enter your PIN again:"));
    } else {
      alert("Incorrect PIN. No attempts remaining.");
    }
  }
}

if (accessGranted) {
  let choice = parseInt(
    prompt(`
      WELCOME TO JAVASCRIPT BANK!\n
      1. Check Account Balance
      2. Withdraw Money
      3. Deposit Money
      4. Exit
      Select an option:,
    `)
  );

  switch (choice) {
    case 1:
      alert("Your account balance is ₦" + accountBalance);
      break;

    case 2:
      let withdrawalAmount = parseInt(
        prompt("Enter the amount you want to withdraw:"),
      );

      if (withdrawalAmount > 0) {
        if (withdrawalAmount <= accountBalance) {
          accountBalance = accountBalance - withdrawalAmount;

          alert(
            "Withdrawal successful!\n" +
              "Your remaining balance is ₦" +
              accountBalance,
          );
        } else {
          alert("Insufficient funds.");
        }
      } else {
        alert("Withdrawal amount must be greater than zero.");
      }

      break;

    case 3:
      let depositAmount = parseInt(
        prompt("Enter the amount you want to deposit:"),
      );

      if (depositAmount > 0) {
        accountBalance = accountBalance + depositAmount;

        alert(
          "Deposit successful!\n" + "Your new balance is ₦" + accountBalance,
        );
      } else {
        alert("Deposit amount must be greater than zero.");
      }

      break;

    case 4:
      alert("Thank you for banking with us. Goodbye!");
      break;

    default:
      alert("Invalid option. Please select 1, 2, 3, or 4.");
  }
}
