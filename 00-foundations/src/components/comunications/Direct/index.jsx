import DirectChild from "../DirectChild"

export default () => (
    <div className="direct-comunication-parent">
        <DirectChild text="Exemple of text directly sent" number={50} boolean={true} />
        <DirectChild text="Exemple of text directly sent but different" number={20} boolean={false} />
    </div>
)