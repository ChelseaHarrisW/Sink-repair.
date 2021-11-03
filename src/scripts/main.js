import { fetchRequests} from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"
import { deleteRequest} from "./dataAccess.js"
const mainContainer = document.querySelector("#container") //code to display html to the container

const render = () => { //code that gives further instructions for the json fetch requests
    fetchRequests().then( //we use the then function to make specifications to the promice
        () => {
            mainContainer.innerHTML = SinkRepair() // inner html is going to be the sink repair fx in the end
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

mainContainer.addEventListener("click", click => { //Event listers
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--") 
        deleteRequest(parseInt(requestId))
    }
})
