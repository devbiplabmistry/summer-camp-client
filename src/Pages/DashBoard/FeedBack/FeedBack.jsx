const FeedBack = () => {
    const handleFeedBack = (event) => {
      event.preventDefault();
      const feedback = event.target.elements.feedBack.value;
      fetch('https://summer-school-server-psi.vercel.app/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feedback }), 
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    };
  
    return (
      <>
        <form className="text-center mx-auto my-20" onSubmit={handleFeedBack}>
          <input
            name="feedBack"
            type="text"
            className="textarea textarea-primary text py-4"
            placeholder="write feedback"
          ></input>
          <input
            className="btn btn-primary btn-outline block mx-auto my-4"
            type="submit"
            value="submit"
          />
        </form>
      </>
    );
  };
  
  export default FeedBack;
  