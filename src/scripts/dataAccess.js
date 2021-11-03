const applicationState = {
requests: []
}
const mainContainer = document.querySelector("#container")

const API = "http://localhost:8088"

export const fetchRequests = () => { // defining a var. fetchRequest... fetch is a way to get data on the web. 
    return fetch(`${API}/requests`) //step 1. fetch and input the site, or api, what ever were fetching. we will get a promice 
        .then(response => response.json()) // step 2. using the then method when the promice of data is recived. the promice (responce from the web) will be returned. *we are getting json back here this is why .json() is invoked here. we get another promice here (this is parsedData)
        .then( // step 3. we use the second promice and tell it what to do. here were passing it in as a parameter and then storing this in the application state.
            (serviceRequests) => {
                // Store the external state in application state (line 1 where request are housed here in js.)
                applicationState.requests = serviceRequests
            }
        )
}
//^^ this intire function is being exported to main.js to be used as a 
export const getRequests = () => { //returning a copy of resuest to the applications state
    return applicationState.requests.map(Requests => ({...Requests}))
}

export const sendRequest = (userServiceRequest) => {
    const fetchOptions = { // not sure yet here:
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/requests`, fetchOptions)// 
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteRequest = (id) => { // delete button
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

