import Navbar from "./Navbar";

function Card() {
    return (
      <>
      <Navbar/>
         <div class=" border-2 border-black-1000 mt-6 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 flex-raw">
      {/* mt:margin-top, p-6 */}
        <div class="flex-shrink-0">
          <img class="h-12 w-12" src="./foto.jpg" alt="ChitChat Logo" />
        </div>
        <div>
          <div class="text-xl font-medium text-black">ChitChat</div>
          <p class="text-gray-500">You have a new message!</p>
        </div>
      </div>
      </>
        
      
     
    );
  }
  
  export default Card;
