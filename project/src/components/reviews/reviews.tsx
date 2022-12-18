import {TReview} from '../../types/types';
import Review from '../review/review';
import FormReviews from '../form-reviews/form-reviews';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus, REVIEWS_MAX_COUNT} from '../../const';


const Reviews = (): JSX.Element => {

  const {authorizationStatus, reviews} = useAppSelector((state) => state);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  return(
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">
          {(reviews.length < REVIEWS_MAX_COUNT) ? reviews.length : REVIEWS_MAX_COUNT}
        </span>
      </h2>
      <ul className="reviews__list">
        {reviews.slice().reverse().slice(0, REVIEWS_MAX_COUNT).map((review: TReview) =>
          (
            <Review
              key={review.id}
              review={review}
            />
          ))}
      </ul>
      {isAuthorized && <FormReviews/>}
    </section>
  );

};

export default Reviews;
