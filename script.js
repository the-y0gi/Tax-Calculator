 
    const taxForm = document.querySelector('form');
    const container = document.querySelector(".container");


    taxForm.addEventListener('submit' , (e)=>{
        const annualIncome = parseFloat(document.getElementById('annual').value);
        const extraIncome = parseFloat(document.getElementById('extra').value);
        const age = parseInt(document.getElementById('age').value);
        const deductions = parseFloat(document.getElementById('deduction').value);

        e.preventDefault();
        let totalAmount = 0;
        totalAmount = annualIncome + extraIncome - deductions;

        taxCalculator(totalAmount,age);

        taxForm.reset();
    });

 

    function taxCalculator(totalIncome, age) {
        let tax = 0;
    
        if (totalIncome < 800000) {
            show("no-tax");
        } else {
            if (age < 40) {
                tax = (totalIncome - 800000) * 0.3;
            } else if (age >= 40 && age < 60) {
                tax = (totalIncome - 800000) * 0.4;
            } else if (age >= 60) {
                tax = (totalIncome - 800000) * 0.1;
            }
            show(tax);
        }
    }
    


    function show(value) {
       
        const createDiv = document.createElement("div");
        createDiv.setAttribute("class", "overall-income popup");
    
        const createH2 = document.createElement("h2");
        createH2.innerText = "Your overall income will be";
        createDiv.append(createH2);
    
        const createH3 = document.createElement("h3");
        createH3.innerText = value;
        createDiv.append(createH3);
    
        const createH4 = document.createElement('h4');
        createH4.innerText = "after tax deduction";
        createDiv.append(createH4);
    
        const closeBtn = document.createElement("button");
        closeBtn.innerText = "Close";
        closeBtn.setAttribute("class", "delete-btn");
        createDiv.append(closeBtn);
    
       
        document.body.appendChild(createDiv);
    
       
        closeBtn.addEventListener("click", () => {
            
            container.style.filter = "none";
          
            createDiv.remove();
        });
    
       
        container.classList.add("blur-background");
    }
    