import { ai } from "../assets";

const Demo = () => {
  return (
    <section className="mt-16 w-full max-w-xl">
      {/* iframe */}
      <div className="iframe-container">
        <img
          src={ai}
          alt="My Image"
          className="my-8"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </section>
  );
};

export default Demo;
