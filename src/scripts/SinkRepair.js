import { ServiceForm } from "./ServiceForm.js"
import { Requests } from "./request.js"

export const SinkRepair = () => {
    return `
        <h1>Chelsea's Sink Repair</h1>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Requests()}
        </section>
    `
}
