import bookingimage2 from "../assets/bookingimage2.jpg";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <img
          src={bookingimage2}
          className="w-1/2 max-h-[90vh]  rounded-lg"
          alt="Centered Image"
        />
      </div>
    </>
  );
};

export default Home;
