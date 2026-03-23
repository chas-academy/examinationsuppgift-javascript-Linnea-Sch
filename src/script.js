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


function button_click(income_or_expense){
    // Hämtar värdena som användaren skrivit in
    description = html_description_input.value;
    amount = html_amount_input.value;

    // Skapar ett nytt html-element med rätt text
    const new_element = document.createElement('p');
    new_element.innerHTML = description + " - " + amount + " kr (" + income_or_expense + ")"
    
    // lägger in det nya html-elementet i rätt lista baserat på 
    if (income_or_expense == "Inkomst"){
        html_income_list.appendChild(new_element);
    }
    else if(income_or_expense == "Utgift"){
        html_expense_list.appendChild(new_element);
    }
        
}

html_income_button.addEventListener("click", () => {
    button_click("Inkomst")
})

html_income_button.addEventListener("click", () => {
    button_click("Utgift")
})


