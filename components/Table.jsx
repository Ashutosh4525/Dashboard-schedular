export default function Table({ data }) {
  return (
    <table className="w-full bg-white shadow rounded">
      <thead className="bg-gray-50">
        <tr>
          <th className="p-3 text-left">Date</th>
          <th className="p-3 text-left">Time</th>
          <th className="p-3 text-left">Session</th>
          <th className="p-3 text-left">Fees</th>
          <th className="p-3 text-left">Status</th>
          <th className="p-3 text-left">Actions</th>
        </tr>
      </thead>

      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="border-t">
            <td className="p-3">{row.date}</td>
            <td className="p-3">{row.time}</td>
            <td className="p-3">{row.session}</td>
            <td className="p-3">{row.fee}</td>
            <td className="p-3 text-green-600 font-semibold">{row.status}</td>
            <td className="p-3 flex gap-2">
              <button className="bg-blue-500 text-white px-3 py-1 rounded">Re-Schedule</button>
              <button className="bg-red-500 text-white px-3 py-1 rounded">Cancel</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
