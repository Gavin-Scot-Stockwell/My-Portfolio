import light from "../style/highlight";
export default function Email() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted successfully!');
  };

  return (
    <div>
      <h3 style={light.place}>Enter your email</h3>
      <p>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your email" required />
          <input type="submit" value="Submit" />
        </form>
      </p>
    </div>
  );
}
