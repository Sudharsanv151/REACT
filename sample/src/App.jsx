const App = () => {
  return (
    <>
      
     <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-200 ">
      <div className="h-3/6 w-[30%]  flex flex-col justify-center items-center bg-gradient-to-tr-100 rounded-xl shadow-xl">
      <h1 className="p-1 h-2/2 w-2/1 text-xl flex justify-center items-center w-full font-bold size-2"> LOGIN </h1>
      <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4">
        <input type="text" name="" id="" placeholder="Name"  className="p-3 bg-[#f8f8f8] w-full font-bold outline-green-200 active:outline-green-500 focus:border-b-2 "/>
        <input type="number" name="" id="" placeholder="Mobile"className="p-3 bg-[#f8f8f8] w-full font-bold outline-green-200 active:outline-green-500 focus:border-b-2 " />
        <input type="password" name="" id="" placeholder="Password" className="p-3 bg-[#f8f8f8] w-full font-bold outline-green-200 active:outline-green-300 focus:border-b-2"/>
        <button type="submit" className="w-full bg-green-600 text-white p-3 outline-black">Register</button>
      </form>
      </div>
     </div>
    </>
  )
}

export default App;