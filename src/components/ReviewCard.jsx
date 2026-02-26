function ReviewCard({ review }) {
  const { id, name, vote, text } = review;
  return (
    <div className="card mb-3 bg-dark text-white border-light">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{text}</p>
        <span className="badge bg-success">voto: {vote}</span>
      </div>
    </div>
  );
}

export default ReviewCard;
