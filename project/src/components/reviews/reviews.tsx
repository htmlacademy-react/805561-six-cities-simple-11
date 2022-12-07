import {TReview} from '../../types/types';
import Review from '../review/review';
import FormReviews from '../form-reviews/form-reviews';

type ReviewsProps = {
  reviews:TReview[];
}

const Reviews = ({reviews}: ReviewsProps): JSX.Element => (
  <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
    <ul className="reviews__list">
      {reviews.map((review: TReview) =>
        (
          <Review
            key={review.id}
            review={review}
          />
        ))}
    </ul>
    <FormReviews/>
  </section>


);

export default Reviews;
