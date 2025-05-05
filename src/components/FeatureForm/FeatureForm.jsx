import React from 'react'
import { useNavigate } from 'react-router'

function FeatureForm() {
    const navigate = useNavigate()
    const {id} = useParams()
    const [features,setFeatures] = useState([])

    function handleCancel (){
        console.log("handle cancel")
        navigate(-1)
    }

    return (
        <div>
            <div class="modal">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                <p class="modal-card-title">{props.titleVerb} Features List </p>
                <button class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                {/* <!-- Content ... --> */}
                </section>
                <footer class="modal-card-foot">
                <div class="buttons">
                    <button class="button is-success">Save changes</button>
                    <button class="button">Cancel</button>
                </div>
                </footer>
            </div>
            </div>
        </div>
    )
}
export default FeatureForm