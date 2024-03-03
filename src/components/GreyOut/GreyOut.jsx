import './GreyOut.css'

export default function GreyOut( { greyOut }) {
    return (
        <div className="grey-out" style={{display: greyOut ? 'flex' : 'none'}}>

        </div>
    )
}