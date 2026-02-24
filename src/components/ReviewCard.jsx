function ReviewCard({ review }) {
  const { id, name, vote, text } = review;
  return (
    <div className="card-reviews">
      <h3>{name}</h3>
      <p>voto: {vote}</p>
      <p>{text}</p>
    </div>
  );
}

export default ReviewCard;
