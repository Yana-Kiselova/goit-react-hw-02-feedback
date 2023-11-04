export const Feedback = ({ keys, feedbackAdd }) => {
  return (
    <>
      {keys.map(key => (
        <button type="button" key={key} onClick={() => feedbackAdd(key)}>
          {key}
        </button>
      ))}
    </>
  );
};
