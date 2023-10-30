import { Link } from 'react-router-dom'
import { ReviewRate } from '../stay-reviews/ReviewRate'
import { DatePickerModal } from './DatePickerModal'
import { useState } from 'react'
import { GuestSelect } from './GuestSelect'

export function OrderModal({ stay, dateRangeParams, guestsParams }) {
    const { price, reviews } = stay
    const [isDatePickerModalOpen, setDatePickerModalOpen] = useState(false)
    const [isGuestSelectModalOpen, setGuestSelectModalOpen] = useState(false)

    const order = {
        startDate:"2025/10/15",
        endDate:"2025/10/17",
        adults: 1,
        children:2
    }
    const orderUrl= new URLSearchParams(order).toString()


    function handleOnClickDatePicker(ev) {
        ev.stopPropagation()
        setDatePickerModalOpen(!isDatePickerModalOpen)
    }

    return (
        <div className="order-modal">
            <header className="order-modal-header">
                <div className="price-per-night">
                    <span className="price">${price} </span>
                    <span className="night">night</span>
                </div>
                <div className="reviews">
                    <ReviewRate reviews={reviews} />
                    <span className="seperator">·</span>
                    <span>{reviews.length} reviews</span>
                </div>
            </header>
            <div className="order-edit-container">
                <div className="date-picker flex" onClick={handleOnClickDatePicker}>
                    <div className="check-in flex column">
                        <span>CHECK-IN</span>
                        <span>Add date</span>
                    </div>
                    <div className="checkout flex column">
                        <span>CHECKOUT</span>
                        <span>Add date</span>
                    </div>
                </div>
                <GuestSelect
                    isGuestSelectModalOpen={isGuestSelectModalOpen}
                    setGuestSelectModalOpen={setGuestSelectModalOpen}
                    guestsParams={guestsParams}
                />
            </div>
            <Link to={`/stay/${stay._id}/order?${orderUrl}`}>
                <button className="reserve btn scale">Reserve</button>
            </Link>
            {isDatePickerModalOpen && (
                <DatePickerModal
                    isDatePickerModalOpen={isDatePickerModalOpen}
                    setDatePickerModalOpen={setDatePickerModalOpen}
                    dateRangeParams={dateRangeParams}
                />
            )}
        </div>
    )
}