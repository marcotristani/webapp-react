function ReviewCard({ review }) {
  const { id, name, vote, text } = review;
  return (
    <div class="card mb-3 bg-dark text-white border-light">
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{text}</p>
        <span class="badge bg-success">voto: {vote}</span>
      </div>
    </div>
  );
}

export default ReviewCard;
