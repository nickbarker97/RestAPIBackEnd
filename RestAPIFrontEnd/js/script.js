const contactList = document.querySelector('#contactList');
fetch('http://localhost:3000/api/getContact')
    .then(res => res.json())
    .then((contacts) =>{
        let dataFeed = contacts.map((contact)=>{
            return `
            <div class="col s12">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">${contact.name}</span>
                        <p>${contact.email}</p>
                        <p>${contact.number}</p>
                    </div>
                </div>
            </div>
            
            `
        }).join('');
        contactList.innerHTML = dataFeed;
        console.log(contacts);
    })