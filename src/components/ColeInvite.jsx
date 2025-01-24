export default function ColeInvite() {
  return (
    <div class="min-h-screen font-poppins flex items-center justify-center bg-gradient-to-r from-roseQuartz to-transparent">
  <div class="shadow-lg p-8 w-full max-w-md">
    <h2 class="text-2xl font-semibold text-center mb-4">Party RSVP Form</h2>
    <p class="text-center text-gray-600 mb-6">Want to party with Cole? Let Us Know You’re Coming!</p>
    <form action="#" method="POST">
      <div class="flex mb-4">
        <div class="w-1/2 pr-2">
          <label for="first-name" class="block text-sm font-medium text-gray-700">First Name</label>
          <input type="text" id="first-name" name="first-name" class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div class="w-1/2 pl-2">
          <label for="last-name" class="block text-sm font-medium text-gray-700">Last Name</label>
          <input type="text" id="last-name" name="last-name" class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
      </div>
      
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" name="email" placeholder="example@example.com" class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
      </div>
   
      <div class="mb-4">
        <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
        <input type="tel" id="phone" name="phone" placeholder="(000) 000-0000" class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
      </div>
    
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700">Attendance</label>
        <div class="flex items-center space-x-4">
          <div class="flex items-center">
            <input type="radio" id="attending" name="attendance" value="yes" class="text-blue-500 focus:ring-blue-500" />
            <label for="attending" class="ml-2 text-sm">Yes</label>
          </div>
          <div class="flex items-center">
            <input type="radio" id="not-attending" name="attendance" value="no" class="text-red-500 focus:ring-red-500" />
            <label for="not-attending" class="ml-2 text-sm">No</label>
          </div>
        </div>
      </div>
      {/* <!-- Submit Button --> */}
      <div class="flex justify-center">
        <button type="submit" class="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
      </div>
    </form>
  </div>
</div>
  );
}

// google RSVP form examples for inspiration
