
import { getRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()
    const convertRequestToListElement = (request) => { // defining a fx varible...this fx is returning the discrription from the request we first have to get the whole obj then interate through
        //we are passing request through as a parameter because the user input is requires
        return `
        <li>
            ${request.description}
            <button class="request__delete"
                    id="request--${request.id}">
                Delete
            </button>
        </li>
    `
    
     
        }

    let html = `
        <ul>
            ${
                requests.map(convertRequestToListElement).join("")
            }
        </ul>
    `
    return html
}

//10. let html, 11. be an unoredred list 12.that returns a copy (.map() of the convertRequestToListElements function. see the fx on line 5 for context)
// 17. return the html



