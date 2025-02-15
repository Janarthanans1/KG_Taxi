export default function DateTimeInput() {
    return (
      <div className="flex flex-col gap-4 p-6 max-w-sm mx-auto">
        <label className="text-lg font-semibold">Select Date:</label>
        <input
          type="date"
          className="p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
  
        <label className="text-lg font-semibold">Select Time:</label>
        <input
          type="time"
          className="p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  }
  