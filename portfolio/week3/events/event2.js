let businesses = [
    {
        "name": "kdcooperation",
        "number": "+22891563448",
        "location" : "Souza Netime",
        "service" : "Web Development"
    },
    {
        "name": "Godson Market",
        "number": "+22870274340",
        "location" : "Agoe",
        "service" : "Drug Store"
    },
    {
        "name": "TalentCast Global",
        "number": "+22890986539",
        "location" : "Anfame",
        "service" : "Business and Enterprises"
    },
    {
        "name": "Repins",
        "number": "+22891563448",
        "location" : "Wuiti",
        "service" : "Education and Language"
    },
    {
        "name": "JGK",
        "number": "+22892703448",
        "location" : "Akodessewa",
        "service" : "Local Company Development"
    },
    {
        "name": "Manaa Market",
        "number": "+22893474325",
        "location" : "Adidogome",
        "service" : "Dressing Store"
    },
    {
        "name": "Astra Business",
        "number": "+22891567948",
        "location" : "Tokoin",
        "service" : "Art and Design"
    }
];
function createCard(businessList) {
    businessList.forEach(business => {
        let card = document.createElement('section');
        let h1 = document.createElement("h1");
        let businessNumber = document.createElement("p");
        let businessLocation = document.createElement("p");
        let businessService = document.createElement("p");
        

        h1.textContent = `Name of Business: ${business.name}`;
        businessNumber.textContent = `Phone Number: ${business.number}`;
        businessLocation.textContent = `Location: ${business.location}`;
        businessService.textContent = `Service: ${business.service}`;
        

        card.appendChild(h1);
        card.appendChild(businessNumber);
        card.appendChild(businessLocation);
        card.appendChild(businessService);
    

        document.querySelector('div.cards').appendChild(card);        
    });
    

}
createCard(businesses);
