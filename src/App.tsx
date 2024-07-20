
const App = () => {

  return (
    <div className="w-screen h-screen flex flex-col">

      <div className="flex flex-row bg-gray-100 pt-2 pr-12 pb-8 pl-16">
        <div className="flex flex-col justify-between pb-12">
          <h1 className="text-3xl font-bold pt-6">Hello! I'm here to help</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded w-fit">
            Chat with us
          </button>
        </div>

        <div className="flex flex-1 flex-row justify-end">
          <div className="relative w-2/3">
            <div className="bg-gradient-to-r from-blue-900 via-blue-900 via-[85%] to-gray-100 bg-blue-900 h-64 w-full">
              <p>Heading Graphic</p>
            </div>
            <div className="bg-blue-500 h-32 w-64 absolute top-1/4">
              <p>Card graphic</p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold pt-6 text-center">Help us help you</h1>
      <div className="flex flex-row justify-between pt-24 pl-24 pr-24">
        <a href="test" className="underline">Looking for financial guidance?</a>
        <a href="test" className="underline">Can we suggest credit cards per your need?</a>
        <a href="test" className="underline">Could a loan help you?</a>
      </div>

    </div>
  )
}

export default App;
