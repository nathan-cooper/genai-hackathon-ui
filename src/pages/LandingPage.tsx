import HeadingGraphic from "../assets/headingGraphic.png";

const LandingPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col">

      <div className="flex flex-row bg-[#F6F6F6] pt-2 pr-12 pb-4 pl-16">
        <div className="flex flex-1 flex-col justify-between pb-12">
          <h1 className="text-right text-4xl font-bold pt-4">Evolve Financial Services</h1>
          <h1 className="text-3xl font-bold pt-6">Hello! I am here to help</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded w-fit ml-12">
            Chat with us
          </button>
        </div>

        <div className="flex flex-row">
          <div className="bg-[#F6F6F6] h-64 w-fit">
            <img className="h-[100%] w-auto object-contain" src={HeadingGraphic} />
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold pt-6 text-center">How can we help?</h1>
      <div className="flex flex-row justify-between pt-24 pl-24 pr-24">
        <a href="/chat?prompt=guidance" className="underline">Looking for financial guidance?</a>
        <a href="/chat?prompt=cards" className="underline">Can we suggest credit cards per your need?</a>
        <a href="/chat?prompt=loan" className="underline">Could a loan help you?</a>
      </div>

    </div>
  )
};

export default LandingPage;