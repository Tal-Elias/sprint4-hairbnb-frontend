import { useEffect } from "react";
import { ImageCarousel } from "./ImageCarousel";
import { ReviewRate } from "./stay-reviews/ReviewRate";
export function StayPreview({ stay, dates, onWishlist, user }) {

    function randomDateRange() {
        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];

        const startMonthIndex = Math.floor(Math.random() * 12);
        const endMonthIndex = Math.floor(Math.random() * 12);

        const startDate = Math.floor(Math.random() * 31) + 1;
        const endDate = Math.floor(Math.random() * 31) + 1;

        const startMonth = months[startMonthIndex];
        const endMonth = months[endMonthIndex];

        return `${startMonth} ${startDate} – ${endMonth} ${endDate}`;
    }

    function onClickHeart(ev) {
        ev.preventDefault()
        onWishlist(stay._id)

    }
    const fillColor = user?.wishlist?.includes(stay._id) ? 'onWishlist' : ''
    return (
        <article className="stay-preview">
            <ImageCarousel imgs={stay.imgUrls} />
            <svg className={"stay-heart " + fillColor} onClick={onClickHeart} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" ><path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path></svg>
            <div className="stay-info">
                <div className="stay-loc">{stay.loc.city}, {stay.loc.country}</div>
                <ReviewRate reviews={stay.reviews} />
                <div className="stay-name">{stay.name}</div>
                <div className="stay-dates">{dates || randomDateRange()}</div>
                <div className="stay-price">$ {stay.price} <span className="night">night</span></div>
            </div>
        </article>
    )
}