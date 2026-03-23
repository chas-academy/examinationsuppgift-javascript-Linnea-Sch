/* 
Författare: Linnéa Schögarne
Antagningsprov Javascript Chas Academy
Budget- och utgiftskoll
*/

const html_description_input = document.getElementById("desc");
const html_amount_input = document.getElementById("amount")

const html_income_button = document.getElementById("incomeBtn");
const html_expense_button = document.getElementById("expenseBtn");
const html_income_list = document.getElementById("incomeList");
const html_expense_list = document.getElementById("expenseList");
const html_balance = document.getElementById("balance");

let balance = 0;

function button_click(income_or_expense){
    // Hämtar värdena som användaren skrivit in
    description = html_description_input.value;
    amount = html_amount_input.value;

    if (description == "" || amount == "" || isNaN(amount)){
        // felhantering, som en fin text som dyker upp eller liknande
        console.log("Input-fälten är felaktigt ifyllda")
        console.log(description)
        console.log(amount)
        console.log(isNaN(amount))
    }else{
        // Skapar ett nytt html-element med rätt text
        const new_element = document.createElement('p');
        new_element.innerHTML = description + " - " + amount + " kr (" + income_or_expense + ")"
        
        // lägger in det nya html-elementet i rätt lista 
        if (income_or_expense == "Inkomst"){
            html_income_list.appendChild(new_element);
            console.log("Inkomst")
            console.log(description)
            console.log(amount)
            UpdateSaldo(income_or_expense, amount)
        }
        else if(income_or_expense == "Utgift"){
            html_expense_list.appendChild(new_element);
            console.log("Utgift");
            console.log(description);
            console.log(amount);
            UpdateSaldo(income_or_expense, amount);
        }
    }
}

function UpdateSaldo(income_or_expense, amount){
    if (income_or_expense == "Inkomst"){
        balance += Number(amount);   
        UpdateSaldoHtml();
    }else if (income_or_expense == "Utgift"){
        balance -= Number(amount);
        UpdateSaldoHtml();
    }
}

function UpdateSaldoHtml(){
    html_balance.innerHTML = "";
    html_balance.innerHTML = balance;
    console.log(balance)
}

html_income_button.addEventListener("click", () => {
    button_click("Inkomst")
})

html_expense_button.addEventListener("click", () => {
    button_click("Utgift")
})
